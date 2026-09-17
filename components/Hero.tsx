'use client';

import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            <span>BESPOKE DESIGN &middot; CUSTOM FIT &middot; PERSONAL STYLE</span>
          </div>
          <h1 className={styles.heroTitle}>
            Elegance
            <em>Tailored to You.</em>
          </h1>
          <div className={styles.titleLine} />
          <p className={styles.heroSubtitle}>
            Bespoke outfits crafted around your style, fit, and occasion.
          </p>
          <div className={styles.heroButtons}>
            <a href="#collections" className={styles.btnPrimary}>
              EXPLORE COLLECTIONS <span>&rarr;</span>
            </a>
            <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
              BOOK A CONSULTATION
            </a>
          </div>
          <div className={styles.heroInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>FOUNDER & DESIGNER</span>
              <span className={styles.infoValue}>Kripa Harjwani</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>STUDIO LOCATION</span>
              <span className={styles.infoValue}>Pimple Saudagar, Pune</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>SPECIALITY</span>
              <span className={styles.infoValue}>Custom Stitching & Bridal</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImageCard}>
            <div className={styles.cardHeader}>
              <span>FIGURE SPEC: 01 // BESPOKE COUTURE ARCHIVE</span>
              <span>KRIPA HARJWANI</span>
            </div>
            <div className={styles.cardImageWrap}>
              <div className={styles.cardImage}>
                <Image
                  src="/imag1.png"
                  alt="Bridal Couture - Pink Lehenga with Emerald Jewelry"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span>DESIGNER BOUTIQUE &middot; CUSTOM STITCHING</span>
              <span>PIMPLE SAUDAGAR, PUNE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
