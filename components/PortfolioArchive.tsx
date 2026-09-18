'use client';

import styles from './PortfolioArchive.module.css';

export default function PortfolioArchive() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioHeader}>
          <div className={styles.sectionBadge}>
            <span>PORTFOLIO</span>
          </div>
          <h2 className={styles.sectionTitle}>Designed to Be Remembered.</h2>
          <div className={styles.titleLine} />
          <p className={styles.portfolioDesc}>
            Visual archive of bespoke commissions, curated palettes, and custom silhouettes.
          </p>
        </div>

        <div className={styles.portfolioFooter}>
          <a href="/gallery" className={styles.btnCreate}>VIEW GALLERY</a>
          <a href="/colour-studio" className={styles.btnCreate}>CREATE A CUSTOM PALETTE</a>
        </div>
      </div>
    </section>
  );
}
