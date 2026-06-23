import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Tracks } from './components/sections/Tracks';
import { PrizePool } from './components/sections/PrizePool';
import { Timeline } from './components/sections/Timeline';
import { CodeFuryWall } from './components/sections/CodeFuryWall';
import { PastWinners } from './components/sections/PastWinners';
import { Sponsors } from './components/sections/Sponsors';
import { Game } from './components/sections/Game';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { BackToTopButton } from './components/BackToTopButton';
import { Footer } from './components/Footer';
import { TerminalIntro } from './components/TerminalIntro';
import './App.css';

export function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Hook to track the scroll of the About section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress of About section to translateY (0 to -1200px)
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  // Create a smoothed spring value for smooth inertial catch-up on both mobile and PC
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Lock scrolling while the intro is active
    if (!introComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introComplete]);

  const handleIntroComplete = () => {
    setIntroComplete(true);
  };

  const handleExplore = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const L = element.offsetTop;
      const H = 72; // Header height
      let targetScroll = L - H;

      if (targetId === 'about') {
        const VH = window.innerHeight;
        const SH = element.offsetHeight;
        const maxTranslateY = -1200; // Match the updated parallax speed
        const K = maxTranslateY / (SH + VH);
        targetScroll = L + (K * VH - H) / (1 - K);
      }

      window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Terminal Boot Animation (shown once per session) */}
      {!introComplete && (
        <TerminalIntro onComplete={handleIntroComplete} />
      )}

      {/* Particle background Canvas effect */}
      <ParticleBackground />

      {/* Fixed top Header Navigation */}
      <Header />

      <main>
        <Hero onExplore={handleExplore} />
        <motion.div style={{ y }}>
          <About sectionRef={aboutRef} />
          <Tracks />
          <PrizePool />
          <Timeline />
          <CodeFuryWall />
          <PastWinners />
          <Sponsors />
          <Game />
          <FAQ />
          <Contact />
          <Footer />
        </motion.div>
      </main>

      {/* Floating utility */}
      <BackToTopButton />
    </div>
  );
}

export default App;
