import { motion } from "motion/react";
import { Linkedin, Instagram, Github } from "lucide-react";

// Behance icon component
const BehanceIcon = ({ size = 18, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
  >
    <path d="M3 8h4.5a2.5 2.5 0 1 1 0 5H3V8z" />
    <path d="M3 13h5.5a2.5 2.5 0 1 1 0 5H3v-5z" />
    <path d="M14.5 4h5" />
    <circle cx="17" cy="14" r="3.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const menuItems = ["Home", "About", "Work", "Services", "Contact"];
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rusiru-widanapathirana-20282023a/", label: "LinkedIn" },
    { icon: BehanceIcon, href: "https://www.behance.net/rusiruwidanap", label: "Behance" },
    { icon: Instagram, href: "https://www.instagram.com/i.m.rokie/", label: "Instagram" },
    { icon: Github, href: "https://github.com/rusiruwi", label: "GitHub" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--grey-shade-3)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="swiss-container">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Left Section - Logo & Tagline */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "48px",
                  letterSpacing: "0.05em",
                  color: "var(--dark-charcoal)",
                }}
              >
                RusiruWi.
              </h3>

              <p
                className="mb-16"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "var(--dark-shade-3)",
                  maxWidth: "400px",
                }}
              >
                Designing seamless digital experiences with precision, clarity, and purpose.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mx-[0px] my-[30px]">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      border: "1px solid rgba(16, 18, 16, 0.2)",
                      transition: "all 0.3s linear",
                    }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} style={{ color: "var(--dark-charcoal)" }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "20px",
                  letterSpacing: "0.08em",
                  color: "var(--dark-charcoal)",
                }}
              >
                NAVIGATION
              </h4>

              <nav className="space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block swiss-link"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      letterSpacing: "0.02em",
                      color: "var(--dark-shade-3)",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Right Section - Contact */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "20px",
                  letterSpacing: "0.08em",
                  color: "var(--dark-charcoal)",
                }}
              >
                GET IN TOUCH
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:rusiru1wi@gmail.com"
                  className="block swiss-link"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    letterSpacing: "0.02em",
                    color: "var(--dark-shade-3)",
                  }}
                >
                  rusiru1wi@gmail.com
                </a>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    letterSpacing: "0.02em",
                    color: "var(--dark-shade-3)",
                  }}
                >
                  Colombo, Sri Lanka
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Divider */}
          <div
            className="mb-8 h-px"
            style={{ backgroundColor: "rgba(16, 18, 16, 0.15)" }}
          />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                letterSpacing: "0.02em",
                color: "var(--dark-shade-3)",
              }}
            >
              © {currentYear} Rusiru Widanapathirana. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="swiss-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  letterSpacing: "0.02em",
                  color: "var(--dark-shade-3)",
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="swiss-link"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  letterSpacing: "0.02em",
                  color: "var(--dark-shade-3)",
                }}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
