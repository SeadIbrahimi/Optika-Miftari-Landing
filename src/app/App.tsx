import { Navigation } from '@/app/components/Navigation';
import { HeroSection } from '@/app/components/HeroSection';
import { ProductShowcase } from '@/app/components/ProductShowcase';
import { ServicesSection } from '@/app/components/ServicesSection';
import { AboutSection } from '@/app/components/AboutSection';
import { VideoPresentation } from '@/app/components/VideoPresentation';
import { TechnologySection } from '@/app/components/TechnologySection';
import { CollaborationSection } from '@/app/components/CollaborationSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <ServicesSection />
      <AboutSection />
      <VideoPresentation />
      <TechnologySection />
      <CollaborationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
