'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background image with blur */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={`${basePath}/images/robot-hero.webp`}
          alt=""
          fill
          className="object-cover"
          quality={100}
          priority
          style={{ filter: 'blur(8px) brightness(0.4)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center pt-12 sm:pt-16"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            IoT Device Provisioning Made Simple
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We handle the complexities of flashing and configuring your IoT devices at scale, 
            so you can focus on your core business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#contact"
              className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/#services"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
