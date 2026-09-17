'use client';

import { useState, useEffect } from 'react';
import styles from './PageLoader.module.css';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.content}>
        <span className={styles.brand}>KRIPA</span>
        <span className={styles.sub}>FLAUNT IT</span>
        <div className={styles.bar}>
          <div className={styles.progress} />
        </div>
      </div>
    </div>
  );
}
