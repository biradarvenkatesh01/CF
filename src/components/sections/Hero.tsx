import { useEffect, useState } from 'react';
import ieeeLogo from '../../assets/ieee-logo.png';
import csLogo from '../../assets/cs-logo.png';

interface HeroProps {
  onExplore?: (href: string) => void;
}

export function Hero({ onExplore }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const target = new Date('2026-08-22T18:00:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = target - now;

    let times = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isLive: false,
    };

    if (difference > 0) {
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      times = {
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
        isLive: false,
      };
    } else {
      times.isLive = true;
    }

    return times;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="section-hero">
      {/* Top Part: White Textured Background */}
      <div className="hero-top-section">
        <div className="hero-content">
          {/* Presenting Org */}
          <div className="hero-org">IEEE UVCE Computer Society Presents</div>

          {/* Event Title */}
          <h1 className="hero-title">CodeFury 9.0</h1>

          {/* Tagline */}
          <div className="hero-tagline">Fury in Code, Ready to Explode</div>

          {/* Category */}
          <div className="hero-category">Annual National - Level Hackathon</div>

          {/* Powering Partner */}
          <div className="hero-powering">
            <span>Powered by</span>
            <span className="hero-powering-highlight">ART PARK I-Hub @ IISc</span>
          </div>

          {/* Event Dates */}
          <div className="hero-dates">
            <span>22nd, 23rd &amp; 24th August 2026</span>
          </div>

          {/* Countdown Timer */}
          <div className="countdown-container">
            <div className="countdown-timer-grid">
              <div className="countdown-card">
                <span className="countdown-val">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-card">
                <span className="countdown-val">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-card">
                <span className="countdown-val">{timeLeft.minutes}</span>
                <span className="countdown-label">Mins</span>
              </div>
              <div className="countdown-card">
                <span className="countdown-val">{timeLeft.seconds}</span>
                <span className="countdown-label">Secs</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#register" className="btn-register-3d" aria-label="Register Now">
              <div className="btn-register-3d-wrapper">
                <svg
                  width="160"
                  height="54"
                  viewBox="0 0 160 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Top Face (Light Blue) */}
                  <polygon
                    points="2,12 14,2 158,2 146,12"
                    fill="#3b82f6"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  
                  {/* Right Face (Medium Blue) */}
                  <polygon
                    points="146,12 158,2 158,42 146,52"
                    fill="#1d4ed8"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  
                  {/* Front Face (White) */}
                  <polygon
                    points="2,12 146,12 146,52 2,52"
                    fill="#ffffff"
                    stroke="#000000"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Text centered on the front face */}
                  <text
                    x="74"
                    y="32"
                    fill="#000000"
                    fontSize="13"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    dominantBaseline="central"
                  >
                    REGISTER NOW
                  </text>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Bar located exactly at the boundary */}
      <div className="marquee-bar-container">
        <div className="marquee-bar">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>REGISTRATIONS OPEN! &nbsp;✦&nbsp; </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>REGISTRATIONS OPEN! &nbsp;✦&nbsp; </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Part: Dark Starry Background */}
      <div className="hero-bottom-section">
        <div className="hero-content">
          {/* Co-Presenters Logo Row */}
          <div className="presenters-block">
            {/* Mobile-only title (hidden on PC) */}
            <div className="presenters-title mobile-only">Presented By</div>

            <div className="presenters-row">
              <a
                href="https://www.instagram.com/ieeeuvce"
                target="_blank"
                rel="noopener noreferrer"
                className="presenter-logo-link"
                title="IEEE UVCE Instagram"
              >
                <img src={ieeeLogo} alt="IEEE UVCE Logo" className="presenter-logo-img" />
              </a>

              {/* Center column on PC (hidden on Mobile) */}
              <div className="presenters-center-col pc-only">
                <div className="presenters-title">Presented By</div>
                <span className="presenters-separator"></span>
              </div>

              {/* Mobile-only separator (hidden on PC) */}
              <span className="presenters-separator mobile-only"></span>

              <a
                href="https://www.instagram.com/ieee.uvce.cs"
                target="_blank"
                rel="noopener noreferrer"
                className="presenter-logo-link"
                title="IEEE UVCE Computer Society Instagram"
              >
                <img src={csLogo} alt="IEEE UVCE CS Logo" className="presenter-logo-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
