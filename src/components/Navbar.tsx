import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Services", path: "/#services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="fixed top-6 left-0 right-0 z-50 px-6"
    >
      <div
        className="max-w-[1640px] mx-auto"
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          borderRadius: "16px",
          boxShadow:
            "0 4px 24px rgba(16, 18, 16, 0.08), 0 1px 3px rgba(16, 18, 16, 0.04)",
        }}
      >
        <div className="flex items-center justify-between h-20 px-12">
          {/* Logo */}
          <Link to="/" style={{ margin: 0, padding: 0 }}>
            <motion.div
              className="text-2xl"
              style={{
                fontFamily: "var(--font-heading)",
                margin: 0,
                padding: 0,
                letterSpacing: "0.05em",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              RusiruWi.
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-12">
            {menuItems.map((item, index) => (
              item.name === "Services" ? (
                <a key={item.name} href="#services" onClick={handleServicesClick}>
                  <motion.div
                    className="swiss-link text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.div>
                </a>
              ) : (
                <Link key={item.name} to={item.path}>
                  <motion.div
                    className="swiss-link text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-body)" }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.div
                className="swiss-button inline-block"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Hire Me
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-28 left-6 right-6 z-40 lg:hidden"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "16px",
            boxShadow:
              "0 4px 24px rgba(16, 18, 16, 0.08), 0 1px 3px rgba(16, 18, 16, 0.04)",
          }}
        >
          <div className="py-8 px-8 space-y-6">
            {menuItems.map((item) => (
              item.name === "Services" ? (
                <a
                  key={item.name}
                  href="#services"
                  className="block text-lg tracking-wide"
                  style={{ fontFamily: "var(--font-body)" }}
                  onClick={handleServicesClick}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-lg tracking-wide"
                  style={{ fontFamily: "var(--font-body)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link to="/contact">
              <div
                className="swiss-button inline-block mt-4"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  letterSpacing: "0.05em",
                }}
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}