import React, { useEffect, useState, useMemo } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useThemeStore } from '../store/useThemeStore';

// Naruto Uzumaki Spiral & 4-Blade Rasenshuriken SVG
export const UzumakiRasenshurikenSVG: React.FC<{
  className?: string;
  size?: number;
  glow?: boolean;
}> = ({ className = '', size = 520, glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? 'naruto-glow' : ''}`}
    >
      <defs>
        <radialGradient id="narutoBgCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#facc15" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#c2410c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#431407" stopOpacity="0" />
        </radialGradient>

        <filter id="chakraBloom" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Golden Concentric Rings */}
      <circle cx="200" cy="200" r="185" stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.4" filter="url(#chakraBloom)" />
      <circle cx="200" cy="200" r="160" stroke="#facc15" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="6 8" />
      <circle cx="200" cy="200" r="130" stroke="#ea580c" strokeWidth="1" strokeOpacity="0.5" />

      {/* 4-Blade Rasenshuriken Energy Wings */}
      <g filter="url(#chakraBloom)">
        {[0, 90, 180, 270].map((angle, i) => (
          <path
            key={i}
            d="M 200 200 
               C 230 150, 300 90, 360 80 
               C 310 150, 260 180, 200 200 Z"
            fill="#f97316"
            fillOpacity="0.45"
            stroke="#facc15"
            strokeWidth="2"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
      </g>

      {/* Central Core Uzumaki Chakra Seal */}
      <circle cx="200" cy="200" r="60" fill="url(#narutoBgCore)" stroke="#facc15" strokeWidth="3" />
      <circle cx="200" cy="200" r="48" fill="#ea580c" />

      {/* Uzumaki Spiral */}
      <path
        d="M 200 170 
           C 220 170, 232 182, 232 198 
           C 232 214, 218 226, 200 226 
           C 184 226, 172 214, 172 198 
           C 172 186, 182 176, 194 176 
           C 206 176, 214 184, 214 196 
           C 214 204, 208 210, 200 210 
           C 194 210, 188 204, 188 198 
           C 188 194, 192 190, 196 190 
           C 200 190, 204 194, 204 198"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Konoha Autumn Leaf SVG Particle
export const KonohaLeafSVG: React.FC<{ size?: number; className?: string }> = ({ size = 28, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 36 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 0 
           C28 10, 36 24, 34 38 
           C32 46, 24 50, 18 50 
           C12 50, 4 46, 2 38 
           C0 24, 8 10, 18 0 Z"
        fill="#ea580c"
        fillOpacity="0.85"
        stroke="#facc15"
        strokeWidth="1"
      />
      {/* Central Spine */}
      <path d="M18 4 Q18 28 18 46" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
      {/* Leaf veins */}
      <path d="M18 16 Q24 20 28 24" stroke="#d97706" strokeWidth="0.8" />
      <path d="M18 24 Q10 28 6 32" stroke="#d97706" strokeWidth="0.8" />
      <path d="M18 32 Q25 36 29 40" stroke="#d97706" strokeWidth="0.8" />
    </svg>
  );
};

interface NarutoBackgroundProps {
  isActivated?: boolean;
}

export const NarutoBackground: React.FC<NarutoBackgroundProps> = ({ isActivated = false }) => {
  const { currentTheme } = useThemeStore();
  const spiralControls = useAnimationControls();
  const [rapidSpinning, setRapidSpinning] = useState(false);

  // Periodic Rapid Rasenshuriken activation every 10 seconds
  useEffect(() => {
    let isCancelled = false;

    const runActivationCycle = async () => {
      while (!isCancelled) {
        setRapidSpinning(false);
        await spiralControls.start({
          rotate: [0, 180],
          filter: 'blur(0px) drop-shadow(0 0 35px rgba(249, 115, 22, 0.45))',
          transition: { duration: 9, ease: 'linear' },
        });

        if (isCancelled) break;

        // Rapid Rasengan Chakra Blast
        setRapidSpinning(true);
        await spiralControls.start({
          rotate: [180, 900],
          filter: 'blur(3px) drop-shadow(0 0 80px rgba(250, 204, 21, 0.95)) drop-shadow(0 0 40px rgba(249, 115, 22, 0.9))',
          transition: { duration: 1.1, ease: 'easeInOut' },
        });

        spiralControls.set({ rotate: 0 });
      }
    };

    runActivationCycle();

    return () => {
      isCancelled = true;
    };
  }, [spiralControls]);

  useEffect(() => {
    if (isActivated) {
      spiralControls.start({
        rotate: [0, 1080],
        filter: 'blur(4px) drop-shadow(0 0 90px rgba(249, 115, 22, 1)) drop-shadow(0 0 45px rgba(250, 204, 21, 1))',
        scale: [1, 1.15, 1],
        transition: { duration: 1.2, ease: 'easeInOut' },
      });
    }
  }, [isActivated, spiralControls]);

  // Leaf particles floating down (Konoha Leaves)
  const leaves = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.1) % 96 + 2}%`,
      delay: (i * 0.7) % 12,
      duration: 10 + (i % 6) * 2,
      size: 22 + (i % 4) * 6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base Dark Ground */}
      <div className="absolute inset-0 bg-[#060403]" />

      {/* Studio Lighting Bokeh */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.12) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 45%), radial-gradient(circle at 50% 10%, rgba(249, 115, 22, 0.3) 0%, transparent 65%)',
        }}
      />

      {/* Kurama Flame / Sage Chakra Atmosphere */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[85vh] opacity-80 pointer-events-none transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% -10%, rgba(234, 88, 12, 0.85) 0%, rgba(154, 52, 18, 0.5) 45%, rgba(6, 4, 3, 0.95) 85%, #060403 100%)',
        }}
      />

      {/* Floating Rotating Rasenshuriken & Uzumaki Spiral Motif */}
      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 flex items-center justify-center opacity-30 md:opacity-35 pointer-events-none transition-all duration-700">
        <motion.div
          animate={spiralControls}
          className="relative flex items-center justify-center"
        >
          <UzumakiRasenshurikenSVG size={640} />
          
          {rapidSpinning && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-amber-400 shadow-[0_0_60px_rgba(250,204,21,0.8)]"
            />
          )}
        </motion.div>
      </div>

      {/* Konoha Autumn Leaves Drifting Downward */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {leaves.map((l) => (
          <div
            key={l.id}
            className="leaf-particle"
            style={{
              left: l.left,
              top: 0,
              animationDuration: `${l.duration}s`,
              animationDelay: `-${l.delay}s`,
            }}
          >
            <KonohaLeafSVG size={l.size} className="drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] opacity-65" />
          </div>
        ))}
      </div>

      {/* Floating Golden Sage Chakra Sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute rounded-full bg-amber-400"
            style={{
              width: (i % 3) + 2,
              height: (i % 3) + 2,
              left: `${(i * 6.2) % 100}%`,
              bottom: `${(i * 6.8) % 100}%`,
              boxShadow: '0 0 10px #facc15',
            }}
            animate={{
              y: [-10, -90, -170],
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.3, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.35),
              ease: 'easeOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};
