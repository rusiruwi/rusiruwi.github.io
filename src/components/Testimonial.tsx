import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "var(--section-spacing)",
        paddingBottom: "var(--section-spacing)",
      }}
    >
      <div className="swiss-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div
              className="inline-block mb-8 px-4 py-2"
              style={{
                backgroundColor: "rgba(16, 18, 16, 0.06)",
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "var(--dark-charcoal)",
              }}
            >
              TESTIMONIAL
            </div>

            <h2
              className="mb-12"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "0.03em",
                lineHeight: "1.2",
                color: "var(--dark-charcoal)",
              }}
            >
              What Clients Say
            </h2>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 md:p-16"
            style={{
              border: "1px solid rgba(16, 18, 16, 0.1)",
              backgroundColor: "rgba(242, 243, 240, 0.5)",
            }}
          >
            {/* Quote Icon */}
            <div className="mb-8">
              <Quote
                size={48}
                style={{ color: "var(--dark-charcoal)", opacity: 0.15 }}
              />
            </div>

            {/* Quote Text */}
            <blockquote
              className="mb-10"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(18px, 2vw, 24px)",
                lineHeight: "1.7",
                color: "var(--dark-charcoal)",
              }}
            >
              "Rusiru combines exceptional design quality with professionalism and speed.
              His UI/UX work elevated our brand and delivered exactly what we needed."
            </blockquote>

            {/* Divider */}
            <div
              className="mb-6"
              style={{
                width: "60px",
                height: "1px",
                backgroundColor: "var(--dark-charcoal)",
              }}
            />

            {/* Author */}
            <div>
              <p
                className="mb-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "20px",
                  letterSpacing: "0.02em",
                  color: "var(--dark-charcoal)",
                }}
              >
                Mirsab Mizra
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.03em",
                  color: "var(--dark-shade-3)",
                }}
              >
                Manager Digital Marketing, AceCom
              </p>
            </div>

            {/* Decorative Element */}
            <div
              className="absolute top-8 right-8 w-20 h-20 opacity-5"
              style={{
                border: "1px solid var(--dark-charcoal)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
