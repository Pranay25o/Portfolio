import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from '../lib/sound';

interface ChakraTransitionWrapperProps {
  children: React.ReactNode;
  activeSectionKey: string;
  triggerChakra?: number;
}

export const ChakraTransitionWrapper: React.FC<ChakraTransitionWrapperProps> = ({
  children,
  activeSectionKey,
  triggerChakra = 0,
}) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsPulsing(true);
    soundManager.playGlitch();
    const timer = setTimeout(() => {
      setIsPulsing(false);
    }, 160);

    return () => clearTimeout(timer);
  }, [activeSectionKey, triggerChakra]);

  return (
    <div className="relative w-full">
      {/* Kurama Sage Orange Chakra Warp Wave (No Blinding White Flash) */}
      {isPulsing && (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="absolute top-[18%] left-0 right-0 h-1 bg-orange-500/80 shadow-[0_0_15px_#f97316] translate-x-1" />
          <div className="absolute top-[52%] left-0 right-0 h-1.5 bg-amber-400/80 shadow-[0_0_20px_#facc15] -translate-x-1" />
          <div className="absolute top-[80%] left-0 right-0 h-1 bg-orange-600/80 shadow-[0_0_12px_#ea580c] translate-x-2" />
          <div className="absolute inset-0 border-2 border-orange-500/50 rounded-3xl shadow-[inset_0_0_40px_rgba(249,115,22,0.3)] animate-pulse" />
        </div>
      )}

      {/* Smooth Cinematic Content Cross-Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSectionKey}
          initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(3px)' }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Initial Load Awakening Intro (Pure Naruto Uzumaki Sage Mode)
export const SageIntro: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1, scale: 1.05 }}
          animate={{ opacity: 0, scale: 1 }}
          exit={{ opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 1.1, ease: 'circOut' }}
          className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-gradient-to-b from-[#7c2d12] via-[#431407] to-[#060403]"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0.95 }}
            animate={{ scale: 1.25, opacity: 0 }}
            transition={{ duration: 0.95, ease: 'easeOut' }}
            className="text-center font-display text-3xl md:text-5xl font-bold tracking-widest text-amber-100 drop-shadow-[0_0_30px_#f97316]"
          >
            六道仙人 // UZUMAKI SAGE AWAKENING
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
