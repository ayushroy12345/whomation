'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0 });

  const colors = [
    '#25D366', '#8B5CF6', '#3B82F6', '#F59E0B', '#EC4899',
    '#25D366', '#8B5CF6', '#10B981'
  ];

  const addParticle = useCallback((x: number, y: number, vx: number, vy: number) => {
    const speed = Math.sqrt(vx * vx + vy * vy);
    const newParticle: Particle = {
      id: Date.now() + Math.random(),
      x,
      y,
      vx: vx * 0.5 + (Math.random() - 0.5) * 2,
      vy: vy * 0.5 + (Math.random() - 0.5) * 2,
      life: 1,
      size: Math.random() * 6 + 4 + (speed * 0.5),
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setParticles(prev => [...prev.slice(-50), newParticle]);
  }, [colors]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const vx = e.clientX - lastPosRef.current.x;
      const vy = e.clientY - lastPosRef.current.y;
      
      velocityRef.current = { x: vx, y: vy };
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      for (let i = 0; i < 2; i++) {
        addParticle(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20,
          vx,
          vy
        );
      }
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
            life: p.life - 0.015,
            size: p.size * 0.98,
          }))
          .filter(p => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        .cursor-dot {
          position: fixed;
          width: 12px;
          height: 12px;
          background: #25D366;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px #25D366, 0 0 40px #25D366;
          transition: width 0.1s, height 0.1s;
        }
        .cursor-ring {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid #8B5CF6;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          opacity: 0.6;
          transition: width 0.15s, height 0.15s, border-color 0.15s;
        }
        .particle {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9997;
        }
      `}</style>
      
      {isVisible && (
        <>
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: particle.x - particle.size / 2,
                top: particle.y - particle.size / 2,
                width: particle.size,
                height: particle.size,
                background: particle.color,
                opacity: particle.life,
                boxShadow: `0 0 ${particle.size}px ${particle.color}`,
              }}
            />
          ))}
          
          <div
            className="cursor-dot"
            style={{
              left: mousePos.x,
              top: mousePos.y,
            }}
          />
          
          <div
            className="cursor-ring"
            style={{
              left: mousePos.x,
              top: mousePos.y,
            }}
          />
        </>
      )}
    </>
  );
}
