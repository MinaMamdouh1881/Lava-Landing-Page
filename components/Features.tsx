import * as motion from 'framer-motion/client';

function Features() {
  return (
    <div id='about' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 sm:px-10 lg:px-main mb-[300px]'>
      <motion.div
        className='feature z-10 after:content-["1"]'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ duration: 0.5 }}
      >
        <img
          src='/features-icon-1.png'
          alt=''
          className='w-fit object-contain'
        />
        <h2 className='font-semibold text-2xl'>Trend Analysis</h2>
        <p className='text-center text-textColor'>
          Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
          consectetur diam.
        </p>
        <a href='#' className='main-btn bg-third'>
          Read More
        </a>
      </motion.div>
      <motion.div
        className='feature z-10 after:content-["2"]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ duration: 0.5 }}
      >
        <img
          src='/features-icon-2.png'
          alt=''
          className='w-fit object-contain'
        />
        <h2 className='font-semibold text-2xl'>Site Optimization</h2>
        <p className='text-center text-textColor'>
          Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
          consectetur diam.
        </p>
        <a href='#' className='main-btn bg-third'>
          Discover More
        </a>
      </motion.div>
      <motion.div
        className='feature z-10 after:content-["3"]'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'all' }}
        transition={{ duration: 0.5 }}
      >
        <img
          src='/features-icon-3.png'
          alt=''
          className='w-fit object-contain'
        />
        <h2 className='font-semibold text-2xl'>Email Design</h2>
        <p className='text-center text-textColor'>
          Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec
          consectetur diam.
        </p>
        <a href='#' className='main-btn bg-third'>
          More Details
        </a>
      </motion.div>
    </div>
  );
}

export default Features;
