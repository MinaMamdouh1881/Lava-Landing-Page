import * as motion from 'framer-motion/client';

function About() {
  return (
    <div className='relative mt-48'>
      <div className='absolute -top-[270px] left-0 '>
        <img src='/left-bg-decor.png' alt='left-bg-decor' />
      </div>
      <div className='px-5 md:px-main  flex flex-col justify-center items-center gap-10 lg:flex-row'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img src='/left-image.png' alt='left mobile' />
        </motion.div>
        <div className='lg:w-1/2 flex flex-col gap-10'>
          <div className='flex gap-5'>
            <motion.div
              className=' w-1/6'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img
                src='about-icon-01.png'
                alt='lava-about-1'
                className='object-contain w-48'
              />
            </motion.div>
            <motion.div
              className='flex flex-col gap-5 w-5/6'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className='font-semibold text-xl xlg:text-3xl'>
                Vestibulum pulvinar rhoncus
              </h3>
              <p className=' text-textColor text-lg'>
                Please do not redistribute this template ZIP file for a download
                purpose. You may contact us for additional licensing of our
                template or to get a PSD file.
              </p>
            </motion.div>
          </div>
          <div className='flex gap-5'>
            <motion.div
              className=' w-1/6'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <img
                src='about-icon-02.png'
                alt='lava-about-1'
                className='object-contain w-48'
              />
            </motion.div>
            <motion.div
              className='flex flex-col gap-5 w-5/6'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <h3 className='font-semibold text-xl xlg:text-3xl'>
                Sed blandit quam in velit
              </h3>
              <p className=' text-textColor text-lg'>
                You can download Lava Template from our website. Duis viverra,
                ipsum et scelerisque placerat, orci magna consequat ligula.
              </p>
            </motion.div>
          </div>
          <div className='flex gap-5'>
            <motion.div
              className=' w-1/6'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <img
                src='about-icon-03.png'
                alt='lava-about-1'
                className='object-contain w-48'
              />
            </motion.div>
            <motion.div
              className='flex flex-col gap-5 w-5/6'
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'all' }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <h3 className='font-semibold text-xl xlg:text-3xl'>
                Aenean faucibus venenatis
              </h3>
              <p className=' text-textColor text-lg'>
                Phasellus in imperdiet felis, eget vestibulum nulla. Aliquam nec
                dui nec augue maximus porta. Curabitur tristique lacus.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
