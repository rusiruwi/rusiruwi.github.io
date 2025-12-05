import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";
import "./styles/globals.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Load Fox Bebas and Manrope fonts dynamically
  useEffect(() => {
    const foxBebas = document.createElement("link");
    foxBebas.href = "https://fonts.cdnfonts.com/css/fox-bebas";
    foxBebas.rel = "stylesheet";
    foxBebas.crossOrigin = "anonymous";
    document.head.appendChild(foxBebas);

    const manrope = document.createElement("link");
    manrope.href = "https://fonts.cdnfonts.com/css/manrope";
    manrope.rel = "stylesheet";
    manrope.crossOrigin = "anonymous";
    document.head.appendChild(manrope);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}