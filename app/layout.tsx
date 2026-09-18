import type { Metadata } from 'next';
import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import PageLoader from '@/components/PageLoader';
import VideoIntro from '@/components/VideoIntro';

export const metadata: Metadata = {
  title: 'Kripa Flaunt It | Bespoke Couture & Custom Stitching',
  description:
    'Kripa Harjwani Atelier - Bespoke outfits crafted around your style, fit, and occasion. Custom Stitching & Bridal Couture in Pimple Saudagar, Pune.',
  keywords: 'bespoke couture, custom stitching, bridal lehenga, wedding dress, Pune, Kripa Harjwani, Kripa Flaunt It',
  openGraph: {
    title: 'Kripa Flaunt It | Bespoke Couture & Custom Stitching',
    description: 'Bespoke outfits crafted around your style, fit, and occasion. Custom Stitching & Bridal Couture in Pimple Saudagar, Pune.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kripa Flaunt It',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kripa Flaunt It | Bespoke Couture & Custom Stitching',
    description: 'Bespoke outfits crafted around your style, fit, and occasion.',
  },
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <VideoIntro />
        <PageLoader />
        {children}
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
