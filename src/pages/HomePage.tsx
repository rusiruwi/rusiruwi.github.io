import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ExperienceBadge } from "../components/ExperienceBadge";
import { ClientTrust } from "../components/ClientTrust";
import { WhyChooseMe } from "../components/WhyChooseMe";
import { RecentWork } from "../components/RecentWork";
// import { Testimonial } from "../components/Testimonial";
import { CTASection } from "../components/CTASection";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO
        title="RusiruWi - UI/UX Engineer & Product Designer | Rusiru Widanpathirana"
        description="Rusiru Widanpathirana (RusiruWi) is a UI/UX Engineer and Product Designer based in Sri Lanka, specializing in Swiss-inspired modern design, responsive websites, brand identity, and premium digital experiences."
        keywords="Rusiru Widanpathirana, RusiruWi, UI/UX Designer Sri Lanka, Product Designer Sri Lanka, Web Designer Sri Lanka, UI Engineer, UX Engineer, Swiss Design, Portfolio, Graphic Designer"
      />
      <Hero />
      <Services />
      <ExperienceBadge />
      <ClientTrust />
      <WhyChooseMe />
      <RecentWork />
      {/* <Testimonial /> */}
      <CTASection />
    </>
  );
}