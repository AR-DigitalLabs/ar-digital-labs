import { AudienceSection } from "@/components/audience-section";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ServicesGrid } from "@/components/services-grid";
import { SiteHeader } from "@/components/site-header";
import {
  audiences,
  heroHighlights,
  navigation,
  processSteps,
  serviceCards,
  valuePillars,
} from "@/lib/site-content";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(51,138,255,0.16),_transparent_28%),radial-gradient(circle_at_85%_18%,_rgba(22,208,255,0.18),_transparent_20%),linear-gradient(180deg,_#f8fbff_0%,_#eef3f9_44%,_#ffffff_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:130px_100%] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.8),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#34b8ff]/20 blur-3xl" />

      <SiteHeader navigation={navigation} />

      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-14 pt-6 sm:px-8 lg:px-10">
        <Hero highlights={heroHighlights} />
        <ServicesGrid cards={serviceCards} />
        <AudienceSection audiences={audiences} pillars={valuePillars} />
        <ProcessSection steps={processSteps} />
        <CtaSection />
      </div>
    </main>
  );
}
