import { useState, useEffect } from 'react';
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
      const targetScroll = element.offsetTop - 72; // Subtract header height
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
        <Hero onExplore={handleExplore} isReveal={introComplete} />
        <About />
        <Tracks />
        <PrizePool />
        <Timeline />
        <CodeFuryWall />
        <PastWinners />
        <Sponsors />
        <Game />
        <FAQ />
        <Contact />
      </main>

      {/* Floating utility */}
      <BackToTopButton />

      {/* Pure black association footer */}
      <Footer />
    </div>
  );
}

export default App;
