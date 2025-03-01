'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const operatingSystems = [
  {
    name: 'balenaOS',
    logo: '/images/balena-logo.png',
    description: 'Container-based OS designed for IoT devices'
  },
  {
    name: 'Ubuntu Core',
    logo: '/images/ubuntu-logo.svg',
    description: 'Secure and minimal OS for IoT devices'
  },
  {
    name: 'Raspberry Pi OS',
    logo: '/images/raspberry-pi-logo.svg',
    description: 'Optimized OS for Raspberry Pi hardware'
  },
  {
    name: 'Yocto Project',
    logo: '/images/yocto-logo.svg',
    description: 'Open source Linux distribution for embedded devices'
  }
];

export default function OSCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Adjust this value to control scroll distance
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Supported Platforms
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We work with all major IoT operating systems
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Left scroll button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors"
          >
            <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {operatingSystems.map((os, index) => (
              <motion.div
                key={`${os.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-none w-72 snap-center"
              >
                <div className="rounded-xl bg-white dark:bg-gray-900 p-8 shadow-sm ring-1 ring-gray-200/10 dark:ring-white/10">
                  <div className="flex h-32 items-center justify-center">
                    <div className="relative h-16 w-32">
                      <Image
                        src={os.logo}
                        alt={`${os.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="mt-6 text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {os.name}
                  </h3>
                  <p className="text-center text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {os.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors"
          >
            <svg className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 