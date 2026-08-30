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
  { value: 2, suffix: "", label: "years of experience" },
  { value: 40, suffix: "+", label: "projects completed" },
  { value: 10, suffix: "+", label: "happy clients" },
  { value: 13, suffix: "+", label: "clients reviews" },
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
    review: "Kadir did an amazing job! The UI was clean, fast, and extremely professional. Highly recommended for modern web design.",
    imgPath: base + "images/client1.png",
  },
  {
    name: "Rohan Mehta",
    mention: "@rohan.tech",
    review: "Very impressive work! Perfect communication and delivered exactly what I wanted. Will collaborate again soon.",
    imgPath: base + "images/client2.png",
  },
  {
    name: "Sahil Khan",
    mention: "@sahil.web",
    review: "He built my website exactly how I imagined. Smooth animations, perfect color theme, and mobile friendly.",
    imgPath: base + "images/client3.png",
  },
  {
    name: "Adarsh Gupta",
    mention: "@priyastyles",
    review: "Super talented developer! I loved the attention to detail. My portfolio looks stunning now.",
    imgPath: base + "images/client4.png",
  },
  {
    name: "Vikram Singh",
    mention: "@vikram.designs",
    review: "A truly skilled creator. Delivered on time, with clean code and amazing design sense.",
    imgPath: base + "images/client5.png",
  },
  {
    name: "Sidd Verma",
    mention: "@neha.creates",
    review: "Loved the overall experience! Great support, beautiful layout, and very user-friendly design also good in everthing.",
    imgPath: base + "images/client6.png",
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
