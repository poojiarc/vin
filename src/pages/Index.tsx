import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhatWeDo from "@/components/home/WhatWeDo";

const Index = () => (
  <Layout>
    <HeroSection />
    <AboutPreview />
    <ServicesSection />
    <IndustriesSection />
    <WhyChooseUs />
    <WhatWeDo />
  </Layout>
);

export default Index;
