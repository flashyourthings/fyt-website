'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './SectionHeading';

export default function Platforms() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const operatingSystems = [
    {
      name: 'balenaOS',
      logo: `${basePath}/images/balena-logo.png`,
      description: 'Container-based OS designed for IoT devices'
    },
    {
      name: 'Ubuntu Core',
      logo: `${basePath}/images/ubuntu-logo.svg`,
      description: 'Secure and minimal OS for IoT devices'
    },
    {
      name: 'Raspberry Pi OS',
      logo: `${basePath}/images/raspberry-pi-logo.svg`,
      description: 'Optimized OS for Raspberry Pi hardware'
    },
    {
      name: 'Yocto Project',
      logo: `${basePath}/images/yocto-logo.png`,
      // The default logo is black text, so swap to the white version in dark mode
      darkLogo: `${basePath}/images/yocto-logo-dark.svg`,
      description: 'Open source Linux distribution for embedded devices'
    }
  ];

  return (
    <section id="platforms" className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platforms"
          title="Supported Platforms"
          description="We work with all major IoT operating systems"
        />

        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {operatingSystems.map((os, index) => (
            <motion.li
              key={os.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <div className="relative mx-auto h-16 w-32">
                <Image
                  src={os.logo}
                  alt={`${os.name} logo`}
                  fill
                  className={`object-contain ${os.darkLogo ? 'dark:hidden' : ''}`}
                />
                {os.darkLogo && (
                  <Image
                    src={os.darkLogo}
                    alt={`${os.name} logo`}
                    fill
                    className="hidden object-contain dark:block"
                  />
                )}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {os.name}
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {os.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
