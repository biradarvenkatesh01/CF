import { motion } from 'framer-motion';

const TrophyIcon = ({ color }: { color: string }) => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, marginBottom: '16px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))' }}
  >
    {/* Base/Pedestal */}
    <path d="M6 20H18V22H6V20Z" fill="currentColor" />
    <path d="M9 17H15V20H9V17Z" fill="currentColor" opacity="0.8" />
    
    {/* Stem */}
    <path d="M11 14H13V17H11V14Z" fill="currentColor" />
    
    {/* Cup Body */}
    <path d="M5 5V11C5 14.866 8.134 18 12 18C15.866 18 19 14.866 19 11V5H5Z" fill="currentColor" />
    
    {/* Cup Rim Highlight */}
    <path d="M5 5H19V7H5V5Z" fill="currentColor" opacity="0.9" />

    {/* Star Detail */}
    <path d="M12 9L13.2 11.5L16 11.8L14 13.8L14.5 16.5L12 15.2L9.5 16.5L10 13.8L8 11.8L10.8 11.5L12 9Z" fill="#ffffff" opacity="0.95" />

    {/* Handles */}
    <path d="M5 7H3V10C3 11.657 4.343 13 6 13V11C5.448 11 5 10.552 5 10V7Z" fill="currentColor" />
    <path d="M19 7H21V10C21 11.657 19.657 13 18 13V11C18.552 11 19 10.552 19 10V7Z" fill="currentColor" />
  </svg>
);

const PRIZE_CARDS = [
  {
    cardClass: 'prize-card-silver',
    topClass: 'prize-top-silver',
    rightClass: 'prize-right-silver',
    frontClass: 'prize-front-custom',
    badgeClass: 'badge-silver',
    trophyColor: '#94a3b8',
    rank: '2nd Place',
    amount: '₹15,000',
    label: 'Runner Up',
    order: 2,
    delay: 0.15,
  },
  {
    cardClass: 'prize-card-gold',
    topClass: 'prize-top-gold',
    rightClass: 'prize-right-gold',
    frontClass: 'prize-front-custom prize-front-gold',
    badgeClass: 'badge-gold',
    trophyColor: '#f59e0b',
    rank: '1st Place',
    amount: '₹25,000',
    label: 'Winner',
    amountClass: 'amount-gold',
    labelClass: 'label-gold',
    order: 1,
    delay: 0,
  },
  {
    cardClass: 'prize-card-bronze',
    topClass: 'prize-top-bronze',
    rightClass: 'prize-right-bronze',
    frontClass: 'prize-front-custom',
    badgeClass: 'badge-bronze',
    trophyColor: '#ca8a04',
    rank: '3rd Place',
    amount: '₹10,000',
    label: 'Second Runner Up',
    order: 3,
    delay: 0.3,
  },
];

export function PrizePool() {
  return (
    <section id="prizes" className="prizes-outer-wrap" style={{ minHeight: '70vh' }}>
      
      {/* Infinite Marquee Bar */}
      <div className="marquee-bar-container">
        <div className="marquee-bar">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>TOTAL PRIZE POOL WORTH ₹60,000 &nbsp;✦&nbsp; </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>TOTAL PRIZE POOL WORTH ₹60,000 &nbsp;✦&nbsp; </span>
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
          <h2 className="section-heading">Prize <span className="prizes-heading-accent">Pool</span></h2>
          <div className="heading-underline" />
        </motion.div>

        <div className="prizes-grid-3d">
          {PRIZE_CARDS.map((card) => (
            <motion.div
              key={card.rank}
              className={`card-3d ${card.cardClass}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: card.delay }}
            >
              <div className={`card-3d-top ${card.topClass}`}></div>
              <div className={`card-3d-right ${card.rightClass}`}></div>
              <div className={`card-3d-front ${card.frontClass}`}>
                <TrophyIcon color={card.trophyColor} />
                <div className={`prize-rank-badge-3d ${card.badgeClass}`}>{card.rank}</div>
                <div className={`prize-amount-3d ${card.amountClass || ''}`}>{card.amount}</div>
                <div className={`prize-label-3d ${card.labelClass || ''}`}>{card.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consolation/Special Prizes Banner */}
        <motion.div
          className="prizes-consolation-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
        >
          <p className="consolation-text">
            Additional cash prizes worth <strong>₹10,000</strong> for Special Track Winners &amp; Consolation Prizes!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PrizePool;
