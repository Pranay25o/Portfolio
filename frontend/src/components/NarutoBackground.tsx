import React, { useMemo } from 'react';

/*
 * MOBILE GHOSTING FIX — NarutoBackground
 *
 * ❌ BUG ROOT CAUSE: The "Studio Lighting Radial Atmosphere" div had:
 *    className="... mix-blend-mode: screen ..."
 *
 *    mix-blend-mode on a child of a position:fixed element is the #1 cause of
 *    mobile scroll ghosting. On Android Chrome/WebView, the blend mode forces
 *    the browser to composite the layer with all layers behind it on EVERY frame.
 *    When scrolling happens, the old frames are not cleared before the next
 *    composite, causing elements to "smear" or "trail" across the screen.
 *
 * ✅ FIX: Removed mix-blend-mode entirely. The atmospheric glow effect is
 *    recreated identically using a plain rgba radial gradient overlay with
 *    CSS opacity — no blend mode needed, looks identical at these opacity levels.
 *
 * ❌ ADDITIONAL BUG: import { motion } from 'framer-motion' was present but
 *    the component never uses motion. Removed dead import.
 *
 * ❌ ADDITIONAL BUG: UzumakiRasenshurikenSVG had style={{ willChange: 'transform' }}
 *    directly on the SVG element. The SVG is INSIDE the .rasenshuriken-spin div
 *    which already has will-change on the wrapper. Double will-change = two layers
 *    promoted for the same animation subtree = wasted VRAM. Removed from SVG.
 */

export const UzumakiRasenshurikenSVG: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 520 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      // Removed: style={{ willChange: 'transform' }} — parent .rasenshuriken-spin handles this
    >
      <defs>
        <radialGradient id="narutoBgCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#facc15" stopOpacity="0.95" />
          <stop offset="35%" stopColor="#f97316" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#c2410c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#431407" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Outer Golden Concentric Rings */}
      <circle cx="200" cy="200" r="185" stroke="#f97316" strokeWidth="2" strokeOpacity="0.45" />
      <circle cx="200" cy="200" r="160" stroke="#facc15" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="6 8" />
      <circle cx="200" cy="200" r="130" stroke="#ea580c" strokeWidth="1" strokeOpacity="0.5" />

      {/* 4-Blade Rasenshuriken Energy Wings */}
      <g>
        {[0, 90, 180, 270].map((angle, i) => (
          <path
            key={i}
            d="M 200 200 
               C 230 150, 300 90, 360 80 
               C 310 150, 260 180, 200 200 Z"
            fill="#f97316"
            fillOpacity="0.45"
            stroke="#facc15"
            strokeWidth="1.5"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
      </g>

      {/* Central Core Uzumaki Chakra Seal */}
      <circle cx="200" cy="200" r="60" fill="url(#narutoBgCore)" stroke="#facc15" strokeWidth="2.5" />
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
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Konoha Autumn Leaf SVG Particle
export const KonohaLeafSVG: React.FC<{ size?: number; className?: string }> = ({ size = 26, className = '' }) => {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 36 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 0 
           C28 10, 36 24, 34 38 
           C32 46, 24 50, 18 50 
           C12 50, 4 46, 2 38 
           C0 24, 8 10, 18 0 Z"
        fill="#ea580c"
        fillOpacity="0.8"
        stroke="#facc15"
        strokeWidth="1"
      />
      <path d="M18 4 Q18 28 18 46" stroke="#fbbf24" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

interface NarutoBackgroundProps {
  isActivated?: boolean;
}

export const NarutoBackground: React.FC<NarutoBackgroundProps> = ({ isActivated = false }) => {
  const leaves = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: `${(i * 10) % 94 + 3}%`,
      delay: (i * 1.3) % 10,
      duration: 12 + (i % 4) * 2.5,
      size: 22 + (i % 3) * 5,
    }));
  }, []);

  return (
    /*
     * GHOSTING FIX 1: Added `isolation: isolate` to the fixed container.
     * This creates an explicit stacking context, telling the browser to composite
     * this layer independently. Without it, the browser's compositing decisions
     * for the fixed+animated subtree are undefined — causing frame bleed on mobile.
     *
     * GHOSTING FIX 2: Removed `transform-gpu` class from the fixed container.
     * `transform: translateZ(0)` on the fixed root was fighting with the
     * compositing of child elements, creating ambiguous layer ownership.
     * The children that need GPU promotion have their own will-change.
     */
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ isolation: 'isolate' }}
    >
      {/* Base Dark Ground — solid opaque background prevents frame bleed */}
      <div className="absolute inset-0 bg-[#060403]" />

      {/*
       * GHOSTING FIX 3: Removed mix-blend-mode: screen entirely.
       * Was: className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
       *
       * mix-blend-mode forces the GPU to composite this layer against ALL layers
       * behind it on every frame. On mobile, this prevents the compositor from
       * clearing the layer properly during scroll — causing the smear/ghost effect.
       *
       * Replaced with: a plain rgba radial gradient at reduced opacity.
       * The visual result is identical at these opacity levels (40% of a white
       * highlight is mathematically very close to screen blending at low values).
       */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(circle at 15% 20%, rgba(255, 255, 255, 0.032) 0%, transparent 40%)',
            'radial-gradient(circle at 85% 20%, rgba(255, 255, 255, 0.024) 0%, transparent 45%)',
            'radial-gradient(circle at 50% 10%, rgba(249, 115, 22, 0.10) 0%, transparent 65%)',
          ].join(', '),
        }}
      />

      {/* Kurama Flame / Sage Chakra Atmosphere */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[130vw] h-[80vh] opacity-75 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% -10%, rgba(234, 88, 12, 0.75) 0%, rgba(154, 52, 18, 0.4) 45%, rgba(6, 4, 3, 0.95) 85%, #060403 100%)',
        }}
      />

      {/* Rotating Rasenshuriken — will-change on wrapper div, not on SVG */}
      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 flex items-center justify-center opacity-30 md:opacity-35 pointer-events-none">
        <div className={`rasenshuriken-spin ${isActivated ? 'animate-pulse scale-105' : ''}`}>
          <UzumakiRasenshurikenSVG size={580} />
        </div>
      </div>

      {/* Konoha Autumn Leaves */}
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
            <KonohaLeafSVG size={l.size} className="opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};
