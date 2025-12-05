import { motion } from "motion/react";

export function ExperienceBadge() {
  return (
    <section
      style={{
        backgroundColor: "var(--grey-shade-3)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="swiss-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div
            className="inline-block mb-6 px-6 py-3"
            style={{
              border: "1px solid var(--dark-charcoal)",
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.15em",
              color: "var(--dark-charcoal)",
            }}
          >
            EXPERIENCE
          </div>

          <h2
            className="mb-6"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(36px, 5vw, 64px)",
              letterSpacing: "0.03em",
              lineHeight: "1.2",
              color: "var(--dark-charcoal)",
            }}
          >
            3+ Years of Design Experience
          </h2>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "var(--dark-shade-3)",
            }}
          >
            Crafting modern digital experiences with precision and purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}