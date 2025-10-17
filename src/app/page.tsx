import AboutSection from "@/components/About";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
