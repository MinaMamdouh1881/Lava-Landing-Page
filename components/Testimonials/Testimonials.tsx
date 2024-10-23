import * as motion from 'framer-motion/client';
import Swiper from './Swiper';
import { delay } from 'framer-motion';

function Testimonials() {
  return (
    <div className='flex flex-col justify-center items-center mt-[200px] relative px-5 md:px-main '>
      <div className='absolute -top-[270px] right-0'>
        <img src='/right-bg-decor.png' alt='right-bg-decor' />
      </div>
      <div className='text-center mb-20 overflow-hidden'>
        <motion.h1 className='font-bold text-5xl mb-5'>
          {'What They Think'.split('').map((e, i) => (
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + 0.1 * i }}
              viewport={{ once: true }}
              key={i}
            >
              {e}
            </motion.span>
          ))}{' '}
          <ul className='text-third inline-flex'>
            {'About Us'.split('').map((e, i) => (
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + 0.1 * i }}
                viewport={{ once: true }}
                key={i}
              >
                {e}
              </motion.li>
            ))}
          </ul>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 3 }}
          viewport={{ once: true }}
          className='max-w-[900px] text-textColor'
        >
          Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus
          non, convallis odio. Donec vitae magna ornare, pellentesque ex vitae,
          aliquet urna.
        </motion.p>
      </div>

      <Swiper />
    </div>
  );
}

export default Testimonials;
