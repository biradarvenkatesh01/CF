import { motion } from 'framer-motion';

interface Winner {
  award: string;
  medal: string;
  project: string;
  team: string;
  college: string;
  tech: string[];
  links: { label: string; url: string }[];
  colorTheme: 'gold' | 'silver';
}

const WINNERS: Winner[] = [
  {
    award: 'Web Dev Track — Winners',
    medal: '🥇',
    project: 'Astero',
    team: 'Goofy Gophers',
    college: 'NMAM Institute of Technology',
    tech: ['Next.js', 'Google Maps API', 'MongoDB'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Team-Goofy-Gophers/website' },
      { label: 'Live Demo', url: 'https://astero-rho.vercel.app/' },
    ],
    colorTheme: 'gold',
  },
  {
    award: 'Web Dev Track — Runners Up',
    medal: '🥈',
    project: 'Relief Compass',
    team: 'Team POV',
    college: 'Dr. Ambedkar Institute of Technology',
    tech: ['React.js', 'Tailwind', 'Firebase'],
    links: [
      { label: 'GitHub', url: 'https://github.com/Karthikeyan1508/crisis-connect' },
      { label: 'Live Demo', url: 'https://code-fury-submission.vercel.app/' },
    ],
    colorTheme: 'silver',
  },
  {
    award: 'App Dev Track — Winners',
    medal: '🥇',
    project: 'Rescue Ring',
    team: 'Night Owls',
    college: 'Dayananda Sagar Institute of Technology',
    tech: ['Flutter', 'Dart', 'Firebase'],
    links: [
      { label: 'GitHub', url: 'https://github.com/chetanr250/disaster-ready' },
    ],
    colorTheme: 'gold',
  },
  {
    award: 'App Dev Track — Runners Up',
    medal: '🥈',
    project: 'ResQAids',
    team: 'Widget Wizards',
    college: 'Ambedkar Institute of Technology',
    tech: ['Flutter', 'Dart', 'Google API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/aryanmajhi75/Widget-Wizards---Codefury-Hackathon' },
    ],
    colorTheme: 'silver',
  },
];

const themeMap = {
  gold: {
    top: '#f59e0b',
    right: '#d97706',
    front: '#fffbeb',
    badge: 'winner-gold-badge',
  },
  silver: {
    top: '#cbd5e1',
    right: '#94a3b8',
    front: '#f1f5f9',
    badge: 'winner-silver-badge',
  },
};

export function PastWinners() {
  return (
    <section id="past" className="past-winners-outer-wrap" style={{ minHeight: '60vh' }}>
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            Past <span className="winners-heading-accent">Winners</span>
          </h2>
          <div className="heading-underline" />
          <p className="winners-subtitle">Celebrating brilliance from CodeFury 8.0</p>
        </motion.div>

        <div className="winners-grid-custom">
          {WINNERS.map((w, i) => {
            const t = themeMap[w.colorTheme];
            return (
              <motion.div
                key={w.project}
                className="card-3d winners-card-3d"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              >
                <div className="card-3d-top" style={{ backgroundColor: t.top }} />
                <div className="card-3d-right" style={{ backgroundColor: t.right }} />
                <div className="card-3d-front" style={{ backgroundColor: t.front }}>
                  {/* Award badge row */}
                  <div className="winner-award-row">
                    <span className="winner-medal">{w.medal}</span>
                    <span className={`winner-award-badge ${t.badge}`}>{w.award}</span>
                  </div>

                  {/* Project name */}
                  <h3 className="winner-project-title">{w.project}</h3>

                  {/* Team & College */}
                  <div className="winner-meta">
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">👥</span>
                      <span className="winner-meta-text"><strong>{w.team}</strong></span>
                    </div>
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">🏛️</span>
                      <span className="winner-meta-text">{w.college}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="winner-tech-row">
                    {w.tech.map(t => (
                      <span key={t} className="winner-tech-chip">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="winner-links-row">
                    {w.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="winner-link-btn"
                      >
                        {link.label === 'GitHub' ? '⌥ ' : '🔗 '}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PastWinners;
