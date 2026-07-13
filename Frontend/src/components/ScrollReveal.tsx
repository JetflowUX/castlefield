import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'reveal-text' | 'scale-up';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  animateOnMount?: boolean;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true,
  animateOnMount = false
}: ScrollRevealProps) {
  const variants = {
    'fade-up': {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-down': {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 }
    },
    'fade-left': {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    },
    'fade-right': {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    'scale-up': {
      hidden: { opacity: 0, scale: 0.92 },
      visible: { opacity: 1, scale: 1 }
    },
    'reveal-text': {
      hidden: { y: '105%' },
      visible: { y: 0 }
    }
  };

  // Robustly convert children to text contents to prevent react array node mask failures
  const textContent = typeof children === 'string'
    ? children
    : Array.isArray(children)
      ? children.join('')
      : typeof children === 'number'
        ? children.toString()
        : '';

  if (variant === 'reveal-text' && textContent.trim()) {
    const words = textContent.split(' ');
    return (
      <div className={`overflow-hidden flex flex-wrap gap-x-2 gap-y-0.5 ${className}`}>
        {words.map((word, i) => (
          <div key={i} className="overflow-hidden inline-block py-1">
            <motion.span
              className="inline-block origin-bottom"
              initial="hidden"
              animate={animateOnMount ? "visible" : undefined}
              whileInView={!animateOnMount ? "visible" : undefined}
              viewport={!animateOnMount ? { once, amount: threshold } : undefined}
              transition={{
                duration: duration * 1.2,
                delay: delay + i * 0.04,
                ease: [0.16, 1, 0.3, 1] // easeOutExpo
              }}
              variants={variants['reveal-text']}
            >
              {word}
            </motion.span>
          </div>
        ))}
      </div>
    );
  }

  // Fallback container uses fade-up instead of layout-breaking y translation
  return (
    <motion.div
      initial="hidden"
      animate={animateOnMount ? "visible" : undefined}
      whileInView={!animateOnMount ? "visible" : undefined}
      viewport={!animateOnMount ? { once, amount: threshold } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      variants={variant === 'reveal-text' ? variants['fade-up'] : variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  );
}
