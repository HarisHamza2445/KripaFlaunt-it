import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
        background: '#FFF8F6E5',
      }}>
        <span style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '10px',
          letterSpacing: '2.5px',
          color: '#824F41',
          display: 'block',
          marginBottom: '16px',
        }}>PAGE NOT FOUND</span>
        <h1 style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '72px',
          fontWeight: 400,
          color: '#2d2420',
          lineHeight: 1.1,
          marginBottom: '8px',
        }}>404</h1>
        <p style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '28px',
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#824F41',
          marginBottom: '20px',
        }}>This page has wandered off.</p>
        <p style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '14px',
          color: '#6b6b6b',
          marginBottom: '36px',
          maxWidth: '400px',
          lineHeight: 1.7,
        }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to discovering beautiful couture.
        </p>
        <div style={{ display: 'flex', gap: '14px' }}>
          <Link href="/" style={{
            display: 'inline-block',
            background: '#2d2420',
            color: '#fff',
            padding: '16px 36px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '2.5px',
            textDecoration: 'none',
          }}>BACK TO HOME</Link>
          <Link href="/work" style={{
            display: 'inline-block',
            background: 'transparent',
            color: '#2d2420',
            padding: '16px 36px',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '2px',
            border: '1px solid #2d2420',
            textDecoration: 'none',
          }}>VIEW OUR WORK</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
