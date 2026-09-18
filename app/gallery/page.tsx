'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './gallery.module.css';

const images = [
  { src: '/img19.png', alt: 'Gallery 1' },
  { src: '/img20.png', alt: 'Gallery 2' },
  { src: '/img21.png', alt: 'Gallery 3' },
  { src: '/img22.png', alt: 'Gallery 4' },
  { src: '/img23.png', alt: 'Gallery 5' },
  { src: '/img24.png', alt: 'Gallery 6' },
  { src: '/img25.png', alt: 'Gallery 7' },
  { src: '/img26.png', alt: 'Gallery 8' },
  { src: '/img27.png', alt: 'Gallery 9' },
  { src: '/img28.png', alt: 'Gallery 10' },
  { src: '/img29.png', alt: 'Gallery 11' },
  { src: '/img30.png', alt: 'Gallery 12' },
  { src: '/img31.png', alt: 'Gallery 13' },
  { src: '/img32.png', alt: 'Gallery 14' },
  { src: '/img33.png', alt: 'Gallery 15' },
  { src: '/img34.png', alt: 'Gallery 16' },
  { src: '/img35.png', alt: 'Gallery 17' },
  { src: '/img36.png', alt: 'Gallery 18' },
  { src: '/img37.png', alt: 'Gallery 19' },
  { src: '/img38.png', alt: 'Gallery 20' },
  { src: '/img39.png', alt: 'Gallery 21' },
  { src: '/img40.png', alt: 'Gallery 22' },
  { src: '/img41.png', alt: 'Gallery 23' },
  { src: '/img42.png', alt: 'Gallery 24' },
  { src: '/img43.png', alt: 'Gallery 25' },
  { src: '/img44.png', alt: 'Gallery 26' },
  { src: '/img50.jpg', alt: 'Gallery 27' },
  { src: '/img51.jpg', alt: 'Gallery 28' },
  { src: '/img52.jpg', alt: 'Gallery 29' },
  { src: '/img53.jpg', alt: 'Gallery 30' },
  { src: '/img54.jpg', alt: 'Gallery 31' },
  { src: '/img55.jpg', alt: 'Gallery 32' },
  { src: '/img56.jpg', alt: 'Gallery 33' },
  { src: '/img57.jpg', alt: 'Gallery 34' },
  { src: '/img58.jpg', alt: 'Gallery 35' },
  { src: '/img59.jpg', alt: 'Gallery 36' },
  { src: '/img60.jpg', alt: 'Gallery 37' },
  { src: '/img61.jpg', alt: 'Gallery 38' },
  { src: '/img62.jpg', alt: 'Gallery 39' },
  { src: '/img63.jpg', alt: 'Gallery 40' },
  { src: '/img64.jpg', alt: 'Gallery 41' },
  { src: '/img65.jpg', alt: 'Gallery 42' },
  { src: '/img66.jpg', alt: 'Gallery 43' },
  { src: '/img67.jpg', alt: 'Gallery 44' },
  { src: '/img68.jpg', alt: 'Gallery 45' },
  { src: '/img69.jpg', alt: 'Gallery 46' },
  { src: '/img70.jpg', alt: 'Gallery 47' },
  { src: '/img71.jpg', alt: 'Gallery 48' },
  { src: '/img72.jpg', alt: 'Gallery 49' },
  { src: '/img73.jpg', alt: 'Gallery 50' },
  { src: '/img74.jpg', alt: 'Gallery 51' },
  { src: '/img75.jpg', alt: 'Gallery 52' },
  { src: '/img76.jpg', alt: 'Gallery 53' },
  { src: '/img77.jpg', alt: 'Gallery 54' },
  { src: '/img78.jpg', alt: 'Gallery 55' },
  { src: '/img79.jpg', alt: 'Gallery 56' },
  { src: '/img80.jpg', alt: 'Gallery 57' },
  { src: '/img81.jpg', alt: 'Gallery 58' },
  { src: '/img82.jpg', alt: 'Gallery 59' },
  { src: '/img83.jpg', alt: 'Gallery 60' },
  { src: '/img84.jpg', alt: 'Gallery 61' },
  { src: '/img85.jpg', alt: 'Gallery 62' },
  { src: '/img86.jpg', alt: 'Gallery 63' },
  { src: '/img87.jpg', alt: 'Gallery 64' },
  { src: '/img88.jpg', alt: 'Gallery 65' },
  { src: '/img89.jpg', alt: 'Gallery 66' },
  { src: '/img90.jpg', alt: 'Gallery 67' },
  { src: '/img91.jpg', alt: 'Gallery 68' },
  { src: '/img92.jpg', alt: 'Gallery 69' },
  { src: '/img93.jpg', alt: 'Gallery 70' },
  { src: '/img94.jpg', alt: 'Gallery 71' },
  { src: '/img95.jpg', alt: 'Gallery 72' },
  { src: '/img96.jpg', alt: 'Gallery 73' },
  { src: '/img97.jpg', alt: 'Gallery 74' },
  { src: '/img98.jpg', alt: 'Gallery 75' },
  { src: '/img99.jpg', alt: 'Gallery 76' },
  { src: '/img100.jpg', alt: 'Gallery 77' },
  { src: '/img101.jpg', alt: 'Gallery 78' },
  { src: '/img102.jpg', alt: 'Gallery 79' },
  { src: '/img103.jpg', alt: 'Gallery 80' },
  { src: '/img104.jpg', alt: 'Gallery 81' },
  { src: '/img105.jpg', alt: 'Gallery 82' },
  { src: '/img106.jpg', alt: 'Gallery 83' },
  { src: '/img107.jpg', alt: 'Gallery 84' },
  { src: '/img108.jpg', alt: 'Gallery 85' },
  { src: '/img109.jpg', alt: 'Gallery 86' },
  { src: '/img110.jpg', alt: 'Gallery 87' },
  { src: '/img111.jpg', alt: 'Gallery 88' },
  { src: '/img112.jpg', alt: 'Gallery 89' },
  { src: '/img113.jpg', alt: 'Gallery 90' },
  { src: '/img114.jpg', alt: 'Gallery 91' },
  { src: '/img115.jpg', alt: 'Gallery 92' },
  { src: '/img116.jpg', alt: 'Gallery 93' },
  { src: '/img117.jpg', alt: 'Gallery 94' },
  { src: '/img118.jpg', alt: 'Gallery 95' },
  { src: '/img119.jpg', alt: 'Gallery 96' },
  { src: '/img120.jpg', alt: 'Gallery 97' },
  { src: '/img121.jpg', alt: 'Gallery 98' },
  { src: '/img122.jpg', alt: 'Gallery 99' },
  { src: '/img123.jpg', alt: 'Gallery 100' },
  { src: '/img124.jpg', alt: 'Gallery 101' },
  { src: '/img125.jpg', alt: 'Gallery 102' },
  { src: '/img126.jpg', alt: 'Gallery 103' },
  { src: '/img127.jpg', alt: 'Gallery 104' },
  { src: '/img128.jpg', alt: 'Gallery 105' },
  { src: '/img129.jpg', alt: 'Gallery 106' },
  { src: '/img130.jpg', alt: 'Gallery 107' },
  { src: '/img131.jpg', alt: 'Gallery 108' },
  { src: '/img132.jpg', alt: 'Gallery 109' },
  { src: '/img133.jpg', alt: 'Gallery 110' },
  { src: '/img134.jpg', alt: 'Gallery 111' },
  { src: '/img135.jpg', alt: 'Gallery 112' },
  { src: '/img136.jpg', alt: 'Gallery 113' },
  { src: '/img137.jpg', alt: 'Gallery 114' },
  { src: '/img138.jpg', alt: 'Gallery 115' },
  { src: '/img139.jpg', alt: 'Gallery 116' },
  { src: '/img140.jpg', alt: 'Gallery 117' },
  { src: '/img141.jpg', alt: 'Gallery 118' },
  { src: '/img142.jpg', alt: 'Gallery 119' },
  { src: '/img143.jpg', alt: 'Gallery 120' },
  { src: '/img144.jpg', alt: 'Gallery 121' },
  { src: '/img145.jpg', alt: 'Gallery 122' },
  { src: '/img146.jpg', alt: 'Gallery 123' },
  { src: '/img147.jpg', alt: 'Gallery 124' },
  { src: '/img148.jpg', alt: 'Gallery 125' },
  { src: '/img149.jpg', alt: 'Gallery 126' },
  { src: '/img150.jpg', alt: 'Gallery 127' },
  { src: '/img151.jpg', alt: 'Gallery 128' },
  { src: '/img152.jpg', alt: 'Gallery 129' },
  { src: '/img153.jpg', alt: 'Gallery 130' },
  { src: '/img154.jpg', alt: 'Gallery 131' },
  { src: '/img155.jpg', alt: 'Gallery 132' },
  { src: '/img156.jpg', alt: 'Gallery 133' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages((prev) => Array.from(new Set([...prev, index])));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(`.${styles.gridItem}`);
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'next') {
      setSelectedImage((prev) => (prev! + 1) % images.length);
    } else {
      setSelectedImage((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.galleryPage}>
        <div className={styles.galleryHeader}>
          <div className={styles.badgeRow}>
            <div className={styles.line} />
            <span className={styles.badge}>GALLERY</span>
          </div>
          <h1 className={styles.title}>Our <em>Collection.</em></h1>
          <p className={styles.desc}>
            A curated glimpse into the artistry, fabric, and silhouettes that define the Flaunt It atelier.
          </p>
        </div>
        <div className={styles.masonryGrid}>
          {images.map((img, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`${styles.gridItem} ${visibleImages.includes(idx) ? styles.visible : ''}`}
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className={styles.overlay}>
                <span className={styles.overlayIcon}>&#10064;</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {selectedImage !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox}>&times;</button>
          <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>&#8249;</button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedImage].src} alt={images[selectedImage].alt} />
            <div className={styles.lightboxInfo}>
              <span>{selectedImage + 1} / {images.length}</span>
            </div>
          </div>
          <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>&#8250;</button>
        </div>
      )}

      <Footer />
    </>
  );
}
