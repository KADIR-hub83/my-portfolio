import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
  <footer className='footer'>
    <div className='footer-container'>
       <div className='flex flex-col justify-center md:items-start items-center'> 
         <a href="/" className=' cursor-pointer transition-all duration-300 hover:bg-white/40 px-4 py-1 rounded-xl '>Visit My Blog</a>
       </div>
       <div className='socials'>
      
         {socialImgs.map((img) =>(
            <a className='icon' target='_blank' href={img.url} key={img.url}>
                <img src={img.imgPath} alt={img.name} />
            </a>
         ))}
       </div>
       <div className='flex flex-col justify-center'>
        <p className='text-center md:text-end'>
            &copy; {new Date().getFullYear()} Abdul Kadir | All rights reserved.
        </p>

       </div>
    </div>
  </footer>
  )
}

export default Footer
