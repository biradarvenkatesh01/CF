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

  const prompt = isMobile ? '[visitor@cf9 %]' : '[visitor@codefury-9.0 %]';

  useEffect(() => {
    // Prevent scrolling while intro is active
    document.body.style.overflow = 'hidden';

    // Sequence of typing text
    const txt1 = 'initializing_codefury_9.0';
    const txt2 = 'loading_tracks...';
    const txt3 = 'registration_status:';
    const txt4 = 'boot_sequence: SUCCESS';

    let active = true;

    const runAnimation = async () => {
      const delay = (ms: number) =>
        new Promise<void>((resolve) => {
          if (!active) return;
          setTimeout(resolve, ms);
        });

      // Start after initial delay
      await delay(400);

      // Type line 1
      for (let i = 1; i <= txt1.length; i++) {
        if (!active) return;
        setLine1(txt1.slice(0, i));
        await delay(55);
      }

      await delay(350);

      // Type line 2
      for (let i = 1; i <= txt2.length; i++) {
        if (!active) return;
        setLine2(txt2.slice(0, i));
        await delay(55);
      }

      await delay(350);

      // Type line 3
      for (let i = 1; i <= txt3.length; i++) {
        if (!active) return;
        setLine3(txt3.slice(0, i));
        await delay(50);
      }

      await delay(250);
      if (!active) return;
      setStatusVisible(true);

      await delay(450);

      // Type line 4
      for (let i = 1; i <= txt4.length; i++) {
        if (!active) return;
        setLine4(txt4.slice(0, i));
        await delay(45);
      }

      await delay(1000);
      if (!active) return;
      setIsFading(true);

      await delay(500);
      if (active) {
        onComplete();
      }
    };

    runAnimation();

    return () => {
      active = false;
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(onComplete, 250);
  };

  return (
    <div className={`terminal-loader-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* macOS Header Bar */}
      <div className="mac-terminal-header">
        <div className="mac-window-controls">
          <span className="mac-dot red" onClick={handleSkip} style={{ cursor: 'pointer' }}></span>
          <span className="mac-dot yellow"></span>
          <span className="mac-dot green"></span>
        </div>
        <div className="mac-terminal-title">
          <span>📁</span> CODEFURY_9.0 — bash
        </div>
        <button className="mac-terminal-skip" onClick={handleSkip}>
          [SKIP]
        </button>
      </div>

      {/* Terminal Body */}
      <div className="mac-terminal-body">
        {/* Line 1 */}
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          <span className="terminal-text">&nbsp;{line1}</span>
          {!line2 && <span className="terminal-cursor"></span>}
        </div>

        {/* Line 2 */}
        {line2 !== '' && (
          <div className="terminal-line">
            <span className="terminal-prompt">{prompt}</span>
            <span className="terminal-text">&nbsp;{line2}</span>
            {!line3 && <span className="terminal-cursor"></span>}
          </div>
        )}

        {/* Line 3 */}
        {line3 !== '' && (
          <div className="terminal-line">
            <span className="terminal-prompt">{prompt}</span>
            <span className="terminal-text">&nbsp;{line3}</span>
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
            <span className="terminal-text">&nbsp;{line4}</span>
            <span className="terminal-cursor"></span>
          </div>
        )}
      </div>
    </div>
  );
}

export default TerminalIntro;
