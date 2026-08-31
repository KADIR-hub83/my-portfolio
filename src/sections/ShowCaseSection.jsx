import { useRef } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const base = import.meta.env.BASE_URL;

    const sectionref = useRef(null);
    const project1ref = useRef(null);
    const project2ref = useRef(null);
    const project3ref = useRef(null);
     
    useGSAP(() => {
        const project = [project1ref.current, project2ref.current, project3ref.current];
        
        project.forEach((card, index) =>{
            gsap.fromTo(
                card,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        });

        gsap.fromTo(sectionref.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <div id="work" ref={sectionref} className="app-showcase flex">
            <div className="w-full">
                <div className="showcaselayout">

                    {/* LEFT PROJECT */}
                    <div className="first-project-wrapper" ref={project1ref}>
                      <div className="relative  ">
  <div className="image-wrapper relative bg-[#ffefdb] rounded-2xl overflow-hidden">
    
    {/* Desktop Image */}
    <img
      src={base + "images/kadir.png"}
      className="h-full w-full object-cover rounded-2xl max-xl:hidden p-10"
      alt="First Project"
    />

    {/* Mobile Image */}
    <img
      src={base + "images/kadir.png"}
      className="h-full w-full object-cover rounded-2xl max-xl:block p-5"
      alt="First Project"
    />

    {/* Overlay */}
    {/* <div className="absolute inset-0 bg-black/20 rounded-2xl"></div> */}
</div>


</div>

                        <div className="text-content">
                            <h2>
                                I'm Kadir 
                            </h2>
                            <p className="text-white-50 md:text-sm">
                                A developer based in India with a deep passion for transforming innovative ideas into meaningful digital experiences. I enjoy building clean, efficient, and scalable applications that not only look great but also solve real problems. With a focus on modern UI/UX, smooth performance, and attention to detail, I turn concepts into high-quality code that feels intuitive and effortless for users. Every project I work on is driven by creativity, curiosity, and the desire to constantly learn and improve. My goal is to create products that leave a lasting impression and make technology simpler, smarter, and more accessible for everyone.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT PROJECT LIST */}
                    <div className="project-list-wrapper overflow-hidden">

                        <div className="project" ref={project2ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src={base + "images/project2.png"} alt="Second Project" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className="project" ref={project3ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src={base + "images/project3.png"} alt="Third Project" />
                            </div>
                            <h2>Startup Show Case</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShowCaseSection;
