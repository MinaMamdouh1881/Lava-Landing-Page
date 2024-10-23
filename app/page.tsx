import Image from 'next/image';
import Landing from '@/components/Landing';
import Features from '@/components/Features';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  return (
    <div className=''>
      <Landing />
      <Features />
      <About />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
