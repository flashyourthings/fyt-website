'use client';
import { motion } from 'framer-motion';
import { 
  ClockIcon,
  GlobeAltIcon,
  GlobeEuropeAfricaIcon,
  UserGroupIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const facts = [
  {
    stat: '20+',
    label: 'Years Experience',
    description: 'Engineering, Logistics and Operational IoT expertise',
    icon: ClockIcon,
  },
  {
    stat: '25+',
    label: 'Devices Types',
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
    icon:   UserGroupIcon,
  },
  {
    stat: 'UK & EU',
    label: 'VAT Registered',
    description: 'We are based in the UK and EU, able to comply with local regulations',
    icon: GlobeEuropeAfricaIcon,
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Decades of IoT Excellence
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  With over 20 years of experience in IoT and fleet deployment, we bring unparalleled expertise to every project.
                </p>
                <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300">
                  <div>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      Engineering Excellence
                    </strong>
                    <p className="mt-1">
                      Our engineering team has architected and implemented IoT solutions across diverse industries, 
                      from small-scale prototypes to large enterprise deployments.
                    </p>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      Operational Mastery
                    </strong>
                    <p className="mt-1">
                      We understand the complexities of fleet management, having overseen the deployment and 
                      maintenance of thousands of devices across global networks.
                    </p>
                  </div>
                  <div>
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      End-to-End Solutions
                    </strong>
                    <p className="mt-1">
                      From initial concept to ongoing support, we provide comprehensive solutions that ensure 
                      your IoT deployment succeeds at every stage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:pl-8 lg:pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {facts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl shadow-sm ring-1 ring-gray-900/5 dark:ring-white/5"
                >
                  <div className="absolute top-4 right-4">
                    <fact.icon className="h-16 w-16 text-orange-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-orange-500">
                      {fact.stat}
                    </h3>
                    <p className="mt-1 text-base font-semibold text-gray-900 dark:text-white">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      {fact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 