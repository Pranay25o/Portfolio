import React, { useState, useEffect } from 'react';
import { NarutoBackground } from './components/NarutoBackground';
import { ChakraTransitionWrapper, SageIntro } from './components/ChakraTransitionWrapper';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [chakraTrigger, setChakraTrigger] = useState(0);
  const [, setIntroDone] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setChakraTrigger((prev) => prev + 1);

    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 75;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleTriggerChakra = () => {
    setChakraTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const sections = ['hero', 'work', 'expertise', 'experience', 'credentials', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 220;
          for (const sectionId of sections) {
            const el = document.getElementById(sectionId);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(sectionId);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050302] text-slate-100 overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 🎬 1. Initial Load: Sage Awakening (Naruto Uzumaki Theme) */}
      <SageIntro onComplete={() => setIntroDone(true)} />

      {/* 🌌 2. Dynamic Naruto Uzumaki Background (Rasenshuriken + Konoha Leaves + Golden Sparks) */}
      <NarutoBackground isActivated={chakraTrigger > 0} />

      {/* 🧭 3. Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onTriggerChakra={handleTriggerChakra}
      />

      {/* ✨ 4. Floating Glassmorphic Master Content */}
      <main className="relative z-10 pt-6 pb-16">
        <ChakraTransitionWrapper
          activeSectionKey={activeSection}
          triggerChakra={chakraTrigger}
        >
          <div className="space-y-6">
            <HeroSection
              onExploreProjects={() => handleNavigate('work')}
              onContactClick={() => handleNavigate('contact')}
            />

            <ProjectsSection />

            <ExpertiseSection />

            <ExperienceSection />

            <CredentialsSection />

            <ContactSection />
          </div>
        </ChakraTransitionWrapper>
      </main>

      {/* 5. Footer */}
      <Footer onTriggerTsukuyomi={handleTriggerChakra} />
    </div>
  );
};

export default App;
