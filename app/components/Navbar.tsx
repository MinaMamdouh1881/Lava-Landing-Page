'use client';
import { useState } from 'react';

function Navbar() {


  const [active, setActive] = useState('home');
  return (
    <div className='absolute bg-white top-5 left-1/2 -translate-x-1/2 flex justify-center items-center gap-28 px-4'>
      <h1 className='font-bold text-3xl tracking-widest'>LAVA</h1>
      <ul className='flex gap-4 text-textColor text-nowrap font-semibold '>
        <a
          href='#'
          onClick={() => setActive('home')}
          className={`hover:text-main ${active === 'home' ? 'text-main' : ''}`}
        >
          <li>HOME</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('about')}
          className={`hover:text-main ${active === 'about' ? 'text-main' : ''}`}
        >
          <li>ABOUT</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('testimonials')}
          className={`hover:text-main ${
            active === 'testimonials' ? 'text-main' : ''
          }`}
        >
          <li>TESTIMONIALS</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('drop-down')}
          className={`hover:text-main ${
            active === 'drop-down' ? 'text-main' : ''
          }`}
        >
          <li>DROP DOWN</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('contact-us')}
          className={`hover:text-main ${
            active === 'contact-us' ? 'text-main' : ''
          }`}
        >
          <li>CONTACT US</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
