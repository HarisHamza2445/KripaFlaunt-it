'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './gallery.module.css';

const images = [
  { src: '/img19.png', alt: 'Gallery 1' },
  { src: '/img21.png', alt: 'Gallery 3' },
  { src: '/img22.png', alt: 'Gallery 4' },
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
  { src: '/img51.jpg', alt: 'Gallery 28' },
  { src: '/img54.jpg', alt: 'Gallery 31' },
  { src: '/img56.jpg', alt: 'Gallery 33' },
  { src: '/img57.jpg', alt: 'Gallery 34' },
  { src: '/img59.jpg', alt: 'Gallery 36' },
  { src: '/img60.jpg', alt: 'Gallery 37' },
  { src: '/img62.jpg', alt: 'Gallery 38' },
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
