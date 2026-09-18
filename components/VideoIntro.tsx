'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VideoIntro.module.css';

export default function VideoIntro() {
  const [phase, setPhase] = useState<'landing' | 'playing' | 'done'>('landing');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPhase('playing');
  };

  useEffect(() => {
    if (phase === 'playing' && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
      document.body.style.overflow = 'hidden';
    }
  }, [phase]);

  const handleEnd = () => {
    document.body.style.overflow = 'auto';
    setPhase('done');
  };

  const handleSkip = () => {
    if (videoRef.current) videoRef.current.pause();
    document.body.style.overflow = 'auto';
    setPhase('done');
  };

  if (phase === 'done') return null;

  return (
    <div className={styles.wrapper}>
      {/* Landing Phase - Play Button */}
      {phase === 'landing' && (
        <div className={styles.landing}>
          <div className={styles.bgImage}>
            <img src="/image 237.png" alt="Kripa Flaunt It" />
          </div>
          <div className={styles.landingOverlay} />
          <div className={styles.landingContent}>
            <div className={styles.brandTop}>KRIPA HARJWANI STUDIO</div>
            <h1 className={styles.heroTitle}>
              Elegance
              <em>Tailored to You.</em>
            </h1>
            <div className={styles.heroLine} />
            <p className={styles.heroDesc}>
              Bespoke outfits crafted around your style, fit, and occasion.
            </p>
            <button className={styles.playBtn} onClick={handlePlay}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              <span>PLAY VIDEO</span>
            </button>
            <button className={styles.skipLink} onClick={handleSkip}>
              ENTER SITE &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Playing Phase - Video */}
      {phase === 'playing' && (
        <div className={styles.videoScreen}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/Video1.mp4"
            playsInline
            onEnded={handleEnd}
          />
          <button className={styles.skipBtn} onClick={handleSkip}>
            ENTER SITE &rarr;
          </button>
          <div className={styles.videoFooter}>
            <span className={styles.footerBrand}>KRIPA</span>
            <span className={styles.footerDot}>&bull;</span>
            <span className={styles.footerTag}>FLAUNT IT</span>
          </div>
        </div>
      )}
    </div>
  );
}
