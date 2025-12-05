import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--dark-charcoal)",
        paddingTop: "var(--section-spacing)",
        paddingBottom: "var(--section-spacing)",
      }}
    >
      <div className="swiss-container">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(40px, 6vw, 84px)",
              letterSpacing: "0.03em",
              lineHeight: "1.1",
              color: "#ffffff",
            }}
          >
            LET'S BUILD YOUR<br />NEXT BIG IDEA
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px mx-auto mb-10"
            style={{
              backgroundColor: "var(--swiss-sage)",
              width: "80px",
            }}
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 space-y-4"
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(18px, 2vw, 22px)",
                lineHeight: "1.7",
                color: "var(--grey-shade-1)",
              }}
            >
              A well-designed digital experience elevates your brand, enhances credibility,
              and drives real results.
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: "1.7",
                color: "var(--swiss-sage)",
              }}
            >
              Start your next project with a designer who values clarity, precision, and strategy.
            </p>
          </motion.div>

          {/* Free Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={24}
                style={{ color: "var(--swiss-sage)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                }}
              >
                FREE Consultation
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2
                size={24}
                style={{ color: "var(--swiss-sage)" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                }}
              >
                FREE Website UX Audit
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <Link to="/contact">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-block px-12 py-5"
              style={{
                border: "2px solid var(--swiss-sage)",
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                letterSpacing: "0.1em",
                color: "#ffffff",
                backgroundColor: "transparent",
                transition: "all 0.3s linear",
              }}
            >
              HIRE ME
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
