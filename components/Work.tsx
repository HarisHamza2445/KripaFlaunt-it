import Image from 'next/image';
import styles from './Work.module.css';

const workItems = [
  {
    image: '/imag2.png',
    tag: 'CUSTOM BRIDAL',
    title: 'Handcrafted Elegance',
    alt: 'Bridal Couture Work',
    large: true,
  },
  {
    image: '/imag5.png',
    tag: 'BRIDAL & FESTIVE',
    title: 'Timeless Beauty',
    alt: 'Bridal Collection Work',
  },
  {
    image: '/imag6.png',
    tag: 'CONTEMPORARY FUSION',
    title: 'Modern Grace',
    alt: 'Fusion Collection Work',
  },
  {
    image: '/imag7.png',
    tag: 'INDIAN WEAR',
    title: 'Traditional Elegance',
    alt: 'Indian Wear Work',
  },
  {
    image: '/imag8.png',
    tag: 'WESTERN WEAR',
    title: 'Sophisticated Style',
    alt: 'Western Wear Work',
  },
];

export default function Work() {
  return (
    <section className={styles.work} id="work">
      <div className={styles.workContent}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgeDot} />
          <span>Portfolio</span>
        </div>
        <h2 className={styles.sectionTitle}>
          Our <em>Featured</em> Work
        </h2>
        <div className={styles.workGallery}>
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.workItem} ${item.large ? styles.large : ''}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.large ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
              />
              <div className={styles.workOverlay}>
                <span className={styles.workTag}>{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
