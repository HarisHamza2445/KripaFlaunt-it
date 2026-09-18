import Header from '@/components/Header';
import VideoIntro from '@/components/VideoIntro';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Approach from '@/components/Approach';
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
      <VideoIntro />
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Approach />
        <PortfolioArchive />
        <CustomOrder />
        <Heritage />
        <Experience />
        <ClientExperiences />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
