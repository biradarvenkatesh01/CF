/// <reference types="vite/client" />
import { useState } from 'react';
import logoImg from '../assets/handle.png';

interface NavItem {
  label: string;
  href: string;
}

const DESKTOP_NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const DROPDOWN_NAV_ITEMS: NavItem[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Prize Pool', href: '#prizes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'CodeFury Wall', href: '#wall' },
  { label: 'Past Winners', href: '#past' },
  { label: 'Our Sponsors', href: '#sponsors' },
  { label: 'FlappyDev (Mini Game)', href: '#game' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const targetScroll = element.offsetTop - 72; // Subtract header height
      window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#hero');
  };

  return (
    <header className="header-nav">
      <div className="header-container">
        {/* Interactive Logo */}
        <a href="#hero" className="header-logo-link" onClick={handleLogoClick}>
          <img src={logoImg} alt="CodeFury Logo" className="header-logo-img" />
        </a>

        {/* Desktop Navigation (Right-aligned) */}
        <nav className="desktop-nav">
          <ul className="desktop-nav-list">
            {DESKTOP_NAV_ITEMS.map((item) => (
              <li key={item.label} className="desktop-nav-item">
                <a
                  href={item.href}
                  className="desktop-nav-link"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger / Menu toggle button */}
          <button
            className="menu-toggle-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </nav>
      </div>

      {/* Unified Dropdown Menu (full screen overlay) */}
      <div className={`dropdown-menu-overlay ${isOpen ? 'show' : ''}`}>
        {/* Close Button at top-right */}
        <button
          className="dropdown-close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        <nav className="dropdown-nav">
          <ul className="dropdown-nav-list">
            {DROPDOWN_NAV_ITEMS.map((item, index) => (
              <li
                key={item.label}
                className="dropdown-nav-item"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <a
                  href={item.href}
                  className="dropdown-nav-link"
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
