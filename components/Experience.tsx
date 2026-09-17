import styles from './Experience.module.css';

const stages = [
  {
    num: '01',
    title: 'CONSULT',
    desc: 'Tell us about your vision, style, occasion, and requirements. We clarify budget, timelines, and silhouette goals.',
    step: 'STAGE 01 // IN-PERSON OR CALL',
  },
  {
    num: '02',
    title: 'DESIGN',
    desc: 'Discuss silhouettes, fabric swatches, colours, and embellishment placements. We finalize the creative design sketch.',
    step: 'STAGE 02 // CREATIVE BLUEPRINT',
  },
  {
    num: '03',
    title: 'STYLE',
    desc: 'Harmonize the entire ensemble with curated color accents, dupattas, jewelry pairings, and drape styling nuances.',
    step: 'STAGE 03 // STYLING & ACCENTS',
  },
  {
    num: '04',
    title: 'FIT',
    desc: 'Precision basted fittings and measurements ensure immaculate drape, comfort, structure, and movement perfection.',
    step: 'STAGE 04 // STUDIO TRIAL',
  },
  {
    num: '05',
    title: 'FLAUNT',
    desc: 'Receive your finished outfit, hand-steamed and flawless for your occasion. Step out confident and ready to flaunt it!',
    step: 'STAGE 05 // READY TO WEAR',
  },
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.experienceContent}>
        <div className={styles.header}>
          <div>
            <div className={styles.sectionBadge}>
              <span>THE KRIPA EXPERIENCE</span>
            </div>
            <h2 className={styles.sectionTitle}>From Idea to Outfit.</h2>
          </div>
          <p className={styles.headerDesc}>
            A seamless, enjoyable 4-step boutique experience ensuring you
            feel heard, fitted, and confident at every stage.
          </p>
        </div>

        <div className={styles.stagesGrid}>
          {stages.map((item, index) => (
            <div key={index} className={styles.stageCard}>
              <div className={styles.stageNum}>{item.num} //</div>
              <h3 className={styles.stageTitle}>{item.title}</h3>
              <p className={styles.stageDesc}>{item.desc}</p>
              <span className={styles.stageLabel}>{item.step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
