import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>NextGenAiNova | AI Innovation Partner</title>
        <meta name="description" content="NextGenAiNova is your AI innovation partner—delivering expert consulting in AI development, no-code platforms, cloud infrastructure, MLOps, and cybersecurity." />
        <meta property="og:title" content="NextGenAiNova | AI Innovation Partner" />
        <meta property="og:description" content="From prototype to production, we accelerate your journey to intelligent enterprise." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
