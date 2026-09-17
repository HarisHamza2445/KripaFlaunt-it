import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Collections from '@/components/Collections';
import CustomOrder from '@/components/CustomOrder';
import Heritage from '@/components/Heritage';
import PortfolioArchive from '@/components/PortfolioArchive';
import Experience from '@/components/Experience';
import ClientExperiences from '@/components/ClientExperiences';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Approach />
        <Collections />
        <CustomOrder />
        <Heritage />
        <PortfolioArchive />
        <Experience />
        <ClientExperiences />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
