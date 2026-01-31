import { motion } from 'motion/react';

export function AnimatedGeometricPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* Animated connecting lines */}
      <motion.path
        d="M100,100 L200,150 L300,100 L400,200 L500,150 L600,200 L700,100"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.path
        d="M150,400 L250,350 L350,400 L450,300 L550,350 L650,300"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />

      {/* Animated dots */}
      {[
        { x: 100, y: 100, delay: 0 },
        { x: 200, y: 150, delay: 0.2 },
        { x: 300, y: 100, delay: 0.4 },
        { x: 400, y: 200, delay: 0.6 },
        { x: 500, y: 150, delay: 0.8 },
        { x: 600, y: 200, delay: 1 },
        { x: 700, y: 100, delay: 1.2 },
        { x: 150, y: 400, delay: 0.3 },
        { x: 250, y: 350, delay: 0.5 },
        { x: 350, y: 400, delay: 0.7 },
        { x: 450, y: 300, delay: 0.9 },
        { x: 550, y: 350, delay: 1.1 },
        { x: 650, y: 300, delay: 1.3 },
      ].map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r="3"
          fill="#14b8a6"
          opacity="0.3"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0.3] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      <motion.polygon
        points="50,250 80,280 50,310 20,280"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="1"
        opacity="0.2"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.circle
        cx="720"
        cy="500"
        r="30"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="1"
        opacity="0.15"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </svg>
  );
}