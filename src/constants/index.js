// ------------- BASE URL FOR GITHUB PAGES -------------
const base = import.meta.env.BASE_URL;

// ------------- NAV LINKS -------------
export const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

// ------------- HERO WORDS -------------
export const words = [
  { text: "Ideas", imgPath: base + "images/ideas.svg" },
  { text: "Concepts", imgPath: base + "images/concepts.svg" },
  { text: "Code", imgPath: base + "images/code.svg" },
  { text: "Designs", imgPath: base + "images/designs.svg" },
];

// ------------- COUNTER ITEMS -------------
export const counterItems = [
  { value: 4, suffix: "", label: "years of experience" },
  { value: 80, suffix: "+", label: "projects completed" },
  { value: 75, suffix: "+", label: "happy clients" },
  { value: 65, suffix: "+", label: "clients reviews" },
];

// ------------- SKILLS -------------
export const skills = [
  { name: "HTML", icon: base + "images/html.svg" },
  { name: "CSS", icon: base + "images/css.svg" },
  { name: "JavaScript", icon: base + "images/javascript.svg" },
  { name: "React", icon: base + "images/react.svg" },
  { name: "Node.js", icon: base + "images/nodejs.svg" },
  { name: "Express.js", icon: base + "images/express.svg" },
  { name: "MongoDB", icon: base + "images/mongodb.svg" },
  { name: "Git", icon: base + "images/git.svg" },
];

// ------------- LOGO ICONS -------------
export const logoIconsList = [
  { imgPath: base + "images/logos/company-logo-1.png" },
  { imgPath: base + "images/logos/company-logo-2.png" },
  { imgPath: base + "images/logos/company-logo-3.png" },
  { imgPath: base + "images/logos/company-logo-4.png" },
  { imgPath: base + "images/logos/company-logo-5.png" },
  { imgPath: base + "images/logos/company-logo-6.png" },
  { imgPath: base + "images/logos/company-logo-7.png" },
  { imgPath: base + "images/logos/company-logo-8.png" },
  { imgPath: base + "images/logos/company-logo-9.png" },
  { imgPath: base + "images/logos/company-logo-10.png" },
  { imgPath: base + "images/logos/company-logo-11.png" },
];

// ------------- ABILITIES -------------
export const abilities = [
  {
    imgPath: base + "images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality work is my top priority...",
  },
  {
    imgPath: base + "images/chat.png",
    title: "Reliable Communication",
    desc: "Keep you updated at every step...",
  },
  {
    imgPath: base + "images/time.png",
    title: "On Time Delivery",
    desc: "Making sure projects are completed on time...",
  },
];

// ------------- EXPERIENCE CARDS (FULLY FIXED) -------------
export const expCards = [
  {
    review: "Kadir is an exceptional developer...",
    imgPath: base + "images/exp1.png",
    logoPath: base + "images/logo1.png",
    title: "FrontEnd Developer",
    Date: "November 2024",
    responsibilities: [
      "Developing user-friendly web applications using React.",
      "Optimizing UI components for maximum speed.",
      "Collaborating with designers and backend developers."
    ],
  },
  {
    review: "Kadir consistently delivers high-quality work...",
    imgPath: base + "images/exp2.png",
    logoPath: base + "images/logo2.png",
    title: "Full Stack Developer",
    Date: "January 2025",
    responsibilities: [
      "Building full-stack web apps with Node.js & MongoDB.",
      "Implementing REST APIs and authentication.",
      "Maintaining scalable backend architecture."
    ],
  },
  {
    review: "Kadir is an exceptional developer...",
    imgPath: base + "images/exp3.png",
    logoPath: base + "images/logo3.png",
    title: "React Native Developer",
    Date: "April 2025",
    responsibilities: [
      "Developing cross-platform mobile applications.",
      "Improving app performance & UI animations.",
      "Publishing apps and maintaining updates."
    ],
  },
];

// ------------- 3D MODELS -------------
export const techStakeIcons = [
  {
    name: "React Developer",
    modelPath: base + "models/compressed-react_logo-transformed.glb",
    scale: [1, 1, 1],
    rotation: [0, 0, 0],
  },
  {
    name: "Node JS Developer",
    modelPath: base + "models/compressed-node-transformed.glb",
    scale: [4.5, 4.5, 4.5],
    rotation: [5, 4.6, 4.9],
  },
  {
    name: "Python Developer",
    modelPath: base + "models/compressed-python-transformed.glb",
    scale: [0.8, 0.8, 0.8],
    rotation: [0, 0, 0],
  },
  {
    name: "Three JS Developer",
    modelPath: base + "models/compressed-git-svg-transformed.glb",
    scale: [0.05, 0.05, 0.05],
    rotation: [-1.2, 0.8, -1.5],
  },
  {
    name: "ThreeJS Logo",
    modelPath: base + "models/compressed-three.js-transformed.glb",
    scale: [0.05, 0.05, 0.05],
    rotation: [0, 0, 0],
  },
];

// ------------- TESTIMONIALS -------------
export const testimonial = [
  {
    name: "Aarav Sharma",
    mention: "@aarav.codes",
    review:
      "Abdul Kadir did an excellent job designing and developing my website. The UI was clean, fast, responsive, and highly professional. I would highly recommend him for modern web design and frontend development projects.",
    imgPath: base + "images/client1.png",
    alt: "Aarav Sharma client testimonial for Abdul Kadir web development services",
  },

  {
    name: "Rohan Mehta",
    mention: "@rohan.tech",
    review:
      "Working with Abdul Kadir was a great experience. Communication was clear, the development process was smooth, and the final website matched my requirements perfectly. I would definitely work with him again for future web development projects.",
    imgPath: base + "images/client2.png",
    alt: "Rohan Mehta review of Abdul Kadir web developer",
  },

  {
    name: "Sahil Khan",
    mention: "@sahil.web",
    review:
      "Abdul Kadir built my website exactly the way I imagined. The design was modern, the animations were smooth, the color theme looked professional, and the entire website was fully responsive and mobile-friendly.",
    imgPath: base + "images/client3.png",
    alt: "Sahil Khan testimonial for Abdul Kadir responsive website development",
  },

  {
    name: "Adarsh Gupta",
    mention: "@adash.tech",
    review:
      "Abdul Kadir is a talented web developer with great attention to detail. He created a modern, professional, and visually appealing portfolio website with clean layouts and a smooth user experience.",
    imgPath: base + "images/client4.png",
    alt: "Adarsh Gupta client feedback for Abdul Kadir portfolio website development",
  },

  {
    name: "Vikram Singh",
    mention: "@vikram.designs",
    review:
      "Abdul Kadir delivered the project on time with clean code, excellent design quality, and strong attention to performance. The website was responsive, user-friendly, and professionally developed.",
    imgPath: base + "images/client5.png",
    alt: "Vikram Singh review for Abdul Kadir professional web development",
  },

  {
    name: "Sidd Verma",
    mention: "@sidd.verma",
    review:
      "I had a great experience working with Abdul Kadir. The website had a beautiful layout, responsive design, smooth performance, and an easy-to-use interface. His support and communication throughout the project were excellent.",
    imgPath: base + "images/client6.png",
    alt: "Sidd Verma testimonial for Abdul Kadir responsive web design services",
  },
];


// ------------- SOCIAL ICONS -------------
export const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/itzz._.kadir/",
    imgPath: base + "images/insta.png",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/abdul.kadir.835677/",
    imgPath: base + "images/fb.png",
  },
  {
    name: "x.com",
    url: "https://x.com/Kaddiiirrrr_",
    imgPath: base + "images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/abdul-kadir-882467328/",
    imgPath: base + "images/linkedin.png",
  },
];
