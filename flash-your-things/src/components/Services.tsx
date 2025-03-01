'use client';
import { motion } from 'framer-motion';
import { 
  WrenchIcon, 
  CommandLineIcon, 
  Cog6ToothIcon, 
  TruckIcon 
} from '@heroicons/react/24/outline';

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
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Complete IoT device handling solutions from assembly to delivery
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-24"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500">
                    <service.icon className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {service.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
} 