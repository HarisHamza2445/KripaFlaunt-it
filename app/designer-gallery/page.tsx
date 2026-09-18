'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './designer-gallery.module.css';

const categories = ['ALL', 'LONDON FASHION WEEK', 'AWARDS', 'CELEBRITY STYLING', 'OTHER DESIGNERS'];

const images = [
  { src: '/designer-gallery/lfw-1.jpg', alt: 'London Fashion Week 1', category: 'LONDON FASHION WEEK' },
  { src: '/designer-gallery/lfw-2.jpg', alt: 'London Fashion Week 2', category: 'LONDON FASHION WEEK' },
  { src: '/designer-gallery/award-1.jpg', alt: 'Award Ceremony 1', category: 'AWARDS' },
  { src: '/designer-gallery/award-2.jpg', alt: 'Award Ceremony 2', category: 'AWARDS', tall: true },
  { src: '/designer-gallery/award-3.jpg', alt: 'Award Ceremony 3', category: 'AWARDS' },
  { src: '/designer-gallery/designer-1.jpg', alt: 'With Designer 1', category: 'OTHER DESIGNERS' },
  { src: '/designer-gallery/designer-2.jpg', alt: 'With Designer 2', category: 'OTHER DESIGNERS' },
  { src: '/designer-gallery/designer-3.jpg', alt: 'With Designer 3', category: 'OTHER DESIGNERS' },
  { src: '/designer-gallery/designer-4.jpg', alt: 'With Designer 4', category: 'OTHER DESIGNERS' },
  { src: '/designer-gallery/celebrity-1.jpg', alt: 'Celebrity Styling 1', category: 'CELEBRITY STYLING' },
];

export default function DesignerGalleryPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const filtered = activeCategory === 'ALL' ? images : images.filter(img => img.category === activeCategory);

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
  }, [filtered]);

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
      setSelectedImage((prev) => (prev! + 1) % filtered.length);
    } else {
      setSelectedImage((prev) => (prev! - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.galleryPage}>
        <div className={styles.galleryHeader}>
          <div className={styles.badgeRow}>
            <div className={styles.line} />
            <span className={styles.badge}>THE DESIGNER</span>
          </div>
          <h1 className={styles.title}>Kripa Harjwani.</h1>
          <p className={styles.desc}>
            A curated collection of moments from London Fashion Week, award ceremonies, celebrity styling projects, and collaborations with fellow designers.
          </p>
        </div>

        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.masonryGrid}>
          {filtered.map((img, idx) => (
            <div
              key={idx}
              data-index={idx}
              className={`${styles.gridItem} ${visibleImages.includes(idx) ? styles.visible : ''} ${(img as any).tall ? styles.tall : ''}`}
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
            <img src={filtered[selectedImage].src} alt={filtered[selectedImage].alt} />
            <div className={styles.lightboxInfo}>
              <span>{selectedImage + 1} / {filtered.length}</span>
              <span className={styles.lightboxCategory}>{filtered[selectedImage].category}</span>
            </div>
          </div>
          <button className={styles.navBtn} onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>&#8250;</button>
        </div>
      )}

      <Footer />
    </>
  );
}
