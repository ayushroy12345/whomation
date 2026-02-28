'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: '10,000+', label: 'Businesses Served' },
  { value: '50M+', label: 'Messages Automated' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.,]/g, '');

  useEffect(() => {
    if (!isInView || isNaN(numValue)) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, numValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}


export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/10 via-[#8B5CF6]/10 to-[#3B82F6]/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
