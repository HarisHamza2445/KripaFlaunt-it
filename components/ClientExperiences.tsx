import styles from './ClientExperiences.module.css';

const testimonials = [
  {
    stars: 5,
    quote: '"It gives a mesmerizing feeling when you enter the boutique. Every piece is designed with details and equally good staff. Owner Kripa attended me and mom personally, suggesting what suits my personality. I ended up buying 3 dresses and almost spent 2 hours there. Great going!"',
    name: 'RADHIKA VJ',
    location: 'Boutique Client, Pune',
  },
  {
    stars: 5,
    quote: '"I am a huge fan of Kripa ma\'ams work. I bought a kurti which perfectly suited the occasion and my budget too. I always recommend her to my friends."',
    name: 'PRATIKSHA YADAV',
    location: 'Client, Pune',
  },
  {
    stars: 5,
    quote: '"Beautiful collection and bought 4 dresses with good discount. Kripa ma\'am attended us personally and made sure all fittings were perfect."',
    name: 'ASHUTOSH PATIL',
    location: 'Client, Pune',
  },
];

export default function ClientExperiences() {
  return (
    <section className={styles.clientExperiences}>
      <div className={styles.clientExperiencesContent}>
        <div className={styles.header}>
          <div className={styles.sectionBadge}>
            <span>CLIENT EXPERIENCES</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Made For You. <em>Loved By You.</em>
          </h2>
          <div className={styles.titleLine} />
          <p className={styles.headerDesc}>
            Real voices of clients who trusted Kripa with their special occasions and custom wardrobe pieces.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.clientInfo}>
                <span className={styles.clientName}>{item.name}</span>
                <span className={styles.clientLocation}>{item.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
