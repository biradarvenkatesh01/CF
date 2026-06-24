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

export function PrizePool() {
  return (
    <section id="prizes" className="prizes-outer-wrap" style={{ minHeight: '70vh' }}>
      
      {/* Infinite Marquee Bar located exactly at the boundary */}
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
        <div className="section-header-block">
          <h2 className="section-heading">Prize <span className="prizes-heading-accent">Pool</span></h2>
        </div>

        <div className="prizes-grid-3d">
          {/* Second Prize Card (Silver) */}
          <div className="card-3d prize-card-silver">
            <div className="card-3d-top prize-top-silver"></div>
            <div className="card-3d-right prize-right-silver"></div>
            <div className="card-3d-front prize-front-custom">
              <TrophyIcon color="#94a3b8" />
              <div className="prize-rank-badge-3d badge-silver">2nd Place</div>
              <div className="prize-amount-3d">₹15,000</div>
              <div className="prize-label-3d">Runner Up</div>
            </div>
          </div>

          {/* First Prize Card (Gold) */}
          <div className="card-3d prize-card-gold">
            <div className="card-3d-top prize-top-gold"></div>
            <div className="card-3d-right prize-right-gold"></div>
            <div className="card-3d-front prize-front-custom prize-front-gold">
              <TrophyIcon color="#f59e0b" />
              <div className="prize-rank-badge-3d badge-gold">1st Place</div>
              <div className="prize-amount-3d amount-gold">₹25,000</div>
              <div className="prize-label-3d label-gold">Winner</div>
            </div>
          </div>

          {/* Third Prize Card (Bronze) */}
          <div className="card-3d prize-card-bronze">
            <div className="card-3d-top prize-top-bronze"></div>
            <div className="card-3d-right prize-right-bronze"></div>
            <div className="card-3d-front prize-front-custom">
              <TrophyIcon color="#ca8a04" />
              <div className="prize-rank-badge-3d badge-bronze">3rd Place</div>
              <div className="prize-amount-3d">₹10,000</div>
              <div className="prize-label-3d">Second Runner Up</div>
            </div>
          </div>
        </div>

        {/* Consolation/Special Prizes Banner */}
        <div className="prizes-consolation-box">
          <p className="consolation-text">
            Additional cash prizes worth <strong>₹10,000</strong> for Special Track Winners & Consolation Prizes!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrizePool;
