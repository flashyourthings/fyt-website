'use client';
import { motion } from 'framer-motion';
import {
  WrenchIcon,
  CommandLineIcon,
  Cog6ToothIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';

const services = [
  {
    name: 'Assembly',
    description: 'Professional assembly of IoT devices and components with attention to detail and quality control.',
    icon: WrenchIcon,
  },
  {
    name: 'Hardware Flashing',
    description: 'Efficient and reliable firmware flashing for various IoT devices and microcontrollers.',
    icon: CommandLineIcon,
  },
  {
    name: 'Provisioning',
    description: 'Secure device provisioning and configuration for immediate deployment readiness.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Logistics',
    description: 'End-to-end logistics handling including storage, packaging, and distribution to your customers.',
    icon: TruckIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Our Services"
          description="Complete IoT device handling solutions from assembly to delivery"
        />
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.li
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card bg-gray-50 transition-shadow hover:shadow-md dark:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {service.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
