import styles from './PortfolioArchive.module.css';

const portfolioItems = [
  {
    image: '/img7.png',
    title: 'Mother & Son Coordinated Set',
    palette: 'BLUSH & ROSE-GOLD',
    tag: '',
  },
  {
    image: '/img8.png',
    title: 'Deep Wine Velvet Couture',
    palette: 'CRIMSON & WINE',
    tag: '',
  },
  {
    image: '/img9.png',
    title: 'Emerald & Gold Gala Outfit',
    palette: 'EMERALD & SAPPHIRE',
    tag: '',
  },
  {
    image: '/img10.png',
    title: 'Blush Bridal Lehenga',
    palette: 'IVORY & ANTIQUE GOLD',
    tag: '',
  },
  {
    image: '/img11.png',
    title: 'Rose Gold Cocktail Gown',
    palette: 'BLUSH & ROSE-GOLD',
    tag: 'WESTERN & COCKTAIL',
  },
  {
    image: '/img12.png',
    title: 'Indo-Western Cape Set',
    palette: 'ANTIQUE GOLD & IVORY',
    tag: 'INDO-WESTERN FUSION',
  },
];

const occasions = ['ALL WORKS', 'BRIDAL & HERITAGE', 'MOTHER & SON', 'COCKTAIL & INDO-WESTERN', 'CELEBRITY & RUNWAY'];
const palettes = [
  { name: 'ALL COLOURS', color: '' },
  { name: 'BLUSH & ROSE-GOLD', color: '#d4a5a5' },
  { name: 'CRIMSON & WINE', color: '#8b2252' },
  { name: 'EMERALD & SAPPHIRE', color: '#2e8b57' },
  { name: 'IVORY & ANTIQUE GOLD', color: '#c9a96e' },
  { name: 'MIDNIGHT & NAVY', color: '#1a1a2e' },
  { name: 'MUSTARD & HALDI GOLD', color: '#c9a96e' },
];
const palettes2 = [
  { name: 'PLUM & AUBERGINE', color: '#5d3a6e' },
  { name: 'PASTEL MINT & SAGE', color: '#9db4a0' },
  { name: 'METALLIC CHAMPAGNE & SILVER', color: '#c0c0c0' },
  { name: 'CUSTOM PALETTE / DYE TO MATCH', color: '', isCustom: true },
];

export default function PortfolioArchive() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioHeader}>
          <div className={styles.sectionBadge}>
            <span>PORTFOLIO ARCHIVE // CRAFTED COMMISSIONS</span>
          </div>
          <h2 className={styles.sectionTitle}>Designed to Be Remembered.</h2>
          <div className={styles.titleLine} />
          <p className={styles.portfolioDesc}>
            Visual archive of bespoke commissions, curated palettes, and custom silhouettes.
          </p>
        </div>

        <div className={styles.filters}>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>OCCASION:</span>
            {occasions.map((item, i) => (
              <button key={i} className={`${styles.filterTag} ${i === 0 ? styles.filterActive : ''}`}>
                {item}
              </button>
            ))}
          </div>
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>PALETTE:</span>
            {palettes.map((item, i) => (
              <button key={i} className={`${styles.filterTag} ${i === 0 ? styles.filterActive : ''}`}>
                {item.color && <span className={styles.filterDot} style={{ background: item.color }} />}
                {item.name}
              </button>
            ))}
          </div>
          <div className={styles.filterRow}>
            {palettes2.map((item, i) => (
              <button key={i} className={`${styles.filterTag} ${item.isCustom ? styles.filterCustom : ''}`}>
                {item.color && <span className={styles.filterDot} style={{ background: item.color }} />}
                {item.isCustom && '+ '}{item.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={styles.portfolioCard}>
              <div className={styles.portfolioImage}>
                <img src={item.image} alt={item.title} loading="lazy" />
                {item.tag && (
                  <div className={styles.portfolioTag}>
                    <span>{item.tag}</span>
                  </div>
                )}
              </div>
              <div className={styles.portfolioInfo}>
                <div>
                  <h3>{item.title}</h3>
                  <span className={styles.portfolioPalette}>{item.palette}</span>
                </div>
                <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.inquire}>INQUIRE &rarr;</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.portfolioFooter}>
          <a href="/colour-studio" className={styles.btnCreate}>CREATE A CUSTOM PALLATE</a>
        </div>
      </div>
    </section>
  );
}
