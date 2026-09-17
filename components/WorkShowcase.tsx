import Image from 'next/image';
import styles from './WorkShowcase.module.css';

const spotlightWorks = [
  {
    image: '/img3.png',
    plate: 'PLATE NO. 042 // BRIDAL DETAILING',
    location: 'PUNE STUDIO',
    client: 'Noyonita Lodh',
    title: 'MISS DIVA UNIVERSE / SPECIAL OCCASION STYLING',
    desc: 'Bespoke evening silhouette drafted with precision draping and subtle hand-sewn crystal detailing, celebrated for its sculptural poise.',
    designer: 'DESIGNED & STYLED BY KRIPA HARJWANI',
    alt: 'Bridal Detailing Work',
  },
  {
    image: '/img4.png',
    plate: 'PLATE NO. 088 // RECEPTION SILHOUETTE',
    location: 'PUNE STUDIO',
    client: 'Tanvee Kishore',
    title: 'ACTRESS & PRESENTER / RED CARPET ENSEMBLES',
    desc: 'Contemporary Indo-western gown constructed with structured bodice lines and flowing pastel fabrics, crafted for camera-ready elegance.',
    designer: 'DESIGNED & STYLED BY KRIPA HARJWANI',
    alt: 'Reception Silhouette Work',
  },
  {
    image: '/img5.png',
    plate: 'PLATE NO. 091 // SANGEET KALIDAR',
    location: 'PUNE STUDIO',
    client: 'Purva Shinde',
    title: 'ACTRESS / EVENT APPEARANCE STYLING',
    desc: 'Custom festive ensemble celebrating rich Indian craftsmanship with modern necklines and personalized proportion tailoring.',
    designer: 'DESIGNED & STYLED BY KRIPA HARJWANI',
    alt: 'Sangeet Kalidar Work',
  },
];

const categories = ['BRIDAL', 'FESTIVE', 'WESTERN', 'INDO-WESTERN', 'RUNWAY', 'SELECTED CELEBRITY STYLING'];

export default function WorkShowcase() {
  return (
    <section className={styles.workShowcase}>
      <div className={styles.workShowcaseContent}>
        <div className={styles.header}>
          <div>
            <div className={styles.sectionBadge}>
              <span>FROM RUNWAY TO REAL LIFE</span>
            </div>
            <h2 className={styles.sectionTitle}>Designed to Be Remembered.</h2>
          </div>
          <p className={styles.headerDesc}>
            Explore selected work created for clients, special occasions, runway
            showcases and public appearances.
          </p>
        </div>

        <div className={styles.runwayBanner}>
          <div className={styles.bannerLeft}>
            <span className={styles.bannerStar}>✦</span>
            <span className={styles.bannerLabel}>RUNWAY ACCREDITATION</span>
          </div>
          <h3 className={styles.bannerTitle}>Kripa Harjwani has showcased designs at Pune Fashion Week.</h3>
          <div className={styles.bannerRight}>
            <span>HAUTE RUNWAY EDIT</span>
            <span className={styles.bannerLink}>COUTURE PORTFOLIO</span>
          </div>
        </div>

        <div className={styles.categories}>
          {categories.map((cat, index) => (
            <span key={index} className={styles.categoryTag}>{cat}</span>
          ))}
        </div>

        <div className={styles.spotlightHeader}>
          <span className={styles.spotlightBadge}>SELECTED WORK SPOTLIGHT</span>
          <h3 className={styles.spotlightTitle}>Looks That Step Into The Spotlight</h3>
          <p className={styles.spotlightDesc}>Showcasing styling and design work for public appearances, events, and special occasions.</p>
        </div>

        <div className={styles.spotlightGrid}>
          {spotlightWorks.map((item, index) => (
            <div key={index} className={styles.spotlightCard}>
              <div className={styles.cardPlate}>
                <span>{item.plate}</span>
                <span>{item.location}</span>
              </div>
              <div className={styles.cardImage}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardClient}>{item.client}</span>
                <span className={styles.cardTitle}>{item.title}</span>
                <p className={styles.cardDesc}>{item.desc}</p>
                <span className={styles.cardDesigner}>{item.designer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
