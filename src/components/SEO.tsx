import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export function SEO({
  title = "RusiruWi - UI/UX Engineer & Product Designer | Sri Lanka",
  description = "Rusiru Widanpathirana (RusiruWi) is a UI/UX Engineer and Product Designer based in Sri Lanka, specializing in Swiss-inspired modern design, responsive websites, and premium digital experiences.",
  keywords = "Rusiru Widanpathirana, RusiruWi, UI/UX Designer Sri Lanka, Product Designer Sri Lanka, Web Designer Sri Lanka, UI Engineer, UX Engineer, Swiss Design, Portfolio, Graphic Designer Sri Lanka",
  ogImage = "https://rusiruwi.com/og-image.jpg",
  canonicalUrl,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://rusiruwi.com${location.pathname}`;

  // Structured data for JSON-LD
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rusiru Widanpathirana",
    alternateName: "RusiruWi",
    url: "https://rusiruwi.com",
    image: ogImage,
    jobTitle: "UI/UX Engineer & Product Designer",
    description:
      "UI/UX Engineer and Product Designer specializing in Swiss-inspired modern design, responsive websites, and premium digital experiences.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressLocality: "Sri Lanka",
    },
    sameAs: [
      "https://www.linkedin.com/in/rusiruwi",
      "https://www.behance.net/rusiruwi",
      "https://dribbble.com/rusiruwi",
      "https://github.com/rusiruwi",
      "https://twitter.com/rusiruwi",
    ],
    knowsAbout: [
      "UI/UX Design",
      "Product Design",
      "Web Design",
      "Web Development",
      "Swiss Design",
      "Brand Identity",
      "Visual Design",
      "User Experience",
      "User Interface",
      "Responsive Design",
      "Frontend Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University Name",
    },
    worksFor: {
      "@type": "Organization",
      name: "RusiruWi Design Studio",
    },
  };

  useEffect(() => {
    // Set document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Primary Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Rusiru Widanpathirana");
    
    // Google Site Verification
    updateMetaTag("google-site-verification", "Ug0YHVJIHE_aDx_ZQGUpeMf75fF6Rz-n50NclBmiYfY");

    // Open Graph
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:site_name", "RusiruWi Portfolio", true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:url", currentUrl, true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);
    updateMetaTag("twitter:image", ogImage, true);
    updateMetaTag("twitter:creator", "@rusiruwi", true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Structured Data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, ogImage, currentUrl, structuredData]);

  return null;
}