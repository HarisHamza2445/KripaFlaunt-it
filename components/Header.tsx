'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <span className={styles.brandName}>KRIPA HARJWANI DESIGN STUDIO</span>
          <span className={styles.separator}>//</span>
          <span className={styles.tagline}>CUSTOM STITCHING & BESPOKE COUTURE</span>
          <span className={styles.location}>PIMPLE SAUDAGAR, PUNE</span>
          <span className={styles.appointment}>[ CONSULTATIONS BY APPOINTMENT ]</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="/" className={styles.logo}>
            <img
              src="/Logo.png"
              alt="Kripa Flaunt it"
              style={{ height: '33px', width: 'auto' }}
            />
          </a>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            <a href="/about" className={styles.navLink} onClick={() => setMenuOpen(false)}>ABOUT</a>
            <span className={styles.navSep}>|</span>
            <a href="/work" className={styles.navLink} onClick={() => setMenuOpen(false)}>WORK</a>
            <span className={styles.navSep}>|</span>
            <a href="/designer-gallery" className={styles.navLink} onClick={() => setMenuOpen(false)}>THE DESIGNER</a>
            <span className={styles.navSep}>|</span>
            <a href="/gallery" className={styles.navLink} onClick={() => setMenuOpen(false)}>GALLERY</a>
          </nav>

          <div className={styles.headerRight}>
            <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnContact}>CONTACT</a>
            <div className={styles.phoneSep} />
            <a href="tel:+918975766683" className={styles.phoneIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>

          <button
            className={`${styles.mobileMenuBtn} ${menuOpen ? styles.active : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  );
}
