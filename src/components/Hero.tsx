'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const highlights = ['20+ years in IoT', '25+ device types', 'UK & EU based'];

export default function Hero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <section className="relative isolate overflow-hidden bg-gray-950">
      {/* Blurred background image, scaled up so the blur has no soft edge */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={`${basePath}/images/robot-hero.webp`}
          alt=""
          fill
          className="scale-110 object-cover"
          priority
          style={{ filter: 'blur(8px) brightness(0.4)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-transparent to-gray-950/60" />
      </div>

      <div className="mx-auto flex min-h-[85svh] max-w-7xl items-center px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm text-orange-300 ring-1 ring-white/15 backdrop-blur">
            Assembly · Flashing · Provisioning · Logistics
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white text-balance sm:text-6xl">
            IoT Device Provisioning Made Simple
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 text-pretty">
            We handle the complexities of flashing and configuring your IoT devices at scale,
            so you can focus on your core business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Link href="/#contact" className="btn-primary px-6 py-3 text-base">
              Get Started
            </Link>
            <Link
              href="/#services"
              className="rounded-full px-4 py-2 text-base font-semibold text-white transition-colors hover:text-orange-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
