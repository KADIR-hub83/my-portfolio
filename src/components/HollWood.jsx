

import { useEffect, useState } from 'react';
import { navLinks } from '../constants/index.js';

const HollWood = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a className='logo' href='#hero'>ABDUL KADIR</a>
        <nav className='desktop'>
          <ul className=' cursor-pointer'>
            {navLinks.map((link, idx) => (
  <li key={idx} className='group'>
    <a href={link.link}>
      <span>{link.name}</span>
      <span className='underline'></span>
    </a>
  </li>
))}

          </ul>
        </nav>
        <a href="#contact" className='contact-btn group'>
          <div className='inner'>
            <span className='text-black max-md:text-[14px]'>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default HollWood;
