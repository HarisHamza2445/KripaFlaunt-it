import styles from './CustomOrder.module.css';

const steps = [
  {
    num: '01',
    title: 'CUSTOM MEASUREMENTS',
    desc: 'In-studio anatomical millimeter precision pattern-drafting that accounts for your unique posture, curves, and ease of wear.',
    step: 'STEP 01: MEASURE & SPECIFY',
  },
  {
    num: '02',
    title: 'FABRIC GUIDANCE',
    desc: 'Bring your own fabric or source through us. Expert advice on falls, weaves, lining thickness, and rich texture pairings.',
    step: 'STEP 02: MATERIAL HARMONY',
  },
  {
    num: '03',
    title: 'PERSONALISED DESIGN',
    desc: 'Direct sketching sessions to customise necklines, sleeves, back drops, flare volume, and handcrafted embroidery placements.',
    step: 'STEP 03: SILHOUETTE CRAFT',
  },
  {
    num: '04',
    title: 'FITTING & FINISHING',
    desc: 'Multiple trial sessions in our Pimple Saudagar studio for immaculate fit, clean internal piping, and flawless edge seams.',
    step: 'STEP 04: TRIAL & FINISH',
  },
];

export default function CustomOrder() {
  return (
    <section className={styles.customOrder}>
      <div className={styles.customOrderContent}>
        <div className={styles.header}>
          <div>
            <div className={styles.sectionBadge}>
              <span>MADE FOR YOUR FIT</span>
            </div>
            <h2 className={styles.sectionTitle}>Tailored Around You.</h2>
          </div>
          <p className={styles.headerDesc}>
            Create an outfit based on your measurements, fabric, preferences
            and desired style.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((item, index) => (
            <div key={index} className={styles.stepCard}>
              <div className={styles.stepNum}>{item.num} //</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
              <span className={styles.stepLabel}>{item.step}</span>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnStart}>START YOUR CUSTOM ORDER</a>
        </div>
      </div>
    </section>
  );
}
