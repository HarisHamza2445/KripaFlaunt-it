import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaBadge}>
            <span className={styles.badgeDot} />
            <span>READY TO CREATE YOUR LOOK?</span>
            <span className={styles.separator}>|</span>
            <span>PIMPLE SAUDAGAR STUDIO, PUNE</span>
          </div>
          <h2 className={styles.ctaTitle}>
            Begin Your Bespoke <em>Journey.</em>
          </h2>
          <div className={styles.titleLine} />
          <p className={styles.ctaDesc}>
            Tell us what you have in mind and let&apos;s create an outfit that feels completely
            yours.
          </p>
          <div className={styles.ctaButtons}>
            <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnBook}>BOOK A CONSULTATION &rarr;</a>
            <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27d%20love%20to%20call%20and%20discuss%20a%20bespoke%20consultation." target="_blank" rel="noopener noreferrer" className={styles.btnCall}>CALL THE STUDIO: +91 89757 66683</a>
          </div>
          <div className={styles.ctaFeatures}>
            <span>&middot; INDIVIDUAL BODY ARCHITECTURE</span>
            <span>&middot; PERSONAL FABRIC GUIDANCE</span>
            <span>&middot; DEDICATED TRIAL FITTINGS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
