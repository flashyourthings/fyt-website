'use client';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  GlobeAltIcon,
  GlobeEuropeAfricaIcon,
  UserGroupIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';

const facts = [
  {
    stat: '20+',
    label: 'Years Experience',
    description: 'Engineering, Logistics and Operational IoT expertise',
    icon: ClockIcon,
  },
  {
    stat: '25+',
    label: 'Device Types',
    description: 'Supporting a wide range of devices',
    icon: CpuChipIcon,
  },
  {
    stat: '24 / 7',
    label: 'Support Coverage',
    description: 'Round-the-clock support, able to respond to issues at any time',
    icon: GlobeAltIcon,
  },
  {
    stat: '100%',
    label: 'Client Satisfaction',
    description: 'Excellence in every project',
    icon: UserGroupIcon,
  },
  {
    stat: 'UK & EU',
    label: 'VAT Registered',
    description: 'We are based in the UK and EU, able to comply with local regulations',
    icon: GlobeEuropeAfricaIcon,
  },
];

const pillars = [
  {
    name: 'Engineering Excellence',
    description:
      'Our engineering team has architected and implemented IoT solutions across diverse industries, from small-scale prototypes to large enterprise deployments.',
  },
  {
    name: 'Operational Mastery',
    description:
      'We understand the complexities of fleet management, having overseen the deployment and maintenance of thousands of devices across global networks.',
  },
  {
    name: 'End-to-End Solutions',
    description:
      'From initial concept to ongoing support, we provide comprehensive solutions that ensure your IoT deployment succeeds at every stage.',
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-16 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title="Decades of IoT Excellence"
            description="With over 20 years of experience in IoT and fleet deployment, we bring unparalleled expertise to every project."
          />
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 max-w-xl space-y-8 border-l-2 border-orange-500/30 pl-6 text-base leading-7"
          >
            {pillars.map((pillar) => (
              <div key={pillar.name}>
                <dt className="font-semibold text-gray-900 dark:text-white">{pillar.name}</dt>
                <dd className="mt-1 text-gray-600 dark:text-gray-300">{pillar.description}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`card relative flex flex-col bg-gray-50 dark:bg-white/5 ${
                index === facts.length - 1 ? 'sm:col-span-2' : ''
              }`}
            >
              <fact.icon className="absolute top-6 right-6 h-8 w-8 text-orange-500/70" aria-hidden="true" />
              {/* Label comes first for screen readers; the stat is shown first visually */}
              <dt className="order-2 mt-2 text-base font-semibold text-gray-900 dark:text-white">
                {fact.label}
              </dt>
              <dd className="order-1 pr-12 text-3xl font-bold tracking-tight text-orange-600 dark:text-orange-400">
                {fact.stat}
              </dd>
              <dd className="order-3 mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {fact.description}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
