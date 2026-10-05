'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';

const steps = [
  {
    name: 'Initial Consultation',
    description: 'We discuss your project needs, including device specifications, quantity requirements, and timeline expectations.',
    icon: ChatBubbleLeftRightIcon,
    duration: '1-2 days',
  },
  {
    name: 'Planning & Setup',
    description: "We develop a comprehensive plan for assembly, firmware configuration, and testing protocols, with detailed timeline and costs.",
    icon: ClipboardDocumentCheckIcon,
    duration: '3-5 days',
  },
  {
    name: 'Production & Testing',
    description: 'Each device is assembled, flashed with firmware, and thoroughly tested. Regular progress updates provided throughout.',
    icon: CogIcon,
    duration: '1-3 weeks',
  },
  {
    name: 'Delivery & Support',
    description: 'Devices are securely packaged and shipped to your locations. We can distribute them to your end customers or deliver them directly to you.',
    icon: TruckIcon,
    duration: '2-5 days',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="The Process"
          description="From concept to delivery, here's how we bring your IoT project to life"
        />

        <ol className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-x-8">
          {steps.map((step, index) => (
            <motion.li
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-16 lg:pl-0"
            >
              {/* Connector to the next step: vertical on mobile, horizontal on desktop */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute top-14 -bottom-8 left-6 w-px bg-orange-200 lg:top-6 lg:-right-4 lg:bottom-auto lg:left-16 lg:h-px lg:w-auto dark:bg-orange-500/30"
                />
              )}
              <div className="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 shadow-md lg:static">
                <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="lg:mt-6">
                <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  Step {index + 1}
                  <span className="mx-2 text-gray-300 dark:text-gray-600" aria-hidden="true">·</span>
                  <span className="font-medium text-gray-500 dark:text-gray-400">{step.duration}</span>
                </p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/#contact" className="btn-primary px-6 py-3 text-base">
            Start Your Journey
            <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
