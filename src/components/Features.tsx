'use client';

import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  Clock, 
  BarChart3, 
  Palette, 
  Zap,
  Bot,
  Headphones
} from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Replies',
    description: 'Smart responses that sound human. Our AI understands context and nuance.',
    gradient: 'from-[#25D366] to-[#128C7E]',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Automatically qualify and capture leads while you sleep.',
    gradient: 'from-[#8B5CF6] to-[#6366F1]',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a customer again. Your AI agent works round the clock.',
    gradient: 'from-[#3B82F6] to-[#2563EB]',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track conversations, leads, and performance with detailed insights.',
    gradient: 'from-[#F59E0B] to-[#D97706]',
  },
  {
    icon: Palette,
    title: 'Fully Customizable',
    description: 'Match your brand voice and customize responses to fit your business.',
    gradient: 'from-[#EC4899] to-[#DB2777]',
  },
  {
    icon: Zap,
    title: 'Easy Setup',
    description: 'Connect in minutes, no coding needed. Just link your WhatsApp Business.',
    gradient: 'from-[#10B981] to-[#059669]',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#1a1a24] rounded-full px-4 py-2 mb-4">
            <MessageSquare size={16} className="text-[#25D366]" />
            <span className="text-sm text-gray-300">Features</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What WHOMATION <span className="text-gradient">Can Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to automate your WhatsApp business communications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <div className="mac-dots">
                  <div className="mac-dot mac-dot-red" />
                  <div className="mac-dot mac-dot-yellow" />
                  <div className="mac-dot mac-dot-green" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
