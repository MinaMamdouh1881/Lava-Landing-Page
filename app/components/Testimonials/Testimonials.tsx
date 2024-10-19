import React from 'react';
import * as motion from 'framer-motion/client';
import Swiper from './Swiper';

function Testimonials() {
  return (
    <div className='flex flex-col justify-center items-center mt-[200px] relative'>
      <div className='absolute -top-[270px] right-0'>
        <img src='/right-bg-decor.png' alt='right-bg-decor' />
      </div>
      <div className='text-center mb-20'>
        <h1 className='font-bold text-5xl mb-5'>
          What They Think <span className='text-third'>About Us</span>
        </h1>
        <p className='max-w-[900px] text-textColor'>
          Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus
          non, convallis odio. Donec vitae magna ornare, pellentesque ex vitae,
          aliquet urna.
        </p>
      </div>

      <Swiper />
    </div>
  );
}

export default Testimonials;
