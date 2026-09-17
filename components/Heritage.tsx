import styles from './Heritage.module.css';

const transformations = [
  {
    num: 'TRANSFORMATION 01',
    tag: 'HERITAGE REVIVAL',
    title: 'Old Saree >> New Lehenga',
    desc: 'Convert a heavy pure Zari bridal or vintage silk saree into a modern flared kalidar lehenga skirt with a contemporary contrasting blouse and light organza dupatta.',
    ideal: 'IDEAL FOR: RECEPTIONS & FAMILY WEDDINGS',
  },
  {
    num: 'TRANSFORMATION 02',
    tag: 'MODERN HEIRLOOM',
    title: 'Heirloom Fabric >> Contemporary Outfit',
    desc: 'Repurpose unpatched vintage brocades, antique borders, or dupatta fabrics into an elegant sharp jacket, tailored trouser set, or high slit cape kurti.',
    ideal: 'IDEAL FOR: COCKTAILS & SANGEET NIGHTS',
  },
  {
    num: 'TRANSFORMATION 03',
    tag: 'FUSION RESTRUCTURING',
    title: 'Existing Garment >> New Silhouette',
    desc: 'Restructure an outdated anarkali or unused festive gown into a chic peplum top with cigarette pants or a contemporary Indo-western co-ord set.',
    ideal: 'IDEAL FOR: FESTIVE DINERS & PUJAS',
  },
];

export default function Heritage() {
  return (
    <section className={styles.heritage}>
      <div className={styles.heritageContent}>
        <div className={styles.header}>
          <div>
            <div className={styles.sectionBadge}>
              <span>REIMAGINE WHAT YOU ALREADY HAVE</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Old Memories.<br />
              <em>New Silhouettes.</em>
            </h2>
            <div className={styles.titleLine} />
          </div>
          <div className={styles.headerRight}>
            <p className={styles.headerDesc}>
              Transform old sarees and family fabrics into fresh, contemporary outfits.
            </p>
            <p className={styles.headerDesc}>
              Preserve the sentimental value of your mother&apos;s or grandmother&apos;s vintage Banarasi,
              Kanjeevaram, or hand-embroidered silks while giving them modern ease and wearable
              flair.
            </p>
          </div>
        </div>

        <div className={styles.transformGrid}>
          {transformations.map((item, index) => (
            <div key={index} className={styles.transformCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNum}>{item.num}</span>
                <span className={styles.cardTag}>{item.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              <span className={styles.cardIdeal}>{item.ideal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
