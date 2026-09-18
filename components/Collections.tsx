import styles from './Collections.module.css';

const collections = [
  {
    num: '01',
    image: '/img3.png',
    title: 'Bridal & Festive Wear',
    desc: 'Custom lehengas, sarees, suits, kurtis and complete bridal looks designed around your occasion.',
    alt: 'Bridal & Festive Wear Collection',
  },
  {
    num: '02',
    image: '/img4.png',
    title: 'Contemporary Fusion',
    desc: 'Sculpted sharp-shoulder tuxedo jacket embroidered in rose-gold thread, paired with fluid petal drape pants.',
    alt: 'Contemporary Fusion Collection',
  },
  {
    num: '03',
    image: '/img5.png',
    title: 'Indian Wear',
    desc: 'Traditional and contemporary sarees, lehengas, salwar suits, kurtis and festive outfits.',
    alt: 'Indian Wear Collection',
  },
  {
    num: '04',
    image: '/img6.png',
    title: 'Western Wear',
    desc: 'One-piece dresses, gowns, skirts, crop-top sets and tailored formal looks.',
    alt: 'Western Wear Collection',
  },
  {
    num: '05',
    image: '/img7.png',
    title: 'Indo-Western',
    desc: 'Contemporary silhouettes that bring Indian detailing together with modern styling.',
    alt: 'Indo-Western Collection',
  },
  {
    num: '06',
    image: '/img8.png',
    title: 'Custom Stitching',
    desc: 'Made-to-measure tailoring for designer blouses, suits, and ensembles crafted to your precise posture.',
    alt: 'Custom Stitching Collection',
  },
];

export default function Collections() {
  return (
    <section className={styles.collections} id="collections">
      <div className={styles.collectionsContent}>
        <div className={styles.collectionsHeader}>
          <div className={styles.sectionBadge}>
            <span>EXPLORE THE COLLECTIONS</span>
          </div>
          <h2 className={styles.sectionTitle}>The Curated Edit</h2>
          <div className={styles.titleLine} />
          <p className={styles.collectionsDesc}>
            From timeless Indian silhouettes to contemporary western looks, discover pieces created for
            celebrations, occasions and everyday expression.
          </p>
        </div>

        <div className={styles.collectionsGrid}>
          {collections.map((item, index) => (
            <div key={index} className={styles.collectionCard}>
              <div className={styles.collectionImage}>
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                />
                <div className={styles.collectionTag}>
                  <span>{item.num} &middot; {item.title.toUpperCase()}</span>
                </div>
              </div>
              <div className={styles.collectionInfo}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className={styles.collectionActions}>
                  <span className={styles.customOrder}>CUSTOM ORDER</span>
                  <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20custom%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.inquire}>INQUIRE &rarr;</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.collectionsFooter}>
          <a href="/work" className={styles.viewAll}>VIEW ALL COLLECTIONS</a>
        </div>
      </div>
    </section>
  );
}
