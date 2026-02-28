'use client';

import { motion } from 'framer-motion';
import { Link2, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Link2,
    title: 'Connect',
    description: 'Link your WhatsApp Business account in just a few clicks. No technical setup required.',
    number: '01',
  },
  {
    icon: Settings,
    title: 'Customize',
    description: 'Set your brand voice, create response templates, and configure automation rules.',
    number: '02',
  },
  {
    icon: Rocket,
    title: 'Automate',
    description: 'Let AI handle conversations 24/7. Sit back and watch your leads grow.',
    number: '03',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a24] rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-gray-300">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get Started in <span className="text-gradient">3 Steps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From setup to automation in minutes, not days
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#25D366] via-[#8B5CF6] to-[#3B82F6] opacity-30 -translate-y-1/2 pulse-glow" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="card p-8 text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="mac-dots absolute top-4 left-4">
                    <div className="mac-dot mac-dot-red" />
                    <div className="mac-dot mac-dot-yellow" />
                    <div className="mac-dot mac-dot-green" />
                  </div>
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#25D366] to-[#8B5CF6] flex items-center justify-center mt-4">
                    <step.icon size={36} className="text-white" />
                  </div>
                </div>
                <div className="text-6xl font-bold text-gradient mb-2 opacity-30">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
