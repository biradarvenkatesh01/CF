import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  note?: string;
  badge?: string;
  colorTheme: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: 'August 1, 2026',
    title: 'Registration Opens',
    description: 'Kickstart your CodeFury journey, form your dream team and register!',
    colorTheme: 'green',
  },
  {
    date: '12th and 13th August 2026',
    title: 'Workshop - "Git Ready, Set, Code"',
    description: 'A Pre-Codefury Web Dev Workshop.',
    link: {
      text: 'Register for Workshop',
      url: 'http://tinyurl.com/codefuryWeb',
    },
    colorTheme: 'yellow',
  },
  {
    date: 'Surprise Event',
    title: 'Mini Game and Mini Challenge',
    description: 'Participate in our surprise mini game & challenge to win exciting discounts on registration fees!',
    colorTheme: 'cyan',
  },
  {
    date: 'August 19, 2026',
    title: 'Registration Closes',
    description: 'Final call! Register before the portal closes.',
    note: '* Registrations extended to August 21st, 2026, 4:00 PM',
    colorTheme: 'rose',
  },
  {
    date: 'August 22-23, 2026',
    title: 'CodeFury Round 1',
    description: 'The 24-hour coding showdown begins.',
    badge: '[22nd 6pm to 23rd 6pm]',
    colorTheme: 'violet',
  },
  {
    date: 'August 24, 2026',
    title: 'CodeFury Round 2',
    description: 'Top teams present their innovations to the jury.',
    badge: '[24th 10am onwards]',
    colorTheme: 'orange',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="timeline-section-wrap" style={{ minHeight: '80vh', padding: '0 0 20px 0' }}>
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">Event <span className="timeline-heading-accent">Timeline</span></h2>
          <div className="heading-underline" />
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {TIMELINE_EVENTS.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={event.title}
                className={`timeline-item ${isLeft ? 'left' : 'right'} theme-${event.colorTheme}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
              >
                <div className="timeline-dot"></div>
                <div className="card-3d timeline-card-3d">
                  <div className="card-3d-top"></div>
                  <div className="card-3d-right"></div>
                  <div className="card-3d-front">
                    <span className="timeline-time">{event.date}</span>
                    <h3 className="timeline-title" style={{ fontFamily: 'var(--font-heading)' }}>
                      {event.title}
                    </h3>
                    <p className="timeline-desc">
                      {event.description}
                    </p>
                    
                    {event.link && (
                      <div style={{ marginTop: '14px' }}>
                        <a
                          href={event.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-register-3d"
                          style={{ display: 'inline-block', width: '220px', height: '54px' }}
                          aria-label={event.link.text}
                        >
                          <div className="btn-register-3d-wrapper">
                            <svg
                              width="210"
                              height="54"
                              viewBox="0 0 210 54"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* Top Face (Yellow/Gold) */}
                              <polygon
                                points="2,12 14,2 208,2 196,12"
                                fill="#f59e0b"
                                stroke="#000000"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                              />
                              
                              {/* Right Face (Darker Amber) */}
                              <polygon
                                points="196,12 208,2 208,42 196,52"
                                fill="#b45309"
                                stroke="#000000"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                              />
                              
                              {/* Front Face (White) */}
                              <polygon
                                points="2,12 196,12 196,52 2,52"
                                fill="#ffffff"
                                stroke="#000000"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                              />

                              {/* Text centered on the front face */}
                              <text
                                x="99"
                                y="32"
                                fill="#000000"
                                fontSize="11"
                                fontWeight="bold"
                                textAnchor="middle"
                                fontFamily="var(--font-mono)"
                                dominantBaseline="central"
                              >
                                REGISTER FOR WORKSHOP
                              </text>
                            </svg>
                          </div>
                        </a>
                      </div>
                    )}

                    {event.note && (
                      <span style={{ fontSize: '11px', color: 'var(--color-accent)', display: 'block', marginTop: '8px', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>
                        {event.note}
                      </span>
                    )}

                    {event.badge && (
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-secondary)', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>
                        {event.badge}
                      </code>
                    )}
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

export default Timeline;
