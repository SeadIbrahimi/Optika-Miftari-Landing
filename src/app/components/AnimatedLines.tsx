import { motion } from 'motion/react';

export function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Horizontal moving lines */}
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"
        style={{ width: '100%', top: '20%' }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        style={{ width: '100%', top: '40%' }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
        style={{ width: '100%', top: '60%' }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        style={{ width: '100%', top: '80%' }}
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Vertical moving lines */}
      <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-teal-500 to-transparent"
        style={{ height: '100%', left: '25%' }}
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
        style={{ height: '100%', left: '50%' }}
        animate={{
          y: ['100%', '-100%'],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-teal-400 to-transparent"
        style={{ height: '100%', left: '75%' }}
        animate={{
          y: ['-100%', '100%'],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
