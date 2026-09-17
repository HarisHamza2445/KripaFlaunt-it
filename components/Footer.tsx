import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <a href="/" className={styles.logo}>
              <img
                src="/Logo.png"
                alt="Kripa Flaunt it"
                style={{ height: '28px', width: 'auto' }}
              />
            </a>
            <p className={styles.brandDesc}>
              Designer boutique and custom-stitching studio creating
              personalised Indian, western and Indo-western outfits in Pimple
              Saudagar, Pune.
            </p>
            <div className={styles.studioAddress}>
              <h4>STUDIO ADDRESS</h4>
              <p>3RD FLOOR, VARDANA PLAZA, OPPOSITE PARK ROYAL SOCIETY,
              AKASH GANGA ROAD, KOKANE CHOWK, PIMPLE SAUDAGAR, PUNE,
              MAHARASHTRA 411027</p>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerCol}>
              <h4>NAVIGATION</h4>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/#collections">Collections</a>
              <a href="/work">Work</a>
              <a href="https://wa.me/918975766683?text=Hello%20Kripa%20Flaunt%20It!%20I%27m%20interested%20in%20booking%20a%20bespoke%20consultation.%20I%27d%20love%20to%20discuss%20my%20requirements." target="_blank" rel="noopener noreferrer">Contact</a>
            </div>
            <div className={styles.footerCol}>
              <h4>STUDIO SERVICES</h4>
              <a href="#">Custom Stitching & Tailoring</a>
              <a href="#">Bridal & Festive Lehengas</a>
              <a href="#">Saree Upcycling & Redesign</a>
              <a href="#">Western Gowns & Co-ord Sets</a>
              <a href="#">Celebrity & Event Styling</a>
            </div>
            <div className={styles.footerCol}>
              <h4>DIRECT INQUIRIES</h4>
              <a href="tel:+918975766683" className={styles.phoneLink}>+91 89757 66683</a>
              <p className={styles.addressLink}>Pimple Saudagar, Pune, Maharashtra</p>
              <h4 className={styles.socialTitle}>CONNECT ON SOCIAL</h4>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com/kripaflauntit" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  <span>INSTAGRAM</span>
                </a>
                <a href="https://facebook.com/kripaflauntit" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  <span>FACEBOOK</span>
                </a>
                <a href="https://pinterest.com/kripaflauntit" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.9 6.44 9.34-.09-.78-.17-1.99.04-2.84.18-.78 1.2-5.1 1.2-5.1s-.31-.61-.31-1.51c0-1.42.82-2.48 1.84-2.48.87 0 1.29.65 1.29 1.43 0 .87-.56 2.18-.84 3.39-.24 1.01.5 1.83 1.49 1.83 1.79 0 3.17-1.89 3.17-4.61 0-2.41-1.73-4.1-4.21-4.1-2.87 0-4.55 2.15-4.55 4.37 0 .87.33 1.79.75 2.3.08.1.09.19.07.29l-.28 1.13c-.04.19-.15.23-.35.14-1.31-.61-2.13-2.53-2.13-4.07 0-3.32 2.41-6.37 6.94-6.37 3.65 0 6.48 2.6 6.48 6.07 0 3.62-2.28 6.53-5.45 6.53-1.07 0-2.07-.55-2.41-1.21l-.66 2.5c-.24.92-.88 2.08-1.32 2.79.99.31 2.04.47 3.13.47 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
                  <span>PINTEREST</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 KRIPA, FLAUNT IT. ALL RIGHTS RESERVED &middot; PIMPLE SAUDAGAR, PUNE</p>
          <div className={styles.footerBottomLinks}>
            <span>CUSTOM FIT GUARANTEE</span>
            <span className={styles.dot}>&middot;</span>
            <span>STUDIO FAQ</span>
            <span className={styles.dot}>&middot;</span>
            <span>VISIT STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
