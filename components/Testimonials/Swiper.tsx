'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

function MySwiper() {
  const testimonials = [
    {
      title: 'Jonathan Smart',
      desc: '"Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor, in tempus"',
      text: 'Besta CTO',
      img: '/testimonial-author-1.png',
      rate: (
        <>
          <Star /> <Star /> <Star /> <Star /> <Star />
        </>
      ),
    },
    {
      title: 'Martino Tino',
      desc: '"Morbi non mi luctus felis molestie scelerisque. In ac libero viverra, placerat est interdum, rhoncus leo."',
      text: 'Web Analyst',
      img: '/testimonial-author-1.png',
      rate: (
        <>
          <Star /> <Star /> <Star /> <Star /> <Star />
        </>
      ),
    },
    {
      title: 'George Tasa',
      desc: '"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor, congue a fringilla sed, maximus et urna."',
      text: 'System Admin',
      img: '/testimonial-author-1.png',
      rate: (
        <>
          <Star /> <Star /> <Star />
        </>
      ),
    },
    {
      title: 'Sir James',
      desc: '"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor, congue a fringilla sed, maximus et urna."',
      text: 'New Villager',
      img: '/testimonial-author-1.png',
      rate: (
        <>
          <Star /> <Star /> <Star /> <Star />
        </>
      ),
    },
  ];

  return (
    <div className='w-full flex flex-row z-[2]'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2 }}
        className='w-full xl:w-4/5'
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.go-next',
            prevEl: '.go-prev',
          }}
          modules={[Navigation]}
          breakpoints={{
            900: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='pt-12 pl-12'>
              <div className='relative bg-gradient-to-br from-third to-secondary py-[40px] px-[30px] flex flex-col gap-5 text-white text-center h-[300px] w-full select-none cursor-grab'>
                <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full'>
                  <img
                    src={testimonial.img}
                    alt={testimonial.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <span className='flex flex-row justify-center items-center'>
                  {testimonial.rate}
                </span>
                <h4 className='text-2xl font-semibold'>{testimonial.title}</h4>
                <p className='italic font-light'>{testimonial.desc}</p>
                <p className='font-light'>{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 0.5 }}
        className='w-1/5 relative hidden xl:flex flex-col-reverse items-center justify-center'
      >
        <button className='go-prev'>
          <RightArrow />
        </button>
        <button className='go-next'>
          <LeftArrow />
        </button>
      </motion.div>
    </div>
  );
}

export default MySwiper;

const Star = () => {
  return (
    <svg
      enableBackground='new -1.23 -8.789 141.732 141.732'
      height='20px'
      id='Livello_1'
      version='1.1'
      viewBox='-1.23 -8.789 141.732 141.732'
      width='20px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <g id='Livello_100'>
        <path
          d='M139.273,49.088c0-3.284-2.75-5.949-6.146-5.949c-0.219,0-0.434,0.012-0.646,0.031l-42.445-1.001l-14.5-37.854   C74.805,1.824,72.443,0,69.637,0c-2.809,0-5.168,1.824-5.902,4.315L49.232,42.169L6.789,43.17c-0.213-0.021-0.43-0.031-0.646-0.031   C2.75,43.136,0,45.802,0,49.088c0,2.1,1.121,3.938,2.812,4.997l33.807,23.9l-12.063,37.494c-0.438,0.813-0.688,1.741-0.688,2.723   c0,3.287,2.75,5.952,6.146,5.952c1.438,0,2.766-0.484,3.812-1.29l35.814-22.737l35.812,22.737c1.049,0.806,2.371,1.29,3.812,1.29   c3.393,0,6.143-2.665,6.143-5.952c0-0.979-0.25-1.906-0.688-2.723l-12.062-37.494l33.806-23.9   C138.15,53.024,139.273,51.185,139.273,49.088'
          fill='#FFFFFF'
        />
      </g>
      <g id='Livello_1_1_' />
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevron-left'
    >
      <polyline points='15 18 9 12 15 6'></polyline>
    </svg>
  );
};

const RightArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-chevron-right'
    >
      <polyline points='9 18 15 12 9 6'></polyline>
    </svg>
  );
};
