'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './VideoIntro.module.css';

export default function VideoIntro() {
  const [open, setOpen] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open && videoRef.current) {
      videoRef.current.play().catch(() => {});
      document.body.style.overflow = 'hidden';
    }
  }, [open]);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    document.body.style.overflow = 'auto';
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose}>&times;</button>
        <div className={styles.videoContainer}>
          <video
            ref={videoRef}
            className={styles.video}
            src="/Video1.mp4"
            muted
            playsInline
            controls={false}
          />
          <div className={styles.playOverlay} onClick={() => videoRef.current?.play()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
        <div className={styles.footer}>
          <span className={styles.brand}>KRIPA</span>
          <span className={styles.dot}>&bull;</span>
          <span className={styles.tag}>FLAUNT IT</span>
        </div>
      </div>
    </div>
  );
}
