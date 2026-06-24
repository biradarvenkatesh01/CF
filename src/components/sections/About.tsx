import { motion } from 'framer-motion';

export function About() {
  return (
    <section
      id="about"
      className="about-outer-wrap"
      style={{ minHeight: '80vh' }}
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

      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="section-heading">About <span className="about-heading-accent">Us</span></h2>
        </motion.div>

        <div className="about-grid">
          {/* Card 1: IEEE UVCE & Computer Society */}
          <motion.div
            className="card-3d"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="card-3d-top"></div>
            <div className="card-3d-right"></div>
            <div className="card-3d-front">
              <h3 className="card-3d-title">IEEE UVCE & CS</h3>
              <div className="card-3d-body">
                <p>
                  IEEE UVCE is the student branch of IEEE at the University of Visvesvaraya College of Engineering, operating under the IEEE Bangalore Section. Established in 2001, it has grown into a vibrant platform for students to explore innovation, research, and leadership through national and global IEEE events, technical interest groups, and collaborative initiatives. The branch actively promotes technical excellence, professional development, and community engagement, shaping the next generation of engineers.
                </p>
                <p>
                  The IEEE UVCE Computer Society is a dedicated technical chapter focused on fostering a culture of innovation and problem-solving. It regularly conducts coding competitions, hackathons, workshops, and tech talks addressing real-world challenges. With a strong emphasis on skill-building and peer learning, the society empowers students to grow into competent and impactful tech professionals.
                </p>
              </div>
              <div className="card-3d-metrics">
                <div className="card-metric-badge">
                  <span className="card-metric-val">500+</span>
                  <span className="card-metric-lbl">Members</span>
                </div>
                <div className="card-metric-badge">
                  <span className="card-metric-val">25+ Years</span>
                  <span className="card-metric-lbl">Established</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: About CodeFury v9.0 */}
          <motion.div
            className="card-3d"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="card-3d-top"></div>
            <div className="card-3d-right"></div>
            <div className="card-3d-front">
              <h3 className="card-3d-title">About CodeFury v9.0</h3>
              <div className="card-3d-body">
                <p>
                  CodeFury is our flagship Annual National-Level Hackathon that brings together the brightest minds in programming and innovation. This 24-hour intensive coding marathon challenges participants to build revolutionary solutions to real-world problems.
                </p>
                <p>
                  Open to students from all colleges and universities, CodeFury has grown to become one of the most prestigious hackathons in the region, attracting participants from across the country.
                </p>
              </div>
              <div className="card-3d-metrics">
                <div className="card-metric-badge">
                  <span className="card-metric-val">500+</span>
                  <span className="card-metric-lbl">Participants</span>
                </div>
                <div className="card-metric-badge">
                  <span className="card-metric-val">24 hrs</span>
                  <span className="card-metric-lbl">Non-stop</span>
                </div>
                <div className="card-metric-badge">
                  <span className="card-metric-val">₹60K</span>
                  <span className="card-metric-lbl">Prize Pool</span>
                </div>
                <div className="card-metric-badge">
                  <span className="card-metric-val">100%</span>
                  <span className="card-metric-lbl">Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
