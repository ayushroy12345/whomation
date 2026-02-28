'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden grid-bg">
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      <div className="gradient-orb gradient-orb-3" />

      <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#1a1a24] rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Now with GPT-4 integration</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Your AI WhatsApp Agent{' '}
            <span className="text-gradient">That Never Sleeps</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-xl">
            Automate replies, generate leads, and never miss a client. Set it up in
            minutes, let it work 24x7 on the cloud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg inline-flex items-center justify-center gap-2"
            >
              <Zap size={20} />
              Start Free Trial
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold hover:border-gray-500 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              See Demo
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 mt-10"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map(i => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-[#25D366] to-[#8B5CF6] flex items-center justify-center text-xs font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="text-white font-semibold">10,000+ Businesses</div>
              <div className="text-gray-400 text-sm">Trust WHOMATION</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="phone-mockup">
            <div className="phone-screen p-4 flex flex-col">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">WHOMATION AI</div>
                  <div className="text-xs text-[#25D366]">Online</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="chat-bubble chat-bubble-incoming"
                >
                  Hi! I&apos;m interested in your services. What do you offer?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="chat-bubble chat-bubble-outgoing"
                >
                  Hello! Great to hear from you. We offer AI-powered customer
                  support and lead generation. Let me ask - what type of business
                  are you in?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="chat-bubble chat-bubble-incoming"
                >
                  I run an e-commerce store selling handmade jewelry.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="chat-bubble chat-bubble-outgoing"
                >
                  Perfect! Our AI can help you with order tracking, product
                  recommendations, and converting visitors to buyers. Want to
                  schedule a free demo?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 }}
                  className="chat-bubble chat-bubble-incoming"
                >
                  Yes, that sounds great!
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="mt-auto pt-3"
                >
                  <div className="bg-[#1a1a24] rounded-2xl p-3 border border-[#25D366]/30">
                    <div className="flex items-center gap-2 text-[#25D366] text-sm">
                      <Shield size={16} />
                      <span>Lead captured &rarr; Added to CRM</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
