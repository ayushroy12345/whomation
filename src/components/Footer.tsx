'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Twitter, Linkedin, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="py-16 relative bg-[#12121a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="mac-dots">
                <div className="mac-dot mac-dot-red" />
                <div className="mac-dot mac-dot-yellow" />
                <div className="mac-dot mac-dot-green" />
              </div>
              <Logo />
            </div>
            <p className="text-gray-400 max-w-md mb-6">
              Your AI WhatsApp agent that works 24/7. Automate replies, generate
              leads, and never miss a client again.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#1a1a24] flex items-center justify-center text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#1a1a24] flex items-center justify-center text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg bg-[#1a1a24] flex items-center justify-center text-gray-400 hover:text-[#25D366] transition-colors"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#25D366] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 WHOMATION. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MessageCircle size={16} className="text-[#25D366]" />
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
