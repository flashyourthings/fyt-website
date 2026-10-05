'use client';
import { motion } from 'framer-motion';
import { 
  ClockIcon,
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  UserGroupIcon,
  BanknotesIcon,
  CircleStackIcon,
} from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';

const benefits = [
  {
    name: 'Save Time & Resources',
    description: 'Focus on your core business while we handle the complex logistics of device deployment. No need to train staff or set up flashing infrastructure.',
    icon: ClockIcon,
  },
  {
    name: 'Reduce Risk',
    description: 'Benefit from our proven processes and quality control measures. Avoid costly mistakes and ensure consistent, reliable device provisioning.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Scalable Solutions',
    description: 'Our infrastructure is built to handle projects of any size. Scale up or down without investing in equipment or hiring additional staff.',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: 'Expert Support',
    description: "Access our team of IoT specialists for technical guidance and troubleshooting. We're here to ensure your project's success.",
    icon: UserGroupIcon,
  },
  {
    name: 'Cost Effective',
    description: 'Eliminate capital expenses for equipment and reduce operational costs. Pay only for the devices you need provisioned.',
    icon: BanknotesIcon,
  },
  {
    name: 'End-to-End Service',
    description: 'From initial configuration to final deployment, we handle everything. One partner for your entire IoT deployment pipeline.',
    icon: CircleStackIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="Why Choose Us"
          description="Expert IoT device provisioning with a focus on quality, speed, and reliability"
        />

        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-orange-500/10 dark:bg-orange-500/15">
                  <benefit.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {benefit.name}
                </h3>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
