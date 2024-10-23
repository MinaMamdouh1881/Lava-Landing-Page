import * as motion from 'framer-motion/client';
function Landing() {
  return (
    <div className='w-full flex flex-col lg:flex-row-reverse justify-between mb-[300px]'>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='relative float-right ml-auto -z[1]'
      >
        <img
          src='/banner-bg.png'
          alt='lava-banner'
          className='object-contain'
          loading='lazy'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='lg:w-1/2 max-lg:mt-5 max-md:px-2 max-lg:pr-main flex flex-col gap-4 justify-center pl-main'
      >
        <h1 className='text-6xl font-extrabold leading-[80px]'>
          Simple App that we <span className='text-main'>CREATE</span>
        </h1>
        <p className='font-semibold text-textColor text-xl'>
          Lava HTML landing page template is provided by TemplateMo. You can
          modify and use it for your commercial websites for free of charge.
          This template is last updated on 29 Oct 2019.
        </p>
        <a href='#' className='main-btn bg-main'>
          KNOW US BETTER
        </a>
      </motion.div>
    </div>
  );
}
export default Landing;
