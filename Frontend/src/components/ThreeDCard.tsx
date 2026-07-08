import React, { useRef, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
}

export function ThreeDCard({ children, className = '' }: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring configurations for smooth physics-based movement
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 200 });
  
  // Shiny glare coordinates
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { damping: 25, stiffness: 200 });
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { damping: 25, stiffness: 200 });
  const glareOpacity = useSpring(0, { damping: 20, stiffness: 150 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates: -0.5 is left/top, 0.5 is right/bottom
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
    glareOpacity.set(0.12); // Show subtle white glare
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareOpacity.set(0); // Hide glare
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`perspective-1000 relative transition-shadow duration-300 ${className}`}
    >
      {/* Glare effect overlay */}
      <motion.div
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%)`
          ),
          opacity: glareOpacity,
          pointerEvents: 'none',
        }}
        className="absolute inset-0 z-30 rounded-xl"
      />
      
      {/* Children content wrapper with translation for 3D layered depth */}
      <div style={{ transform: 'translateZ(10px)' }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
