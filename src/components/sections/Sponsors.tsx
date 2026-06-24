import { motion } from 'framer-motion';
import artparkLogo from '../../assets/ARTPARK primary logo.png';
import unstopLogo from '../../assets/unstop.png';
import bngLogo from '../../assets/bng.png';
import wieLogoPng from '../../assets/wielogonew.png';

export function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-outer-wrap-new">
      {/* Marquee bar at top */}
      <div className="marquee-bar-container">
        <div className="marquee-bar sponsors-marquee-bar">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>OUR SPONSORS &amp; PARTNERS &nbsp;✦&nbsp; </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>OUR SPONSORS &amp; PARTNERS &nbsp;✦&nbsp; </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading sponsors-heading-dark">
            Our <span className="sponsors-heading-accent">Sponsors</span>
          </h2>
          <div className="heading-underline" />
        </motion.div>

        {/* ── Diamond Sponsor ── */}
        <motion.div
          className="sponsor-tier-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="sponsor-tier-label">
            <span className="sponsor-tier-gem">💎</span> Diamond Sponsor
          </div>
          <div className="diamond-sponsor-card">
            <div className="card-3d">
              <div className="card-3d-top" style={{ backgroundColor: '#a855f7' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#7c3aed' }} />
              <div className="card-3d-front diamond-card-front">
                <a
                  href="https://www.artpark.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="diamond-logo-link"
                >
                  <img
                    src={artparkLogo}
                    alt="ARTPARK Logo"
                    className="diamond-logo-img"
                  />
                </a>
                <div className="diamond-sponsor-info">
                  <h3 className="diamond-sponsor-name">ARTPARK</h3>
                  <p className="diamond-sponsor-desc">
                    ARTPARK brings together the best of research, startup, industry and
                    government ecosystems to drive large-scale impact. ARTPARK is proud to
                    power CodeFury 9.0 as the primary sponsor.
                  </p>
                  <a
                    href="https://www.artpark.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="diamond-sponsor-link"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Platform Partner ── */}
        <motion.div
          className="sponsor-tier-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="sponsor-tier-label">
            <span className="sponsor-tier-gem">🤝</span> Platform Partner
          </div>
          <div className="platform-sponsor-row">
            <div className="card-3d platform-card-wrap">
              <div className="card-3d-top" style={{ backgroundColor: '#3b82f6' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#1d4ed8' }} />
              <div className="card-3d-front platform-card-front">
                <a
                  href="https://unstop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-logo-link"
                >
                  <img
                    src={unstopLogo}
                    alt="Unstop Logo"
                    className="platform-logo-img"
                  />
                </a>
                <span className="platform-sponsor-name">Unstop</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── General Sponsors ── */}
        <motion.div
          className="sponsor-tier-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="sponsor-tier-label">
            <span className="sponsor-tier-gem">⭐</span> General Sponsors
          </div>
          <div className="general-sponsors-grid">
            {/* IEEE CS Bangalore */}
            <div className="card-3d general-sponsor-card">
              <div className="card-3d-top" style={{ backgroundColor: '#f59e0b' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#d97706' }} />
              <div className="card-3d-front general-card-front">
                <a
                  href="https://ieeecsbangalore.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="general-logo-link"
                >
                  <img src={bngLogo} alt="IEEE CS Bangalore Section" className="general-logo-img" />
                </a>
                <span className="general-sponsor-name">IEEE CS<br />Bangalore Section</span>
              </div>
            </div>

            {/* IEEE WIE */}
            <div className="card-3d general-sponsor-card">
              <div className="card-3d-top" style={{ backgroundColor: '#ec4899' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#be185d' }} />
              <div className="card-3d-front general-card-front">
                <a
                  href="https://wie.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="general-logo-link"
                >
                  <img src={wieLogoPng} alt="IEEE WIE" className="general-logo-img" />
                </a>
                <span className="general-sponsor-name">IEEE WIE</span>
              </div>
            </div>

            {/* MistyClimb LLP */}
            <div className="card-3d general-sponsor-card">
              <div className="card-3d-top" style={{ backgroundColor: '#10b981' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#047857' }} />
              <div className="card-3d-front general-card-front mistyclimb-card">
                <a
                  href="https://tracxn.com/d/legal-entities/india/mistyclimb-llp/__IKhPP9H2P8LXL5e1EiNMGr3OCaWiJdUf9M_pVuIf3b8#about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="general-logo-link"
                >
                  <div className="mistyclimb-text-logo">MistyClimb</div>
                  <div className="mistyclimb-sub">LLP</div>
                </a>
                <span className="general-sponsor-name">MistyClimb LLP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsors;
