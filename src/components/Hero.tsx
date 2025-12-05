import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "figma:asset/74b597eb5439ecf47263763135da7b9e5b041893.png";

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Convert to Sri Lankan time (UTC+5:30)
      const sriLankaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Colombo" }));
      const hours = sriLankaTime.getHours();
      const minutes = String(sriLankaTime.getMinutes()).padStart(2, "0");
      const seconds = String(sriLankaTime.getSeconds()).padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = String(hours % 12 || 12).padStart(2, "0");
      setTime(`${displayHours}:${minutes}:${seconds} ${period}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: "var(--dark-charcoal)",
        paddingTop: "140px",
        paddingBottom: "var(--vertical-padding)",
      }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Portfolio showcase"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="w-full h-full object-cover"
        />
        
        {/* Multi-layer gradient overlay for better content readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, rgba(16, 18, 16, 0.92) 0%, rgba(16, 18, 16, 0.75) 40%, rgba(16, 18, 16, 0.85) 100%),
              linear-gradient(180deg, rgba(16, 18, 16, 0.4) 0%, rgba(16, 18, 16, 0.9) 100%)
            `,
          }}
        />
        
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-px h-96 bg-white/10"
          animate={{ rotate: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-96 h-px bg-white/10"
          animate={{ rotate: [0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10" style={{ paddingLeft: "var(--side-padding)", paddingRight: "var(--side-padding)", maxWidth: "100%", width: "100%", marginTop: "80px" }}>
        {/* Location and Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            letterSpacing: "0.05em",
            color: "var(--swiss-sage)",
          }}
        >
          Based in Sri Lanka → {time && (
            <span 
              style={{ 
                fontFamily: "monospace",
                color: "#ffffff",
                letterSpacing: "0.1em",
              }}
            >
              {time}
            </span>
          )}
        </motion.div>

        {/* Divider Line - Full Width */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="h-px mb-12"
          style={{ backgroundColor: "var(--swiss-sage)" }}
        />

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(48px, 7vw, 88px)",
            letterSpacing: "0.02em",
            lineHeight: "1.15",
            color: "#ffffff",
            marginBottom: 0,
          }}
        >
          Hi, this is Rusiru.
        </motion.h1>

        {/* Available for Work Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 inline-flex items-center gap-2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "#ffffff",
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span 
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: "#4ade80" }}
            />
            <span 
              className="relative inline-flex rounded-full h-2.5 w-2.5"
              style={{ backgroundColor: "#22c55e" }}
            />
          </span>
          AVAILABLE FOR WORK
        </motion.div>

        {/* Info Container */}
        <div style={{ marginTop: "80px" }}>
          {/* Current Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-6"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "var(--grey-shade-1)",
            }}
          >
            <span style={{ color: "var(--swiss-sage)" }}>Currently →</span>{" "}
            <span style={{ color: "#ffffff" }}>UI/UX Engineer | Web Developer @ CoGenius</span>
          </motion.div>

          {/* Previous Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-6"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "var(--grey-shade-1)",
            }}
          >
            <span style={{ color: "var(--swiss-sage)" }}>Previously →</span>{" "}
            <span style={{ color: "#ffffff" }}>AVIDA • RoboticGen</span>
          </motion.div>

          {/* Delivering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mb-12"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "var(--grey-shade-1)",
            }}
          >
            <span style={{ color: "var(--swiss-sage)" }}>Delivering →</span>{" "}
            <span style={{ color: "#ffffff" }}>Smiles ☻</span>
          </motion.div>

          {/* CTA Button */}
          <Link to="/portfolio">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-8 py-4 group"
              style={{
                border: "1px solid var(--swiss-sage)",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                color: "#ffffff",
                transition: "all 0.3s linear",
              }}
            >
              VIEW MY WORK
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
