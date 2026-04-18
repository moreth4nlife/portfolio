'use client';

import { useRef, ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';

interface CellProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  cellType?: string;
}

export default function Cell({
  children,
  className = '',
  tilt = true,
  cellType = '',
}: CellProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate glow position as percentage
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    if (glowRef.current) {
      glowRef.current.style.setProperty('--mx', `${px}%`);
      glowRef.current.style.setProperty('--my', `${py}%`);
    }

    // Calculate tilt
    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      ref.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = '';
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`cell ${tilt ? 'tilt' : ''} ${cellType} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div ref={glowRef} className="cursor-glow" />
      {children}
    </motion.div>
  );
}
