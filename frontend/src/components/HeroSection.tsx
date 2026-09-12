import React from 'react';
import { HeroCardDeck } from './HeroCardDeck';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
}) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-16 pb-8 overflow-visible">
      <HeroCardDeck
        onExploreProjects={onExploreProjects}
        onContactClick={onContactClick}
      />
    </section>
  );
};
