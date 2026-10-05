'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import SectionHeading from './SectionHeading';

const email = 'contact@flashyourthings.com';

const inputClass =
  'block w-full rounded-lg border-0 bg-white px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 dark:bg-white/5 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-500 dark:focus:ring-orange-500';

export default function Contact() {
  const [formData, setFormData] = useState({
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `FYT Project Inquiry from ${formData.company}`;
    const body = formData.message;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="bg-gray-50 py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact"
            title="Get in Touch"
            description="Ready to deploy your product? Let's discuss your project requirements."
          />
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300"
          >
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon className="h-7 w-6 text-orange-500" aria-hidden="true" />
              </dt>
              <dd>
                <a
                  href={`mailto:${email}`}
                  className="font-medium text-gray-900 underline decoration-orange-500/40 underline-offset-4 hover:decoration-orange-500 dark:text-white"
                >
                  {email}
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Location</span>
                <MapPinIcon className="h-7 w-6 text-orange-500" aria-hidden="true" />
              </dt>
              <dd>Based in the UK &amp; EU</dd>
            </div>
          </motion.dl>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="card space-y-6 p-6 sm:p-8"
        >
          <div>
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="organization"
              placeholder="Acme Devices Ltd"
              required
              value={formData.company}
              onChange={handleChange}
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Project Details
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Device type, quantity, timeline..."
              required
              value={formData.message}
              onChange={handleChange}
              className={`mt-2 ${inputClass}`}
            />
          </div>
          <div>
            <button type="submit" className="btn-primary w-full py-3">
              Send Message
            </button>
            <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
              Opens your email app with your message ready to send.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
