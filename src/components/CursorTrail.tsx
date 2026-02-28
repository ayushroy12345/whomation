'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const colors = ['#25D366', '#8B5CF6', '#3B82F6', '#25D366', '#8B5CF6'];

  const addParticle = useCallback((x: number, y: number) => {
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setParticles(prev => [...prev.slice(-30), newParticle]);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      addParticle(e.clientX, e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [addParticle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.02,
          }))
          .filter(p => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              initial={{ opacity: particle.life, scale: 1 }}
              animate={{
                opacity: 0,
                scale: 0,
                x: particle.x,
                y: particle.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: particle.color,
                pointerEvents: 'none',
                zIndex: 9999,
                boxShadow: `0 0 10px ${particle.color}`,
              }}
            />
          ))}
          <motion.div
            animate={{
              x: mousePos.x - 4,
              y: mousePos.y - 4,
            }}
            style={{
              position: 'fixed',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#25D366',
              pointerEvents: 'none',
              zIndex: 9999,
              boxShadow: '0 0 15px #25D366',
            }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
