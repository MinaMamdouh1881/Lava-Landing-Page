import { desc } from 'framer-motion/client';
import React from 'react';

function About() {
  const Details = [
    {
      title: 'Vestibulum pulvinar rhoncus',
      desc: 'Please do not redistribute this template ZIP file for a download purpose. You may contact us for additional licensing of our template or to get a PSD file.',
      img: 'about-icon-01.png',
    },
    {
      title: 'Sed blandit quam in velit',
      desc: 'You can download Lava Template from our website. Duis viverra, ipsum et scelerisque placerat, orci magna consequat ligula.',
      img: 'about-icon-02.png',
    },
    {
      title: 'Aenean faucibus venenatis',
      desc: 'Phasellus in imperdiet felis, eget vestibulum nulla. Aliquam nec dui nec augue maximus porta. Curabitur tristique lacus.',
      img: 'about-icon-03.png',
    },
  ];
  return (
    <div className='relative mt-48'>
      <div className='absolute -top-[270px] left-0'>
        <img src='/left-bg-decor.png' alt='left-bg-decor' />
      </div>
      <div className='px-main grid grid-cols-2'>
        <div className='col-span-1'>
          <img src='/left-image.png' alt='left mobile' />
        </div>
        <div className='flex flex-col col-span-1 gap-10'>
          {Details.map((el, index) => (
            <div key={index} className='flex gap-5'>
              <div className=' w-1/6'>
                <img
                  src={`${el.img}`}
                  alt='lava-about-1'
                  className='object-contain w-48'
                />
              </div>
              <div className='flex flex-col gap-5 w-5/6'>
                <h3 className='font-semibold text-3xl'>{el.title}</h3>
                <p className=' text-textColor text-lg'>{el.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
