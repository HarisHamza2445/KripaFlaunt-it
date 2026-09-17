import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    image: '/imag5.png',
    plate: 'PLATE NO. 042 // BRIDAL DETAILING',
    location: 'PUNE STUDIO',
  },
  {
    image: '/imag11.png',
    plate: 'PLATE NO. 088 // RECEPTION SILHOUETTE',
    location: 'PUNE STUDIO',
  },
  {
    image: '/imag12.png',
    plate: 'PLATE NO. 091 // SANGEET KALIDAR',
    location: 'PUNE STUDIO',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonialsContent}>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.cardPlate}>
                <span>{item.plate}</span>
                <span>{item.location}</span>
              </div>
              <div className={styles.testimonialImage}>
                <Image
                  src={item.image}
                  alt={item.plate}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <a href="#work" className={styles.btnView}>VIEW OUR WORK</a>
        </div>
      </div>
    </section>
  );
}
