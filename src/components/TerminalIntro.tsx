import { useEffect, useState } from 'react';

interface TerminalIntroProps {
  onComplete: () => void;
}

export function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');
  const [statusVisible, setStatusVisible] = useState(false);
  const [line4, setLine4] = useState('');
  const [isFading, setIsFading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prompt = isMobile ? '[visitor@cf9 %' : '[visitor@codefury-9.0 Desktop %';

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = 'hidden';

    // Sequence of typing text:
    const txt1 = 'initializing_codefury_9.0';
    const txt2 = 'loading_tracks...';
    const txt3 = 'registration_status:';
    const txt4 = 'boot_sequence: SUCCESS';

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;

    // Timer variables
    let t1: any;
    let t2: any;
    let t3: any;
    let t4: any;
    let tEnd: any;
    let tFinal: any;

    // Type line 1
    const typeLine1 = () => {
      if (index1 < txt1.length) {
        setLine1((prev) => prev + txt1.charAt(index1));
        index1++;
        t1 = setTimeout(typeLine1, 60); // 60ms per character
      } else {
        // Line 1 finished, wait 400ms, then start Line 2
        t2 = setTimeout(typeLine2, 400);
      }
    };

    // Type line 2
    const typeLine2 = () => {
      if (index2 < txt2.length) {
        setLine2((prev) => prev + txt2.charAt(index2));
        index2++;
        t2 = setTimeout(typeLine2, 65); // 65ms per character
      } else {
        // Line 2 finished, wait 450ms, then start Line 3
        t3 = setTimeout(typeLine3, 450);
      }
    };

    // Type line 3 (excluding the status part)
    const typeLine3 = () => {
      if (index3 < txt3.length) {
        setLine3((prev) => prev + txt3.charAt(index3));
        index3++;
        t3 = setTimeout(typeLine3, 55); // 55ms per character
      } else {
        // Line 3 prefix finished, reveal the "OPEN" badge with a small delay
        t3 = setTimeout(() => {
          setStatusVisible(true);
          // Wait 500ms, then start Line 4
          t4 = setTimeout(typeLine4, 500);
        }, 300);
      }
    };

    // Type line 4
    const typeLine4 = () => {
      if (index4 < txt4.length) {
        setLine4((prev) => prev + txt4.charAt(index4));
        index4++;
        t4 = setTimeout(typeLine4, 50); // 50ms per character
      } else {
        // All typing finished! Wait 1200ms, then fade out
        tEnd = setTimeout(() => {
          setIsFading(true);
          // Wait 600ms for transition duration, then call onComplete
          tFinal = setTimeout(onComplete, 600);
        }, 1200);
      }
    };

    // Start the typing process
    t1 = setTimeout(typeLine1, 500); // initial delay before boot starts

    return () => {
      // Clean up timers
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tEnd);
      clearTimeout(tFinal);
      // Restore scroll in case component unmounts early
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(onComplete, 300); // faster dismissal on skip
  };

  return (
    <div className={`terminal-loader-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* macOS Header Bar */}
      <div className="mac-terminal-header">
        <div className="mac-window-controls">
          <span className="mac-dot red" onClick={handleSkip}></span>
          <span className="mac-dot yellow"></span>
          <span className="mac-dot green"></span>
        </div>
        <div className="mac-terminal-title">
          <span>📁</span> CODEFURY_9.0
        </div>
        <button className="mac-terminal-skip" onClick={handleSkip}>
          [SKIP]
        </button>
      </div>

      {/* MacBook Console Body */}
      <div className="mac-terminal-body">
        {/* Line 1 */}
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-text">{line1}</span>
          {line1 !== '' && !line2 && <span className="terminal-cursor"></span>}
        </div>

        {/* Line 2 */}
        {line2 !== '' && (
          <div className="terminal-line">
            <span className="terminal-prompt">{prompt}</span>
            <span className="terminal-text">{line2}</span>
            {!line3 && <span className="terminal-cursor"></span>}
          </div>
        )}

        {/* Line 3 */}
        {line3 !== '' && (
          <div className="terminal-line">
            <span className="terminal-prompt">{prompt}</span>
            <span className="terminal-text">{line3}</span>
            {statusVisible && (
              <span className="terminal-text-status-open"> OPEN</span>
            )}
            {statusVisible && !line4 && <span className="terminal-cursor"></span>}
          </div>
        )}

        {/* Line 4 */}
        {line4 !== '' && (
          <div className="terminal-line">
            <span className="terminal-prompt">{prompt}</span>
            <span className="terminal-text">{line4}</span>
            <span className="terminal-cursor"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TerminalIntro;
