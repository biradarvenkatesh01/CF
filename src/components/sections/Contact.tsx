import { motion } from 'framer-motion';

interface ContactPerson {
  role: string;
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  colorTheme: { top: string; right: string; front: string };
}

const CONTACTS: ContactPerson[] = [
  {
    role: 'Chairperson, Computer Society, IEEE UVCE',
    name: 'Yashaswini C Rao',
    phone: '+91 90084 16648',
    email: 'namrathasridhar29@ieee.org',
    whatsapp: 'https://wa.me/917406543569',
    colorTheme: { top: '#3b82f6', right: '#1d4ed8', front: '#eff6ff' },
  },
  {
    role: 'Vice Chairperson, Computer Society, IEEE UVCE',
    name: 'Nikhil Hegde',
    phone: '+91 96632 40594',
    email: 'gaganakh052@gmail.com',
    whatsapp: 'https://wa.me/919108562257',
    colorTheme: { top: '#8b5cf6', right: '#6d28d9', front: '#f5f3ff' },
  },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ieee.uvce.cs/',
    icon: '📸',
    color: '#e1306c',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/Ieee.uvce.cs',
    icon: '👥',
    color: '#1877f2',
  },
  {
    label: 'Email Us',
    url: 'mailto:cs.uvce.ieee@gmail.com',
    icon: '✉️',
    color: '#10b981',
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-outer-wrap-new" style={{ minHeight: '60vh' }}>
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            Get In <span className="contact-heading-accent">Touch</span>
          </h2>
          <div className="heading-underline" />
          <p className="contact-subtitle">Have questions? Reach out to our team!</p>
        </motion.div>

        {/* Contact Person Cards */}
        <div className="contact-persons-grid">
          {CONTACTS.map((person, i) => (
            <motion.div
              key={person.name}
              className="card-3d contact-card-wrap"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="card-3d-top" style={{ backgroundColor: person.colorTheme.top }} />
              <div className="card-3d-right" style={{ backgroundColor: person.colorTheme.right }} />
              <div className="card-3d-front contact-card-front" style={{ backgroundColor: person.colorTheme.front }}>
                {/* Role badge */}
                <div
                  className="contact-role-badge"
                  style={{ borderColor: person.colorTheme.top, color: person.colorTheme.right }}
                >
                  {person.role}
                </div>

                {/* Name */}
                <h3 className="contact-person-name">{person.name}</h3>

                {/* Detail rows */}
                <div className="contact-detail-list">
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="contact-detail-row">
                    <span className="contact-detail-icon">📞</span>
                    <span className="contact-detail-value">{person.phone}</span>
                  </a>
                  <a href={`mailto:${person.email}`} className="contact-detail-row">
                    <span className="contact-detail-icon">✉️</span>
                    <span className="contact-detail-value">{person.email}</span>
                  </a>
                  <a
                    href={person.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-row contact-whatsapp"
                    style={{ borderColor: person.colorTheme.top }}
                  >
                    <span className="contact-detail-icon">💬</span>
                    <span className="contact-detail-value">WhatsApp Direct</span>
                    <span className="contact-whatsapp-arrow">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          className="contact-social-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="contact-social-heading">Follow &amp; connect with us</p>
          <div className="contact-social-row">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
                style={{ '--pill-color': link.color } as React.CSSProperties}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
