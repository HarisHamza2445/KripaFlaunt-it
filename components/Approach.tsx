import styles from './Approach.module.css';

const principles = [
  {
    num: '01',
    title: 'PERSONAL STYLING',
    desc: 'Collaborative styling consultations tailored to your posture, skin tone, and occasion vibe.',
  },
  {
    num: '02',
    title: 'CUSTOM FIT',
    desc: 'Anatomical precision measurements ensuring ease, movement, and effortless grace.',
  },
  {
    num: '03',
    title: 'INDIVIDUAL DESIGN',
    desc: 'One-of-a-kind patterns drafted uniquely for you; never mass-produced or templated.',
  },
  {
    num: '04',
    title: 'OCCASION WEAR',
    desc: 'Thoughtfully conceived ensembles for sangeet, cocktail, weddings, red carpet, or intimate gatherings.',
  },
];

export default function Approach() {
  return (
    <section className={styles.approach}>
      <div className={styles.approachContent}>
        <div className={styles.approachHeader}>
          <div>
            <div className={styles.sectionBadge}>
              <span>THE KRIPA APPROACH</span>
            </div>
            <h2 className={styles.sectionTitle}>Your Style, Your Fit.</h2>
          </div>
          <p className={styles.approachDesc}>
            Fashion should feel like an extension of who you are. Kripa works
            closely with clients to understand their style, occasion and
            preferences before creating a look that feels personal.
          </p>
        </div>

        <div className={styles.approachGrid}>
          <div className={styles.approachLeft}>
            <div className={styles.imageCard}>
              <div className={styles.imageLabel}>
                <span className={styles.labelDot} />
                <span>ATELIER PROTOCOL // HAND-TAILORED CUTS</span>
              </div>
              <div className={styles.approachImage}>
                <img
                  src="/img2.png"
                  alt="Hand-Tailored Cuts - Atelier Protocol"
                  loading="lazy"
                />
              </div>
              <div className={styles.imageFooter}>
                <span>SIGNATURE TOUCHPOINTS:</span>
                <span>PURE SILK</span>
                <span>ORGANZA</span>
                <span>TISSUE</span>
                <span>RAW GEORGETTE</span>
                <span>STUDIO TRIAL MASTERY</span>
              </div>
            </div>
          </div>

          <div className={styles.approachRight}>
            <div className={styles.sectionBadge}>
              <span>CORE PRINCIPLES</span>
            </div>
            <h3 className={styles.principlesTitle}>
              Thoughtful Tailoring for Real Life Celebrations
            </h3>
            <div className={styles.principlesList}>
              {principles.map((item, index) => (
                <div key={index} className={styles.principleItem}>
                  <div className={styles.principleHeader}>
                    <span className={styles.principleNum}>{item.num} //</span>
                    <span className={styles.principleTitle}>{item.title}</span>
                  </div>
                  <p className={styles.principleDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
