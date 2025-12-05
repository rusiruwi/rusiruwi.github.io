import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import uiuxImage from "figma:asset/bc8eddde201d70d145014d3ae5ba48a0d754b34d.png";
import webDevImage from "figma:asset/f379e1a5d9c9986982ff41bab6dbdebe0cc004eb.png";
import socialMediaImage from "figma:asset/c0a43be35a9b602d931158741366eabdfe7ac334.png";
import brandIdentityImage from "figma:asset/47bdab47e864248c33649a3751f215351302c817.png";
import pitchDeckImage from "figma:asset/0995e3656d380387067c8f6ac6235fbf76989cc6.png";

const services = [
  {
    title: "UI/UX Design",
    description: "User-centered interfaces designed for clarity, usability, and conversion.",
    image: uiuxImage,
    category: "UI/UX Design",
  },
  {
    title: "Web Design & Development",
    description: "Modern, responsive websites crafted with clean Swiss design standards.",
    image: webDevImage,
    category: "Web Design & Development",
  },
  {
    title: "Social Media Management",
    description: "Grow brand visibility, engagement, and reach through targeted social strategies.",
    image: socialMediaImage,
    category: "Social Media Management",
  },
  {
    title: "Brand Identity & Visual Design",
    description: "Minimal, timeless brand identities and visual systems.",
    image: brandIdentityImage,
    category: "Brand Identity Design",
  },
  {
    title: "Business Pitch Deck & Presentation Design",
    description: "Create clear, impactful pitch decks and presentations that impress and convert.",
    image: pitchDeckImage,
    category: "Pitch Deck Design",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "var(--section-spacing)",
        paddingBottom: "var(--section-spacing)",
      }}
    >
      <div className="swiss-container">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
            style={{
              backgroundColor: "rgba(16, 18, 16, 0.06)",
              padding: "8px 20px",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              color: "var(--dark-charcoal)",
            }}
          >
            MY SERVICES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 5vw, 72px)",
              letterSpacing: "0.03em",
              lineHeight: "1.1",
              color: "var(--dark-charcoal)",
              marginBottom: "24px",
            }}
          >
            UI/UX Designer • Web Designer<br />Product Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "var(--dark-shade-3)",
              maxWidth: "680px",
            }}
          >
            I create strategically crafted digital experiences backed by strong UX,
            editorial-level precision, and modern design principles.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(16, 18, 16, 0.1)" }}>
          {services.map((service, index) => {
            const isDarkCard = service.title === "Web Design & Development";
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer overflow-hidden"
                style={{
                  transition: "all 0.3s linear",
                  backgroundColor: isDarkCard ? "var(--dark-charcoal)" : "#ffffff",
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Image Section */}
                  {service.image && (
                    <div 
                      className="w-full h-64 bg-gray-100"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  )}

                  {/* Content Section */}
                  <div className="p-10 flex flex-col flex-grow">
                    <h3
                      className="mb-4"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "28px",
                        letterSpacing: "0.02em",
                        lineHeight: "1.2",
                        color: isDarkCard ? "#ffffff" : "var(--dark-charcoal)",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="mb-16 flex-grow"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        lineHeight: "1.7",
                        color: isDarkCard ? "var(--swiss-sage)" : "var(--dark-shade-3)",
                      }}
                    >
                      {service.description}
                    </p>

                    <Link
                      to="/portfolio"
                      state={{ category: service.category }}
                      className="inline-flex items-center gap-2 text-sm mt-8"
                      style={{
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.05em",
                        color: isDarkCard ? "#ffffff" : "var(--dark-charcoal)",
                      }}
                    >
                      <span className={isDarkCard ? "swiss-link-light" : "swiss-link"}>View More</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
          {/* Empty placeholder for 6th grid position */}
          <div className="hidden lg:block" style={{ backgroundColor: "#ffffff" }} />
        </div>
      </div>
    </section>
  );
}