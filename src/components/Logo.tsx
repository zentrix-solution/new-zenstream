import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animated?: boolean;
}

export function Logo({ className = "w-10 h-10", animated = true }: LogoProps) {
  return (
    <motion.div 
      whileHover={animated ? { scale: 1.05 } : {}}
      className={`relative ${className}`}
    >
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background Circle with Gradient */}
        <motion.circle 
          cx="24" 
          cy="24" 
          r="22" 
          fill="url(#logoGradient1)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Letter Z - Modern Angular Design */}
        <motion.path
          d="M14 16 L30 16 L14 30 L30 30"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        {/* Signal Wave Lines */}
        <motion.g opacity="0.8">
          <motion.path
            d="M32 18 Q 34 22, 32 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: [0.4, 1, 0.4], x: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M35 16 Q 38 22, 35 28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: [0.3, 0.8, 0.3], x: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.g>

        {/* Pulse Circle */}
        {animated && (
          <motion.circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#logoGradient2)"
            strokeWidth="1"
            fill="none"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </svg>
    </motion.div>
  );
}
