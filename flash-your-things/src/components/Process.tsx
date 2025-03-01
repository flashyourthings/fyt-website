'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

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
    <section id="process" className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The Process
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            From concept to delivery, here&apos;s how we bring your IoT project to life
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="relative">
            {/* Vertical line for mobile */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200 dark:bg-orange-900 lg:hidden" />
            
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-orange-500/30 dark:bg-orange-500/20" style={{ top: '2.5rem' }} />

            <div className="lg:grid lg:grid-cols-4 lg:gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative mb-12 pl-12 lg:pl-0 lg:mb-0"
                >
                  {/* Timeline dot - Positioned differently for mobile vs desktop */}
                  <div className="absolute left-0 lg:relative lg:left-1/2 lg:-translate-x-1/2 lg:mb-4 flex items-center justify-center w-9 h-9 lg:w-16 lg:h-16 rounded-full bg-orange-500 dark:bg-orange-600 shadow-md z-10">
                    <step.icon className="h-5 w-5 lg:h-8 lg:w-8 text-white" aria-hidden="true" />
                  </div>

                  {/* Content card with reduced padding */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg px-3 pt-3 pb-2 shadow-sm ring-1 ring-gray-900/5 dark:ring-white/5 lg:mt-4">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {step.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-2">
                      <span className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/50 px-3 py-1 text-sm text-orange-600 dark:text-orange-200 mt-2">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full px-8 py-3 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors"
          >
            Start Your Journey
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 