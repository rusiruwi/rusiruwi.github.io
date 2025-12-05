import { Portfolio } from "../components/Portfolio";
import { SEO } from "../components/SEO";

export function PortfolioPage() {
  return (
    <>
      <SEO
        title="Portfolio - RusiruWi | UI/UX Design & Web Development Projects"
        description="Explore Rusiru Widanpathirana's (RusiruWi) portfolio of UI/UX design, web design, brand identity, and digital product projects. Premium Swiss-inspired design work from Sri Lanka."
        keywords="RusiruWi Portfolio, Rusiru Widanpathirana Projects, UI/UX Design Portfolio, Web Design Projects, Brand Identity Portfolio"
      />
      <Portfolio />
    </>
  );
}