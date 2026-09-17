import styles from './Features.module.css';

const features = [
  {
    num: '01',
    title: 'CUSTOM DESIGN',
    desc: 'Personalised designs created around your style, occasion, and vision.',
  },
  {
    num: '02',
    title: 'PERFECT FIT',
    desc: 'Made-to-measure stitching for comfortable, polished silhouettes.',
  },
  {
    num: '03',
    title: 'HERITAGE REIMAGINED',
    desc: 'Old sarees and special fabrics transformed into something new to flaunt.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContent}>
        {features.map((item, index) => (
          <div key={index} className={styles.featureItem}>
            <span className={styles.featureNum}>{item.num}</span>
            <div className={styles.featureText}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
