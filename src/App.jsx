import LogoSection from "./sections/LogoSection"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonial from "./sections/Testimonial"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import HollWood from "./components/HollWood"



const App = () => {
  return (
    <>
    <HollWood/>
     <Hero/>
     <ShowCaseSection/>
     <LogoSection/>
     <FeatureCards/>
     <ExperienceSection/>
      <TechStack/>
     <Testimonial/>
     <Contact/>
    <Footer/>
    </>
  )
}

export default App
