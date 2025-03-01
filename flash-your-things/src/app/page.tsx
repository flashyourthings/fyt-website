import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import OSCarousel from '@/components/OSCarousel';
import Process from '@/components/Process';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navigation />
      <Hero />
      <Services />
      <OSCarousel />
      <Process />
      <WhyChooseUs />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
