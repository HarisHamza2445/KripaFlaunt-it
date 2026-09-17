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
