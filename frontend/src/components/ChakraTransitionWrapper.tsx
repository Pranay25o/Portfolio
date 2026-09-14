import React, { useState, useEffect } from 'react';
/*
 * PERFORMANCE FIX: Removed ALL Framer Motion from this file.
 *
 * Before: AnimatePresence + motion.div + motion.div for SageIntro — Framer Motion
 *         needed to be loaded before the intro could render/animate, delaying FCP.
 *
 * After: The SageIntro uses native CSS animations (sage-intro / sage-intro-text
 *        classes defined in index.css). These run immediately — even before any
 *        JS parses. The component uses a simple CSS animation-end callback via
 *        onAnimationEnd to unmount after the animation completes.
 *
 * ChakraTransitionWrapper itself never needed Framer Motion — it just uses
 * conditional rendering with a simple class, which is unchanged.
 */

interface ChakraTransitionWrapperProps {
  children: React.ReactNode;
  activeSectionKey: string;
  triggerChakra?: number;
}

export const ChakraTransitionWrapper: React.FC<ChakraTransitionWrapperProps> = ({
  children,
  triggerChakra = 0,
}) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (triggerChakra > 0) {
      setIsPulsing(true);
      const timer = setTimeout(() => {
        setIsPulsing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [triggerChakra]);

  return (
    <div className="relative w-full">
      {/* Kurama Sage Orange Chakra Warp Wave on explicit click trigger */}
      {isPulsing && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div className="absolute top-[18%] left-0 right-0 h-1 bg-orange-500/80 shadow-[0_0_15px_#f97316]" />
          <div className="absolute top-[52%] left-0 right-0 h-1.5 bg-amber-400/80 shadow-[0_0_20px_#facc15]" />
          <div className="absolute top-[80%] left-0 right-0 h-1 bg-orange-600/80 shadow-[0_0_12px_#ea580c]" />
        </div>
      )}

      {/* Stably mounted content with zero scroll interruptions */}
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

// Initial Load Awakening Intro (Pure CSS — no Framer Motion, no JS blocking)
export const SageIntro: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  const handleAnimationEnd = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  if (!visible) return null;

  return (
    /*
     * CSS animation: sage-intro class applies `animation: sage-intro-fade 0.45s ease-out forwards`
     * sage-intro-text applies `animation: sage-text-scale 0.4s ease-out forwards`
     * Both defined in index.css. Runs immediately without waiting for JS bundle.
     */
    <div
      className="sage-intro fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-gradient-to-b from-[#7c2d12] via-[#431407] to-[#060403]"
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="sage-intro-text text-center font-display text-2xl md:text-4xl font-bold tracking-widest text-amber-100 drop-shadow-[0_0_25px_#f97316]">
        六道仙人 // UZUMAKI SAGE
      </div>
    </div>
  );
};
