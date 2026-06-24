import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';

const GALLERY_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];
const AUTO_INTERVAL = 4000;

export function CodeFuryWall() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setCurrent(prev => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [goNext, isPaused]);

  return (
    <section id="wall" className="wall-outer-wrap">
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            CodeFury <span className="wall-heading-accent">Wall</span>
          </h2>
          <div className="heading-underline" />
          <p className="wall-subtitle">Highlights & memories from previous editions</p>
        </motion.div>

        <motion.div
          className="wall-gallery-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main slider viewport */}
          <div className="wall-slider-viewport">
            <div
              className="wall-slider-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {GALLERY_IMAGES.map((src, i) => (
                <div className="wall-slider-slide" key={i}>
                  <img
                    src={src}
                    alt={`CodeFury event photo ${i + 1}`}
                    className="wall-slider-img"
                  />
                </div>
              ))}
            </div>

            {/* Prev / Next arrows */}
            <button
              className="wall-nav-btn wall-nav-prev"
              onClick={goPrev}
              aria-label="Previous photo"
            >
              ‹
            </button>
            <button
              className="wall-nav-btn wall-nav-next"
              onClick={goNext}
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Counter badge */}
            <div className="wall-counter-badge">
              {current + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>

          {/* Dot navigation */}
          <div className="wall-dot-row">
            {GALLERY_IMAGES.map((_, i) => (
              <button
                key={i}
                className={`wall-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to photo ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="wall-thumb-strip">
            {GALLERY_IMAGES.map((src, i) => (
              <button
                key={i}
                className={`wall-thumb ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Photo ${i + 1}`}
              >
                <img src={src} alt={`Thumb ${i + 1}`} />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CodeFuryWall;
