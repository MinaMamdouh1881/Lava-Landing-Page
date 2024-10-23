'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  return (
    <div className='absolute max-md:w-full bg-white top-0 md:top-5 left-1/2 -translate-x-1/2 flex justify-center items-center gap-28 px-4 max-md:py-3 z-10'>
      <h1 className='font-bold text-3xl tracking-widest'>LAVA</h1>
      <ul className='hidden md:flex gap-4 text-textColor text-nowrap font-semibold '>
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
          onClick={() => setActive('contact-us')}
          className={`hover:text-main ${
            active === 'contact-us' ? 'text-main' : ''
          }`}
        >
          <li>CONTACT US</li>
        </a>
      </ul>
      {/* burger menu */}
      <button
        onClick={() => setToggle((prev) => !prev)}
        className='flex flex-col gap-2 md:hidden group'
      >
        <motion.span
          initial={{ width: 32 }}
          animate={{
            rotate: toggle ? 45 : 0,
            translateY: toggle ? 10 : 0,
            width: toggle ? 40 : 32,
          }}
          className='h-[2px] bg-black'
        ></motion.span>
        <motion.span
          animate={{ opacity: toggle ? 0 : 1 }}
          className='w-10 h-[2px] bg-black'
        ></motion.span>
        <motion.span
          initial={{ width: 32 }}
          animate={{
            rotate: toggle ? -45 : 0,
            translateY: toggle ? -10 : 0,
            width: toggle ? 40 : 32,
          }}
          className='h-[2px] bg-black'
        ></motion.span>
      </button>
      <motion.ul
        initial={{ y: 150, x: 1000 }}
        animate={{ x: toggle ? 0 : 1000 }}
        className='md:hidden absolute bg-white w-10/12 flex flex-col gap-4 text-textColor text-nowrap font-semibold px-4 py-4'
      >
        <a
          href='#'
          onClick={() => setActive('home')}
          className='hover:text-main bg-textBg p-2 text-center hover:bg-textHoverBg'
        >
          <li>HOME</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('about')}
          className='hover:text-main bg-textBg p-2 text-center hover:bg-textHoverBg'
        >
          <li>ABOUT</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('testimonials')}
          className='hover:text-main bg-textBg p-2 text-center hover:bg-textHoverBg'
        >
          <li>TESTIMONIALS</li>
        </a>
        <a
          href='#'
          onClick={() => setActive('contact-us')}
          className='hover:text-main bg-textBg p-2 text-center hover:bg-textHoverBg'
        >
          <li>CONTACT US</li>
        </a>
      </motion.ul>
    </div>
  );
}

export default Navbar;
