import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = [
    { size: 60, top: '10%', left: '10%', delay: 0, duration: 6 },
    { size: 80, top: '70%', left: '15%', delay: 1, duration: 7 },
    { size: 40, top: '20%', right: '15%', delay: 0.5, duration: 5 },
    { size: 70, top: '60%', right: '10%', delay: 1.5, duration: 8 },
    { size: 50, top: '40%', left: '8%', delay: 2, duration: 6 },
    { size: 55, top: '80%', right: '20%', delay: 0.8, duration: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-teal-400/10 to-cyan-400/10 backdrop-blur-sm border border-teal-200/20"
          style={{
            width: el.size,
            height: el.size,
            top: el.top,
            left: el.left,
            right: el.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: el.delay,
          }}
        />
      ))}
      
      {/* Sparkle particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-teal-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
