import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaRss,
  FaDribbble,
} from 'react-icons/fa6';
function ContactUs() {
  const Links = [
    {
      id: 1,
      icon: <FaFacebookF size={20} color='white' />,
    },
    {
      id: 2,
      icon: <FaXTwitter size={20} color='white' />,
    },
    {
      id: 3,
      icon: <FaLinkedinIn size={20} color='white' />,
    },
    {
      id: 4,
      icon: <FaRss size={20} color='white' />,
    },
    {
      id: 5,
      icon: <FaDribbble size={20} color='white' />,
    },
  ];
  return (
    <div
    id='contact'
      className='relative pt-[150px] mt-[100px]'
      style={{
        backgroundImage: `url('footer-bg.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        width: '100%',
      }}
    >
      {/* content */}
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-5 md:px-main mb-10'>
        <form
          action=''
          className='p-11 lg:w-1/2 bg-white flex flex-col justify-center rounded-md shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'
        >
          <div className='grid grid-cols-2 gap-5 mb-5'>
            <input
              type='text'
              placeholder='Full Name'
              className='border focus:outline-none py-3 px-5 rounded-md text-textColor col-span-2 sm:col-span-1'
            />
            <input
              type='email'
              placeholder='E-Mail Address'
              className='border focus:outline-none py-3 px-5 rounded-md text-textColor col-span-2 sm:col-span-1'
            />
          </div>
          <textarea
            rows={5}
            placeholder='Your Message'
            className='border focus:outline-none py-3 px-5 rounded-md text-textColor w-full resize-none mb-5'
          ></textarea>
          <button className='bg-third hover:bg-secondary w-fit duration-300 py-4 px-8 rounded-full text-white mx-auto font-semibold whitespace-nowrap'>
            SEND MESSAGE NOW
          </button>
        </form>
        <div className='lg:w-1/2 flex flex-col gap-5 max-lg:text-center'>
          <h2 className='text-5xl font-semibold text-white'>
            More About <span className='text-main'>Lava</span>
          </h2>
          <p className='text-white text-lg'>
            Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo
            auctor. Duis at finibus odio. Vivamus ut pharetra arcu, in porta
            metus. Suspendisse blandit pulvinar ligula ut elementum.
          </p>
          <p className='text-white text-lg'>
            If you need this contact form to send email to your inbox, you may
            follow our contact page for more detail.
          </p>
          <ul className='flex flex-row gap-5 max-lg:justify-center'>
            {Links.map((el) => (
              <a
                key={el.id}
                href='#'
                className='border border-white hover:bg-third duration-300 p-3 rounded-full'
              >
                <li>{el.icon}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      {/* Footer */}
      <div className='border-t border-white/30 py-14 text-center'>
        <h2 className='text-white text-xl'>
          Copyright © 2024 Lava Landing Page | Designed by Mina Mamdouh
        </h2>
      </div>
    </div>
  );
}

export default ContactUs;
