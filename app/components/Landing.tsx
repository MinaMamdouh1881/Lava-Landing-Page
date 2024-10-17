import Image from 'next/image';

function Landing() {
  return (
    <div className='h-screen w-full flex justify-between '>
      <div className='w-1/2 flex flex-col gap-4 h-full justify-center pl-main'>
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
      </div>
      <div className=''>
        <img
          src='/banner-bg.png'
          alt='lava-banner'
          className='w-full object-contain'
          loading='lazy'
        />
      </div>
    </div>
  );
}

export default Landing;
