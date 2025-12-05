import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import signatureImage from "figma:asset/e227d35a9a068abd1f5007e1a4f88ba98f1542f4.png";
import portraitImage from "figma:asset/08c2bda10f5cf3aea10cf73e793575f6194d75c5.png";

export function AboutPage() {
  return (
    <>
      <SEO
        title="About - Rusiru Widanpathirana (RusiruWi) | UI/UX Engineer"
        description="Learn more about Rusiru Widanpathirana (RusiruWi), a UI/UX Engineer and Product Designer from Sri Lanka specializing in Swiss-inspired design and premium digital experiences."
        keywords="About RusiruWi, About Rusiru Widanpathirana, UI/UX Designer Background, Product Designer Sri Lanka"
      />
      <div
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "160px",
          paddingBottom: "160px",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(16, 18, 16, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 18, 16, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            pointerEvents: "none",
            opacity: 0.5,
          }}
        />

        <div className="swiss-container" style={{ position: "relative" }}>
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* Left Column - Photo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 lg:col-span-5"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={portraitImage}
                  alt="Rusiru Widanpathirana Portrait"
                  className="w-full h-auto"
                  style={{
                    display: "block",
                    aspectRatio: "3/4",
                    objectFit: "cover",
                  }}
                />
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#000000",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Text */}
            <div className="col-span-12 lg:col-span-7">
              {/* Thin horizontal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  width: "30%",
                  height: "1px",
                  backgroundColor: "#101210",
                  marginBottom: "24px",
                  transformOrigin: "left",
                }}
              />

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  position: "relative",
                  marginBottom: "48px",
                }}
              >
                {/* Background block */}
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "-20px",
                    width: "calc(100% + 40px)",
                    height: "calc(100% + 24px)",
                    backgroundColor: "rgba(16, 18, 16, 0.06)",
                    zIndex: 0,
                  }}
                />
                <h1
                  style={{
                    fontFamily: "'Fox Bebas', sans-serif",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    letterSpacing: "0.08em",
                    lineHeight: "1.2",
                    color: "#101210",
                    position: "relative",
                    zIndex: 1,
                    padding: "12px 20px",
                  }}
                >
                  ABOUT ME
                </h1>
              </motion.div>

              {/* Body Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#101210",
                }}
              >
                <p style={{ marginBottom: "32px" }}>
                  If you're here, you probably love clean, simple design that actually makes sense and I do too.
                </p>
                <p style={{ marginBottom: "32px" }}>
                  I'm Rusiru, a minimalist web designer who's obsessed with tiny details (the good kind, not the "zoom to 800%" kind… though I've done that too).
                </p>
                <p style={{ marginBottom: "48px" }}>
                  I like keeping things clear, calm, and easy for users because design should feel effortless, not exhausting.
                </p>
              </motion.div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.4 }}
                style={{
                  marginBottom: "48px",
                }}
              >
                <img
                  src={signatureImage}
                  alt="Rusiru Signature"
                  style={{
                    height: "120px",
                    width: "auto",
                    display: "block",
                    filter: "brightness(0) saturate(100%)",
                  }}
                />
              </motion.div>

              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "13px",
                  lineHeight: "1.4",
                  color: "#0c0d0c",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <ContactLink href="mailto:rusiru1wi@gmail.com" text="email" />
                <span style={{ opacity: 0.5 }}>•</span>
                <ContactLink
                  href="https://linkedin.com/in/rusiru-widanapathirana-20282023a/"
                  text="linkedin"
                />
                <span style={{ opacity: 0.5 }}>•</span>
                <ContactLink href="https://behance.net/rusiruwidanap" text="behance" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Contact Link Component with hover effects
function ContactLink({ href, text }: { href: string; text: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -1 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "relative",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      className="contact-link"
    >
      {text}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          bottom: "-2px",
          left: 0,
          right: 0,
          height: "1px",
          backgroundColor: "#101210",
          transformOrigin: "left",
        }}
      />
    </motion.a>
  );
}
