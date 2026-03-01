'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a24] rounded-full px-4 py-2 mb-4">
            <Sparkles size={16} className="text-[#8B5CF6]" />
            <span className="text-sm text-gray-300">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Customized <span className="text-gradient">Pricing</span> for Your Business
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every business is unique. Our pricing is tailored to your specific needs and requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="card p-8 relative text-center">
            <div className="mac-dots absolute top-4 left-4">
              <div className="mac-dot mac-dot-red" />
              <div className="mac-dot mac-dot-yellow" />
              <div className="mac-dot mac-dot-green" />
            </div>

            <div className="mt-8">
              <div className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles size={16} />
                4-Day Free Trial
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Start Free Trial</h3>
              
              <p className="text-gray-400 mb-8">
                Try WHOMATION risk-free for 4 days. No credit card required.
                Experience all features and see the results yourself.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-[#25D366]" />
                  <span>Full access to all features</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-[#25D366]" />
                  <span>AI-powered responses</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-[#25D366]" />
                  <span>Lead generation tools</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-[#25D366]" />
                  <span>24/7 automation</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Check size={20} className="text-[#25D366]" />
                  <span>Dedicated support</span>
                </div>
              </div>

              <a
                href="https://forms.gle/kWDj2oySdjssKPXX9"
                target="_blank"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg w-full"
              >
                Start Your Free Trial
              </a>

              <p className="text-gray-500 text-sm mt-6">
                After trial, pricing starts and Custom plans available for larger businesses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
