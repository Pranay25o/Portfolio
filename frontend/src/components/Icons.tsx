import React from 'react';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
  </svg>
);

export const TwitterIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Uzumaki Clan Spiral Crest (Naruto Swirl)
export const UzumakiSpiralIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" fill="#ea580c" stroke="#f97316" strokeWidth="4" />
    <circle cx="50" cy="50" r="38" fill="#f97316" />
    <path
      d="M50 20 C68 20, 80 32, 80 50 C80 66, 66 78, 50 78 C34 78, 22 66, 22 50 C22 36, 32 26, 46 26 C58 26, 68 34, 68 46 C68 56, 60 64, 50 64 C42 64, 36 58, 36 50 C36 44, 40 40, 46 40 C50 40, 54 44, 54 48 C54 50, 52 52, 50 52"
      fill="none"
      stroke="#ffffff"
      strokeWidth="6.5"
      strokeLinecap="round"
    />
  </svg>
);

// Konoha Leaf Headband Crest
export const KonohaLeafIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path
      d="M30 65 C25 50, 32 30, 60 25 C68 38, 75 58, 50 75 C42 70, 35 68, 30 65 Z"
      fill="#f97316"
      stroke="#facc15"
      strokeWidth="3"
    />
    <path
      d="M38 52 Q 52 48 70 32"
      stroke="#ffffff"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M52 48 Q 56 60 60 70"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);
