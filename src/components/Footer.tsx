export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" id="footer">
      <div className="footer-container">
        {/* Left: Brand info */}
        <div className="footer-left">
          <div className="footer-title">CodeFury 9.0</div>
          <p className="footer-association">
            Annual National-Level Hackathon<br />
            Organized by <strong>IEEE UVCE Computer Society</strong><br />
            University of Visvesvaraya College of Engineering, Bengaluru
          </p>
          <p className="footer-credits">
            Developed by the <strong>Software Development SIG, IEEE UVCE</strong>
          </p>
          <div className="footer-dev-links">
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-link"
            >
              Shravya Ganesh Hegde
            </a>
            <span className="footer-dev-separator">&amp;</span>
            <a
              href="https://www.linkedin.com/in/venkateshbiradar/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-link"
            >
              Venkatesh Biradar
            </a>
          </div>
        </div>

        {/* Right: Quick links */}
        <div className="footer-right">
          <div className="footer-links-group">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#prizes">Prize Pool</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#sponsors">Sponsors</a></li>
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/ieee.uvce.cs/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Ieee.uvce.cs" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="mailto:cs.uvce.ieee@gmail.com">
                  Email Us
                </a>
              </li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <span>© {currentYear} IEEE UVCE Computer Society. All rights reserved.</span>
        <span className="footer-bottom-sep">·</span>
        <span>CodeFury 9.0</span>
      </div>
    </footer>
  );
}

export default Footer;
