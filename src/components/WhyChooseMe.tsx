import { motion } from "motion/react";
import { Target, Grid3x3, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: Target,
    title: "Precision-Driven UI/UX",
    description: "Every pixel matters. User-centered design with strategic thinking.",
  },
  {
    icon: Grid3x3,
    title: "Pixel-Perfect Swiss Layouts",
    description: "Clean grids, perfect alignment, and functional clarity.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Focused Design",
    description: "Beautiful design that drives results and achieves business goals.",
  },
  {
    icon: Zap,
    title: "Fast Delivery & Clear Communication",
    description: "Transparent process, timely delivery, and responsive collaboration.",
  },
];

export function WhyChooseMe() {
  return (
    <section
      style={{
        backgroundColor: "var(--dark-charcoal)",
        paddingTop: "var(--section-spacing)",
        paddingBottom: "var(--section-spacing)",
      }}
    >
      <div className="swiss-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div
                className="inline-block mb-6 px-4 py-2"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  color: "var(--swiss-sage)",
                }}
              >
                WHY CHOOSE ME
              </div>

              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  letterSpacing: "0.03em",
                  lineHeight: "1.1",
                  color: "#ffffff",
                }}
              >
                Why Work<br />With Me?
              </h2>

              <div
                className="mb-8"
                style={{
                  width: "60px",
                  height: "1px",
                  backgroundColor: "var(--swiss-sage)",
                }}
              />

              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "20px",
                  lineHeight: "1.6",
                  color: "#ffffff",
                }}
              >
                I don't just design interfaces —
              </p>

              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "var(--grey-shade-1)",
                }}
              >
                I create digital experiences that feel natural, purposeful, and memorable.
              </p>
            </motion.div>

            <Link to="/about">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className="inline-block px-8 py-4 mt-8"
                style={{
                  border: "1px solid var(--swiss-sage)",
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  color: "#ffffff",
                  transition: "all 0.3s linear",
                }}
              >
                ABOUT ME
              </motion.div>
            </Link>
          </div>

          {/* Right Content - Features Grid */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex gap-6 p-6"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.3s linear",
                }}
              >
                <div className="flex-shrink-0">
                  <reason.icon
                    size={32}
                    style={{ color: "var(--swiss-sage)" }}
                  />
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "22px",
                      letterSpacing: "0.02em",
                      color: "#ffffff",
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      lineHeight: "1.6",
                      color: "var(--grey-shade-1)",
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
