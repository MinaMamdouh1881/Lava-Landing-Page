import React from 'react';

function Features() {
  const features = [
    {
      id: '01',
      img: '/features-icon-1.png',
      title: 'Trend Analysis',
      desc: 'Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.',
      link: 'Read More',
    },
    {
      id: '02',
      img: '/features-icon-2.png',
      title: 'Site Optimization',
      desc: 'Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam',
      link: 'Discover More',
    },
    {
      id: '03',
      img: '/features-icon-3.png',
      title: 'Email Design',
      desc: 'Curabitur pulvinar vel odio sed sagittis. Nam maximus ex diam, nec consectetur diam.',
      link: 'More Details',
    },
  ];
  return (
    <div className='grid grid-cols-3 gap-4 px-main mb-20'>
      {features.map((el) => (
        <div key={el.id} className={`feature after:content-["${el.id}"]`}>
          <img src={`${el.img}`} alt='' className='w-fit object-contain' />
          <h2 className='font-semibold text-2xl'>{el.title}</h2>
          <p className='text-center text-textColor'>{el.desc}</p>
          <a href='#' className='main-btn bg-third'>
            {el.link}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Features;
