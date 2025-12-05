import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { X, Maximize2, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { projectData, Project } from "../data/projects";

// Project data is now imported from shared file

type CategoryKey = keyof typeof projectData;

export function Portfolio() {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("Web Design & Development");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const portfolioSectionRef = useRef<HTMLElement>(null);

  // Handle category from URL state
  useEffect(() => {
    if (location.state && location.state.category) {
      setActiveFilter(location.state.category as CategoryKey);
    }
  }, [location.state]);

  const handleFilterChange = (category: CategoryKey) => {
    setActiveFilter(category);
    
    // Scroll to the top of the portfolio section
    if (portfolioSectionRef.current) {
      portfolioSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories: CategoryKey[] = [
    "Web Design & Development",
    "UI/UX Design",
    "Social Media Management",
    "Brand Identity Design",
    "Pitch Deck Design",
  ];

  const projects = projectData[activeFilter] || [];
  const hasDetailedView = activeFilter === "UI/UX Design" || activeFilter === "Web Design & Development";
  const useFixedRatio = activeFilter === "UI/UX Design" || activeFilter === "Web Design & Development";

  return (
    <section
      id="portfolio"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "120px",
        paddingBottom: "var(--section-spacing)",
        position: "relative",
        overflow: "hidden",
      }}
      ref={portfolioSectionRef}
    >
      {/* Decorative Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          border: "1px solid rgba(16, 18, 16, 0.06)",
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "-8%",
          width: "500px",
          height: "500px",
          border: "1px solid rgba(195, 201, 188, 0.3)",
          pointerEvents: "none",
        }}
      />

      <div className="swiss-container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
            style={{
              backgroundColor: "rgba(16, 18, 16, 0.06)",
              padding: "10px 24px",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--dark-charcoal)",
            }}
          >
            MY WORK
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(48px, 6vw, 88px)",
              letterSpacing: "0.02em",
              lineHeight: "1",
              color: "var(--dark-charcoal)",
              marginBottom: "32px",
            }}
          >
            PORTFOLIO
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
              maxWidth: "640px",
            }}
          >
            A curated selection of projects showcasing design excellence, 
            strategic thinking, and meticulous attention to detail.
          </motion.p>
        </div>

        {/* Filter Toggles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-20"
          style={{ alignItems: "flex-start" }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleFilterChange(category)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -2 }}
              className="px-7 py-4 border transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                backgroundColor: activeFilter === category ? "var(--dark-charcoal)" : "transparent",
                color: activeFilter === category ? "#ffffff" : "var(--dark-charcoal)",
                borderColor: activeFilter === category ? "var(--dark-charcoal)" : "rgba(16, 18, 16, 0.15)",
                boxShadow: activeFilter === category ? "0 4px 12px rgba(16, 18, 16, 0.15)" : "0 4px 12px rgba(16, 18, 16, 0)",
                whiteSpace: "nowrap",
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}
            >
              <Masonry gutter="32px">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer relative overflow-hidden"
                    style={{ 
                      border: "1px solid rgba(16, 18, 16, 0.08)",
                      boxShadow: "0 2px 8px rgba(16, 18, 16, 0.04)",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => hasDetailedView && setSelectedProject(project)}
                  >
                    {/* Thumbnail with Fixed Aspect Ratio for UI/UX and Web sections */}
                    <div 
                      style={{ 
                        position: "relative",
                        width: "100%",
                        aspectRatio: useFixedRatio ? "4 / 3" : undefined,
                        overflow: "hidden",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="transition-all duration-500 group-hover:scale-110"
                        onError={(e) => {
                          console.error(`Failed to load image: ${project.thumbnail}`, e);
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image: ${project.thumbnail}`);
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          objectFit: useFixedRatio ? "cover" : "contain",
                        }}
                      />
                    </div>

                    {/* Decorative Corner Element */}
                    <div
                      className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderLeft: "1px solid rgba(195, 201, 188, 0.4)",
                        borderBottom: "1px solid rgba(195, 201, 188, 0.4)",
                      }}
                    />

                    {/* Bottom Gradient Overlay - Visible on Hover */}
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(to top, rgba(16, 18, 16, 0.85) 0%, rgba(16, 18, 16, 0.4) 40%, transparent 70%)",
                        pointerEvents: "none",
                      }}
                    >
                      <div style={{ pointerEvents: "auto" }}>
                        {/* Live CTA Button - Only for Web Design & Development section */}
                        {activeFilter === "Web Design & Development" && project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block mb-4 px-5 py-3 transition-all duration-200 hover:shadow-lg hover:bg-gray-900"
                            style={{
                              backgroundColor: "#ffffff",
                              fontFamily: "var(--font-body)",
                              fontSize: "12px",
                              letterSpacing: "0.08em",
                              color: "var(--dark-charcoal)",
                              textTransform: "uppercase",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = "#101210";
                              e.currentTarget.style.color = "#ffffff";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = "#ffffff";
                              e.currentTarget.style.color = "var(--dark-charcoal)";
                            }}
                          >
                            Live →
                          </a>
                        )}

                        <motion.h3
                          className="mb-2"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontSize: "22px",
                            letterSpacing: "0.01em",
                            color: "#ffffff",
                            lineHeight: "1.2",
                          }}
                        >
                          {project.name}
                        </motion.h3>
                        <motion.p
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "11px",
                            letterSpacing: "0.12em",
                            color: "var(--swiss-sage)",
                            textTransform: "uppercase",
                          }}
                        >
                          {project.tag}
                        </motion.p>
                      </div>
                    </div>

                    {/* Expand Icon - Only for UI/UX section */}
                    {activeFilter === "UI/UX Design" && (
                      <div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Maximize2 
                          size={22} 
                          style={{ 
                            color: "#ffffff",
                            strokeWidth: 2,
                            filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5))",
                          }} 
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            style={{ 
              backgroundColor: "rgba(16, 18, 16, 0.94)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white"
              onClick={(e) => e.stopPropagation()}
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(16, 18, 16, 0.2) transparent",
                boxShadow: "0 25px 50px -12px rgba(16, 18, 16, 0.25)",
              }}
            >
              {/* Decorative Header Bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, var(--dark-charcoal) 0%, var(--swiss-sage) 100%)",
                }}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-6 right-6 float-right z-10 p-4 bg-white/90 backdrop-blur-sm border transition-all duration-200 hover:bg-gray-100"
                style={{
                  borderColor: "rgba(16, 18, 16, 0.15)",
                  boxShadow: "0 2px 8px rgba(16, 18, 16, 0.08)",
                }}
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-16 lg:p-20 clear-both">
                {/* Project Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-block mb-12"
                  style={{
                    backgroundColor: "rgba(16, 18, 16, 0.05)",
                    padding: "8px 20px",
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    color: "var(--dark-charcoal)",
                    textTransform: "uppercase",
                  }}
                >
                  {selectedProject.tag}
                </motion.div>

                {/* Project Header */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="mb-24"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(36px, 5vw, 56px)",
                    letterSpacing: "0.01em",
                    color: "var(--dark-charcoal)",
                    lineHeight: "1.1",
                  }}
                >
                  {selectedProject.name}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mb-32"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "17px",
                    lineHeight: "1.8",
                    color: "var(--dark-shade-3)",
                    maxWidth: "800px",
                  }}
                >
                  {selectedProject.description}
                </motion.p>

                {/* Live Site Button for Web Projects */}
                {selectedProject.liveUrl && (
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 border mb-32 transition-all duration-200 hover:bg-gray-900 hover:text-white hover:border-gray-900"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      borderColor: "rgba(16, 18, 16, 0.2)",
                      boxShadow: "0 2px 8px rgba(16, 18, 16, 0.06)",
                    }}
                  >
                    <span>VIEW LIVE SITE</span>
                    <ExternalLink size={16} />
                  </motion.a>
                )}

                {/* Divider */}
                <div
                  className="mb-16"
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(16, 18, 16, 0.15) 0%, rgba(16, 18, 16, 0) 100%)",
                    maxWidth: "400px",
                  }}
                />

                {/* Project Images */}
                <div className="space-y-12">
                  {selectedProject.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      style={{
                        border: "1px solid rgba(16, 18, 16, 0.08)",
                        padding: "12px",
                        backgroundColor: "#fafafa",
                      }}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.name} - Image ${index + 1}`}
                        className="w-full"
                        style={{ 
                          maxWidth: "100%",
                          display: "block",
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
