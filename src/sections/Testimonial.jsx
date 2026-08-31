import GlowCard from "../components/GlowCard.jsx";
import TitleHeader from "../components/TitleHeader";
import { testimonial } from "../constants/index.js";

const Testimonial = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        
  <TitleHeader
    title="What Clients Say About Abdul Kadir"
    sub="Client Reviews, Development Testimonials"
    id="testimonials-heading"
  />

<p className="text-white-50 md:text-sm mt-5 text-center w-[80%] mx-auto">
  Read genuine client feedback and testimonials about Abdul Kadir's
  web development services, including React development, Next.js
  development, frontend development, responsive web design, modern
  UI/UX, and full-stack web application development.
</p>

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          
          {testimonial.map((item) => (
            <GlowCard key={item.name} card={item}>
              <div className=" flex flex-col  rounded-xl">
                
                <div className="flex items-center gap-2">
                  <img 
                    src={item.imgPath} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-white-50">{item.mention}</p>
                  </div>
                </div>

                <p className="text-white-50 text-base leading-relaxed mt-2">
                  {item.review}
                </p>

              </div>
            </GlowCard>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonial;
