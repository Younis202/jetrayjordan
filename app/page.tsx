"use client";

import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { StatsSection } from "@/components/sections/stats-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <StatsSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}