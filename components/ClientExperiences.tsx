import styles from './ClientExperiences.module.css';

const testimonials = [
  {
    stars: 5,
    quote: '"Kripa understood exactly what I needed for my sister\'s sangeet. The fit was so comfortable that I could dance the whole night without worrying about anything. Best designer experience in Pune!"',
    name: 'POOJA DESHMUKH',
    location: 'Client, Pune',
  },
  {
    stars: 5,
    quote: '"My bridal lehenga was crafted to absolute perfection. Kripa took care of the minute details, embroidery placement, and dupatta drape. I felt like royalty on my wedding day."',
    name: 'SIMRAN JAGTIANI',
    location: 'Bridal Client, Mumbai',
  },
  {
    stars: 5,
    quote: '"I brought two of my mother\'s vintage silk sarees to Kripa for upcycling. She transformed one into a gorgeous lehenga and the other into a smart fusion crop jacket set. Exceptional craftsmanship!"',
    name: 'ANANYA KULKARNI',
    location: 'Custom Stitching Client, Pune',
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
