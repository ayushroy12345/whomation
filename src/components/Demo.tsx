'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, CheckCircle } from 'lucide-react';

export default function Demo() {
  return (
    <section className="py-24 relative bg-[#12121a]">
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
            <span className="text-sm text-gray-300">Demo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See WHOMATION <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Watch how our AI transforms customer conversations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="phone-mockup">
            <div className="mac-dots absolute top-4 left-4 z-10">
              <div className="mac-dot mac-dot-red" />
              <div className="mac-dot mac-dot-yellow" />
              <div className="mac-dot mac-dot-green" />
            </div>
            <div className="phone-screen p-4 flex flex-col h-[600px]">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-800 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">WHOMATION AI</div>
                  <div className="text-xs text-[#25D366]">typing...</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="chat-bubble chat-bubble-incoming"
                >
                  Hi, I want to know more about your products
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-2 text-gray-500 text-sm"
                >
                  <Sparkles size={14} className="text-[#8B5CF6]" />
                  <span>AI is analyzing...</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="chat-bubble chat-bubble-outgoing"
                >
                  Hi there! Great question. We have a wide range of products
                  tailored to your needs. Could you tell me what you&apos;re
                  looking for specifically?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="chat-bubble chat-bubble-incoming"
                >
                  I&apos;m looking for something to help with my fitness business
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="flex items-center gap-2 text-gray-500 text-sm"
                >
                  <Sparkles size={14} className="text-[#8B5CF6]" />
                  <span>AI detected intent: Lead</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.4 }}
                  className="chat-bubble chat-bubble-outgoing"
                >
                  Perfect! We have specialized tools for fitness businesses.
                  Let me schedule a personalized demo for you. What&apos;s the
                  best time to call?
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8 }}
                  className="mt-auto"
                >
                  <div className="bg-[#1a1a24] rounded-xl p-3 border border-[#25D366]/30 space-y-2">
                    <div className="flex items-center gap-2 text-[#25D366] text-sm">
                      <CheckCircle size={16} />
                      <span>Lead qualified: High intent</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#25D366] text-sm">
                      <CheckCircle size={16} />
                      <span>Meeting requested</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#8B5CF6] text-sm">
                      <CheckCircle size={16} />
                      <span>Added to CRM</span>
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
