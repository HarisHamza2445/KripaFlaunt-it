'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './work.module.css';

const allWorkItems = [
  {
    image: '/img16.png',
    tag: 'BRIDAL / OCCASION',
    categories: ['BRIDAL', 'OCCASION'],
    title: 'Sangeet Kalidar',
    desc: 'A flowing silhouette designed with delicate detailing and a soft, elegant finish.',
  },
  {
    image: '/img17.png',
    tag: 'BRIDAL / RECEPTION',
    categories: ['BRIDAL'],
    title: 'Reception Silhouette',
    desc: 'A refined evening look combining modern structure with graceful detailing.',
  },
  {
    image: '/img18.png',
    tag: 'OCCASION WEAR',
    categories: ['OCCASION'],
    title: 'Contemporary Fusion',
    desc: 'A modern interpretation of traditional dressing with a clean and effortless feel.',
  },
  {
    image: '/img19.png',
    tag: 'BRIDAL',
    categories: ['BRIDAL'],
    title: 'Bridal Detailing',
    desc: 'Intricate craftsmanship and thoughtful details come together for a timeless bridal look.',
  },
  {
    image: '/img20.png',
    tag: 'BESPOKE EVENING',
    categories: ['BESPOKE'],
    title: 'Royal Sapphire Gown',
    desc: 'Hand-embroidered zardozi flourishes across deep royal jewel tones.',
  },
  {
    image: '/img21.png',
    tag: 'BESPOKE FAMILY',
    categories: ['BESPOKE'],
    title: 'Coordinated Heirloom Pair',
    desc: 'Bespoke coordinated mother and son celebratory ensemble with fine dabka work.',
  },
];

const filters = ['ALL', 'BRIDAL', 'WEDDING', 'OCCASION', 'BESPOKE'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredItems = activeFilter === 'ALL'
    ? allWorkItems
    : allWorkItems.filter(item => item.categories.includes(activeFilter));

  const grid2Items = filteredItems.slice(0, 2);
  const fullItem = filteredItems[2];
  const grid3Items = filteredItems.slice(3);

  return (
    <>
      <Header />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>OUR WORK</span>
            <h1 className={styles.heroTitle}>Made for <em>Meaningful Moments.</em></h1>
            <p className={styles.heroDesc}>
              A curated selection of our bespoke creations, crafted with thoughtful details,<br />
              rich fabrics, and a deeply personal sense of style.
            </p>
          </div>
        </section>

        <section className={styles.heroImage}>
          <div className={styles.heroImageContent}>
            <img src="/img15.png" alt="Our Work" />
          </div>
        </section>

        <section className={styles.filters}>
          <div className={styles.filtersContent}>
            <div className={styles.filterTabs}>
              {filters.map((item) => (
                <button
                  key={item}
                  className={`${styles.filterTab} ${activeFilter === item ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        {grid2Items.length > 0 && (
          <section className={styles.workSection}>
            <div className={styles.workContent}>
              <div className={grid2Items.length === 1 ? styles.workFull : styles.workGrid2}>
                {grid2Items.map((item, index) => (
                  <div key={item.title} className={styles.workCard}>
                    <div className={styles.workImage}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className={styles.workInfo}>
                      <span className={styles.workTag}>{item.tag}</span>
                      <h3 className={styles.workTitle}>{item.title}</h3>
                      <p className={styles.workDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {fullItem && (
          <section className={styles.workSection}>
            <div className={styles.workContent}>
              <div className={styles.workFull}>
                <div className={styles.workFullImage}>
                  <img src={fullItem.image} alt={fullItem.title} loading="lazy" />
                </div>
                <div className={styles.workFullInfo}>
                  <span className={styles.workTag}>{fullItem.tag}</span>
                  <h3 className={styles.workTitle}>{fullItem.title}</h3>
                  <p className={styles.workDesc}>{fullItem.desc}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {grid3Items.length > 0 && (
          <section className={styles.workSection}>
            <div className={styles.workContent}>
              <div className={styles.workGrid3}>
                {grid3Items.map((item) => (
                  <div key={item.title} className={styles.workCard}>
                    <div className={styles.workImage}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <div className={styles.workInfo}>
                      <span className={styles.workTag}>{item.tag}</span>
                      <h3 className={styles.workTitle}>{item.title}</h3>
                      <p className={styles.workDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {filteredItems.length === 0 && (
          <section className={styles.workSection}>
            <div className={styles.workContent}>
              <p className={styles.noResults}>No items found for this category.</p>
            </div>
          </section>
        )}

        <section className={styles.featured}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredLeft}>
              <span className={styles.featuredBadge}>FEATURED</span>
              <h2 className={styles.featuredTitle}>A Closer Look.</h2>
              <p className={styles.featuredDesc}>
                Explore the details, craftsmanship, and design behind one of our signature creations. Every cut, thread, and silhouette is shaped in close dialogue with your vision.
              </p>
            </div>
            <div className={styles.featuredRight}>
              <img src="/img22.png" alt="A Closer Look" loading="lazy" />
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaBadge}>
                <span className={styles.ctaDot} /> READY TO CREATE YOUR LOOK? <span className={styles.ctaSep}>|</span> PIMPLE SAUDAGAR STUDIO, PUNE
              </div>
              <h2 className={styles.ctaTitle}>Begin Your Bespoke <em>Journey.</em></h2>
              <div className={styles.ctaLine} />
              <p className={styles.ctaDesc}>
                Tell us what you have in mind and let&apos;s create an outfit that feels completely yours.
              </p>
              <div className={styles.ctaButtons}>
                <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer" className={styles.btnBook}>BOOK A CONSULTATION &rarr;</a>
                <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27d%20love%20to%20call%20and%20discuss%20a%20bespoke%20consultation." target="_blank" rel="noopener noreferrer" className={styles.btnCall}>CALL THE STUDIO: +91 89757 66683</a>
              </div>
              <div className={styles.ctaFeatures}>
                <span>&middot; INDIVIDUAL BODY ARCHITECTURE</span>
                <span>&middot; PERSONAL FABRIC GUIDANCE</span>
                <span>&middot; DEDICATED TRIAL FITTINGS</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
