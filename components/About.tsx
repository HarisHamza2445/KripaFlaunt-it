import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContent}>
        <div className={styles.aboutLeft}>
          <div className={styles.founderCard}>
            <div className={styles.cardLabel}>
              <span>ATELIER DIRECTIVE // THE FOUNDER</span>
            </div>
            <div className={styles.founderImage}>
              <Image
                src="/img1.png"
                alt="Kripa Harjwani - Founder & Creative Director"
                width={600}
                height={800}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.founderInfo}>
              <h3 className={styles.founderName}>Kripa Harjwani</h3>
              <p className={styles.founderTitle}>FOUNDER & CREATIVE DIRECTOR</p>
              <p className={styles.founderLocation}>KRIPA, FLAUNT IT. &middot; PIMPLE SAUDAGAR, PUNE</p>
            </div>
          </div>
        </div>

        <div className={styles.aboutRight}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeDot} />
            <span>ABOUT KRIPA, FLAUNT IT.</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Fashion Made <em>Personal.</em>
          </h2>
          <div className={styles.titleLine} />
          <p className={styles.aboutText}>
            <strong>Kripa, flaunt it.</strong> is a designer boutique and custom-stitching studio by
            fashion designer Kripa Harjwani, creating personalised outfits with a focus
            on style, fit and occasion.
          </p>
          <p className={styles.aboutText}>
            From bridal and festive looks to western and Indo-western outfits, every
            piece is developed with attention to silhouette, fabric, detailing and
            comfort. Whether you arrive with a family heirloom, an inspirational sketch,
            or seek a complete couture ensemble from scratch, our atelier turns your
            vision into a garment you can flaunt with confidence.
          </p>
          <div className={styles.aboutCards}>
            <div className={styles.aboutCard}>
              <h4>STUDIO ESSENCE</h4>
              <p>Flawless cuts sculpted around real, diverse body profiles.</p>
            </div>
            <div className={styles.aboutCard}>
              <h4>LOCAL CRAFTSMANSHIP</h4>
              <p>Dedicated master tailors & hand-embroidery karigars in Pune.</p>
            </div>
          </div>
          <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnMeet}>MEET KRIPA</a>
        </div>
      </div>
    </section>
  );
}
