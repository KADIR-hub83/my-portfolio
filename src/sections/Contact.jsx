import React, { useEffect, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import emailjs from "@emailjs/browser";

/* -----------------------
  CONFIG
------------------------ */
const OTP_LENGTH = 6;
const OTP_EXPIRY_MS = 5 * 60 * 1000;   // 5 minutes
const RESEND_COOLDOWN_MS = 30 * 1000;  // 30 seconds

export default function Contact() {
  /* -----------------------
    Refs & basic form state
  ------------------------ */
  const formRef = useRef(null);
  const base = import.meta.env.BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // used for Send / OTP actions
  const [toast, setToast] = useState({ show: false, type: "", text: "" });

  /* -----------------------
    OTP states
  ------------------------ */
  const [otpModal, setOtpModal] = useState(false);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState(Array.from({ length: OTP_LENGTH }, () => ""));
  const inputRefs = useRef(Array.from({ length: OTP_LENGTH }, () => React.createRef()));
  const [shake, setShake] = useState(false);

  const [otpExpiry, setOtpExpiry] = useState(null);
  const [resendAvailableAt, setResendAvailableAt] = useState(null);
  const [timerLeft, setTimerLeft] = useState({ expiryLeft: 0, resendLeft: 0 });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* -----------------------
    Toast helper (your previous top-center style)
  ------------------------ */
  const showToast = (type, text, duration = 3500) => {
    setToast({ show: true, type, text });
    setTimeout(() => setToast({ show: false, type: "", text: "" }), duration);
  };

  /* -----------------------
    Validation (name,email,mobile,message)
    Mobile required: min 10, max 14 digits (only digits)
  ------------------------ */
  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";

    if (!formData.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(formData.email)) e.email = "Enter a valid email";

    if (!formData.mobile.trim()) e.mobile = "Mobile number is required";
    else if (!/^[0-9]{10,14}$/.test(formData.mobile.trim()))
      e.mobile = "Enter a valid number (10–14 digits)";

    if (!formData.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* -----------------------
    Generate OTP
  ------------------------ */
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    // For debugging (remove in production) you may uncomment:
    // console.log("Generated OTP:", otp);
    return otp;
  };

  /* -----------------------
    Send OTP (uses OTP-specific env variables)
    Make sure these env vars point to your OTP EmailJS service/template/public key
  ------------------------ */
  const sendOtpEmail = async (otpToSend) => {
    return emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_OTP_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_OTP_TEMPLATE_ID,
      {
        otp: otpToSend,
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile
      },
      import.meta.env.VITE_APP_EMAILJS_OTP_PUBLIC_ID
    );
  };

  /* -----------------------
    Form submit -> validate -> send OTP -> open modal
  ------------------------ */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast("error", "Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    try {
      const otp = generateOTP();
      await sendOtpEmail(otp);

      setOtpExpiry(Date.now() + OTP_EXPIRY_MS);
      setResendAvailableAt(Date.now() + RESEND_COOLDOWN_MS);
      setOtpModal(true);
      setEnteredOTP(Array.from({ length: OTP_LENGTH }, () => ""));

      setTimeout(() => inputRefs.current[0].current?.focus(), 80);
      showToast("success", "OTP sent successfully!");
    } catch (err) {
      console.error("OTP Send Error:", err);
      showToast("error", "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------
    Timer loop for expiry + resend cooldown
  ------------------------ */
  useEffect(() => {
    let timerId = null;
    const tick = () => {
      const now = Date.now();
      const expiryLeft = otpExpiry ? Math.max(0, otpExpiry - now) : 0;
      const resendLeft = resendAvailableAt ? Math.max(0, resendAvailableAt - now) : 0;
      setTimerLeft({ expiryLeft, resendLeft });
      if (expiryLeft === 0 && otpExpiry) {
        setGeneratedOTP("");
      }
    };
    if (otpModal) {
      tick();
      timerId = setInterval(tick, 500);
    } else {
      setTimerLeft({ expiryLeft: 0, resendLeft: 0 });
    }
    return () => clearInterval(timerId);
  }, [otpModal, otpExpiry, resendAvailableAt]);

  /* -----------------------
    OTP input change (auto-push)
  ------------------------ */
  const handleOTPChange = (val, idx) => {
    // allow only one digit or empty
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...enteredOTP];
    next[idx] = val;
    setEnteredOTP(next);

    if (val && idx < OTP_LENGTH - 1) {
      inputRefs.current[idx + 1].current.focus();
    }
  };

  /* -----------------------
    OTP key handling: backspace + arrows
  ------------------------ */
  const handleOTPKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      // if current empty, move to previous
      if (enteredOTP[idx] === "" && idx > 0) {
        inputRefs.current[idx - 1].current.focus();
      } else {
        const copy = [...enteredOTP];
        copy[idx] = "";
        setEnteredOTP(copy);
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      inputRefs.current[idx - 1].current.focus();
    } else if (e.key === "ArrowRight" && idx < OTP_LENGTH - 1) {
      inputRefs.current[idx + 1].current.focus();
    }
  };

  /* -----------------------
    Handle paste (paste full OTP)
  ------------------------ */
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(paste)) return;
    const chars = paste.slice(0, OTP_LENGTH).split("");
    const newArr = Array.from({ length: OTP_LENGTH }, () => "");
    chars.forEach((c, i) => {
      newArr[i] = c;
    });
    setEnteredOTP(newArr);
    const nextIndex = Math.min(chars.length, OTP_LENGTH - 1);
    inputRefs.current[nextIndex].current?.focus();
    e.preventDefault();
  };

  /* -----------------------
    Resend OTP
  ------------------------ */
  const resendOtp = async () => {
    if (resendAvailableAt && Date.now() < resendAvailableAt) return;

    try {
      setLoading(true);
      const otp = generateOTP();
      await sendOtpEmail(otp);
      setOtpExpiry(Date.now() + OTP_EXPIRY_MS);
      setResendAvailableAt(Date.now() + RESEND_COOLDOWN_MS);
      setEnteredOTP(Array.from({ length: OTP_LENGTH }, () => ""));
      setTimeout(() => inputRefs.current[0].current?.focus(), 80);
      showToast("success", "OTP resent successfully!");
    } catch (err) {
      console.error("Resend OTP error:", err);
      showToast("error", "Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------
    Verify OTP & send final emails
  ------------------------ */
  const verifyAndSendMessage = async () => {
    const typed = enteredOTP.join("");
    if (typed.length < OTP_LENGTH) {
      setShake(true);
      setTimeout(() => setShake(false), 700);
      showToast("error", "Please enter the complete OTP.");
      return;
    }
    if (typed !== generatedOTP) {
      setShake(true);
      setTimeout(() => setShake(false), 700);
      showToast("error", "Incorrect OTP!");
      return;
    }

    showToast("success", "OTP verified successfully!");
    setLoading(true);

    try {
      // 1) send to your admin (main template)
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID
      );

      // 2) send client auto-reply (thank you) using template_pmhk28v
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_CLIENT_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          countryCode: formData.countryCode || "",
          mobile: formData.mobile,
          message: formData.message
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_ID
      );

      showToast("success", "Thank you for connecting with Kadir!");

      // reset form + OTP
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setEnteredOTP(Array.from({ length: OTP_LENGTH }, () => ""));
      setGeneratedOTP("");
      setOtpExpiry(null);
      setResendAvailableAt(null);
      setOtpModal(false);
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error("Final send error:", err);
      showToast("error", "Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------
    Utility to format ms -> "Xs"
  ------------------------ */
  const formatMs = (ms) => {
    if (!ms || ms <= 0) return "0s";
    return Math.ceil(ms / 1000) + "s";
  };

  /* -----------------------
    Small shake animation CSS inserted inline
  ------------------------ */
  const extraStyles = `
    @keyframes shakeX {
      0% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-6px); }
      80% { transform: translateX(6px); }
      100% { transform: translateX(0); }
    }
    .shake {
      animation: shakeX 0.6s ease;
    }
  `;

  /* -----------------------
    RENDER
  ------------------------ */
  return (
    <section id="contact" className="flex-center section-padding relative">
      <style>{extraStyles}</style>

      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Get In Touch" sub="Contact Form" />

        <div className="mt-16 grid-12-cols gap-8">
          {/* LEFT: Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-4" noValidate>

                {/* Name */}
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 border rounded-md"
                    placeholder="Full name"
                  />
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 border rounded-md"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block mb-1">Mobile Number</label>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full p-3 border rounded-md"
                    placeholder="10–14 digit number"
                  />
                  {errors.mobile && <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 border rounded-md resize-none"
                    placeholder="Type your message..."
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button (your old CTA style) */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`mt-2 relative inline-flex items-center justify-center px-10 py-4 rounded-md focus:outline-none ${
                    loading ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg"
                  }`}
                  aria-busy={loading}
                >
                  <div className="cta-button group flex items-center gap-3">
                    <div className="bg-circle" aria-hidden />
                    <p className="text">{loading ? "Sending..." : "Send Message"}</p>
                    <div className="arrow-wrapper">
                      <img src={base + "images/arrow-up.svg"} alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: 3D */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-black rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>

      {/* -----------------------
        OTP MODAL (center)
      ------------------------ */}
      {otpModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="bg-[#111] text-white p-6 rounded-xl w-[92%] max-w-sm shadow-2xl pointer-events-auto">
            <h3 className="text-center text-lg font-semibold mb-4">ENTER OTP</h3>

            {/* expiry and resend */}
            <div className="flex justify-between items-center text-sm mb-4">
              <div>Expires: <span className="font-medium">{formatMs(timerLeft.expiryLeft)}</span></div>

              <div>
                {timerLeft.resendLeft > 0 ? (
                  <span className="text-gray-300">Resend in {formatMs(timerLeft.resendLeft)}</span>
                ) : (
                  <button onClick={resendOtp} disabled={loading} className="text-blue-400">Resend OTP</button>
                )}
              </div>
            </div>

            {/* OTP inputs (paste supported) */}
            <div className={`flex justify-center gap-2 mb-4 ${shake ? "shake" : ""}`} onPaste={handlePaste}>
              {enteredOTP.map((d, i) => (
                <input
                  key={i}
                  ref={inputRefs.current[i]}
                  maxLength={1}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={d}
                  onChange={(e) => handleOTPChange(e.target.value.replace(/\D/g, ""), i)}
                  onKeyDown={(e) => handleOTPKeyDown(e, i)}
                  className="w-12 h-12 bg-gray-800 text-center rounded-lg text-xl border border-gray-600 focus:border-blue-400 outline-none"
                />
              ))}
            </div>

            <div className="flex justify-between">
              <button onClick={() => { setOtpModal(false); setEnteredOTP(Array.from({ length: OTP_LENGTH }, () => "")); }} className="px-6 py-2 bg-gray-700 rounded-md">Cancel</button>

              <button onClick={verifyAndSendMessage} disabled={loading} className="px-6 py-2 bg-blue-600 rounded-md">
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -----------------------
        Toast (your previous top-center style)
        fixed z so it always appears above modal
      ------------------------ */}
      <div
        aria-live="polite"
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[99999] transition-all duration-300 ${
          toast.show ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div
          className={`px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 border ${
            toast.type === "success" ? "bg-green-600 border-green-400 text-white" : "bg-red-600 border-red-400 text-white"
          }`}
        >
          <span className="font-semibold">{toast.type === "success" ? "Success" : "Error"}</span>
          <span className="text-sm">{toast.text}</span>
          <button onClick={() => setToast({ show: false, type: "", text: "" })} className="ml-3 text-white/80 hover:text-white">✕</button>
        </div>
      </div>
    </section>
  );
}
