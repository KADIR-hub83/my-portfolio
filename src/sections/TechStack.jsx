import { useGSAP } from '@gsap/react'
import TechIcon from '../components/models/TechLogos/TechIcon'
import TitleHeader from '../components/TitleHeader'
import { techStakeIcons } from '../constants'
import { gsap } from 'gsap'


const TechStack = () => {
 
    useGSAP(() =>{
      gsap.fromTo('.tech-card' , {y: 50 , opacity: 0 ,},{
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center'
        }
      })
    })

    


  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
         title='My Prefer Tech Stack'
         sub="The skills  I 'm familiar with"
        />
        <div className='tech-grid '>
            {techStakeIcons.map((icon) =>(
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                   <div className='tech-card-animated-bg'/>
                   <div className='tech-card-content'>
                       <div className='tech-icon-wrapper'>
                        <TechIcon model={icon}/>
                       </div>
                       <div className='padding-x w-full '>
                           <p>{icon.name}</p>
                       </div>
                   </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
