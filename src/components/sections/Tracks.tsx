export function Tracks() {
  return (
    <section id="tracks" className="tracks-outer-wrap" style={{ minHeight: '60vh' }}>
      <div className="section-container">
        <div className="section-header-block">
          <h2 className="section-heading">Hackathon <span className="tracks-heading-accent">Tracks</span></h2>
        </div>

        <div className="tracks-grid-single">
          <div className="card-3d tracks-card-custom">
            <div className="card-3d-top"></div>
            <div className="card-3d-right"></div>
            <div className="card-3d-front">
              <h3 className="card-3d-title">Rules & Deliverables</h3>
              
              <div className="card-3d-body">
                <p className="tracks-paragraph">
                  Participants will be presented with <span className="highlight-green">three distinct themes</span>, each accompanied by a unique problem statement. These themes and their respective challenges will be officially announced on the <span className="highlight-green">first day of the event</span>.
                </p>
                <p className="tracks-paragraph">
                  Teams are required to select one theme and develop a solution based on the provided problem statement. Participants may opt to build either a <span className="highlight-yellow">web application</span> or a <span className="highlight-yellow">mobile application</span>, depending on their area of expertise and preference. There are no restrictions on the technology stack — teams are free to use tools and platforms of their choice.
                </p>
                <p className="tracks-paragraph">
                  The primary objective is to address the given problem with an innovative and practical solution that demonstrates strong technical execution and thoughtful design. Participants are encouraged to think critically, collaborate effectively, and create impactful technology-driven outcomes.
                </p>

                <div className="tracks-cta-box">
                  <p className="tracks-cta-text">
                    Select your theme, assemble your team, and start building impactful solutions!
                  </p>
                </div>
              </div>

              <div className="card-3d-metrics tracks-metrics">
                <div className="card-metric-badge">
                  <span className="card-metric-val">1–4 Members</span>
                  <span className="card-metric-lbl">Team Size</span>
                </div>
                <div className="card-metric-badge">
                  <span className="card-metric-val">₹120 / Head</span>
                  <span className="card-metric-lbl">Registration Fee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tracks;
