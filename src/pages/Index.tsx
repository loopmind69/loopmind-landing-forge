
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VideoCarousel from '@/components/VideoCarousel';
import PricingSection from '@/components/PricingSection';
import ComingSoon from '@/components/ComingSoon';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoCarousel />
      <PricingSection />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default Index;
