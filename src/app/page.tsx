import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Platforms from '@/components/Platforms';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Platforms />
        <Process />
        <WhyChooseUs />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
