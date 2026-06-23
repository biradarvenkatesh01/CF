import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Hook to track the scroll of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to translateY offset (speed increased: up to -420px)
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  // Create a smoothed spring value for smooth inertial catch-up on both mobile and PC
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className="about-outer-wrap"
      style={{ minHeight: '80vh', y }}
    >
      {/* SVG Filter for generating the realistic, organic torn paper edge */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id="torn-paper-filter">
            {/* Generate high-octave fractal noise to create rough paper fibers */}
            <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="5" result="noise" />
            {/* Displace the straight div boundary using the turbulence map */}
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Torn background sheet covering the entire section, with torn edges at top and bottom */}
      <div className="about-torn-bg-paper"></div>

      <div className="section-container"></div>
    </motion.section>
  );
}

export default About;
