import { motion } from "motion/react";
import { SEO } from "../components/SEO";

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Services - RusiruWi | UI/UX Design & Web Development Services"
        description="Professional UI/UX design, web design & development, brand identity, social media management, and pitch deck design services by Rusiru Widanpathirana (RusiruWi) in Sri Lanka."
        keywords="UI/UX Design Services, Web Design Services Sri Lanka, Brand Identity Design, Product Design Services, RusiruWi Services"
      />
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "var(--section-spacing)",
          minHeight: "100vh",
        }}
      >
        <div className="swiss-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
            style={{
              backgroundColor: "rgba(16, 18, 16, 0.06)",
              padding: "10px 24px",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--dark-charcoal)",
              display: "inline-block",
            }}
          >
            WHAT I DO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(48px, 6vw, 88px)",
              letterSpacing: "0.02em",
              lineHeight: "1",
              color: "var(--dark-charcoal)",
              marginBottom: "32px",
            }}
          >
            SERVICES PAGE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "var(--dark-shade-3)",
              maxWidth: "640px",
            }}
          >
            This page is coming soon. Check back later for detailed information about the services offered.
          </motion.p>
        </div>
      </div>
    </>
  );
}