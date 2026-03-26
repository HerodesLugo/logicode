import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalThreatSection } from "@/components/sections/GlobalThreatSection";
import { PartnersMarquee } from "@/components/sections/PartnersMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WhyCyberscoutSection } from "@/components/sections/WhyCyberscoutSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { CTABannerSection } from "@/components/sections/CTABannerSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { BackToTop } from "@/components/ui/BackToTop";
import { FadeUp } from "@/components/ui/FadeUp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <FadeUp>
          <GlobalThreatSection />
        </FadeUp>
        <FadeUp delay={80}>
          <PartnersMarquee />
        </FadeUp>
        <FadeUp>
          <ServicesSection />
        </FadeUp>
        <FadeUp>
          <SolutionsSection />
        </FadeUp>
        <FadeUp>
          <WhyCyberscoutSection />
        </FadeUp>
        <FadeUp>
          <WorkflowSection />
        </FadeUp>
        <FadeUp>
          <CTABannerSection />
        </FadeUp>
        <FadeUp>
          <UseCasesSection />
        </FadeUp>
        <FadeUp delay={80}>
          <PartnersMarquee />
        </FadeUp>
      </main>
      <FadeUp>
        <Footer />
      </FadeUp>
      <BackToTop />
    </>
  );
}
