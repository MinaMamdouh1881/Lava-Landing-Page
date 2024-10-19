import Image from 'next/image';
import Landing from '@/app/components/Landing';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials/Testimonials';
export default function Home() {
  return (
    <div className=''>
      <Landing />
      <Features />
      <About />
      <Testimonials />
    </div>
  );
}
