import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Maximize2, ExternalLink } from "lucide-react";
import { featuredProjects, Project } from "../data/projects";

export function RecentWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <section
        id="work"
        style={{
          backgroundColor: "var(--grey-shade-3)",
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
                backgroundColor: "rgba(16, 18, 16, 0.08)",
                padding: "8px 20px",
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                letterSpacing: "0.15em",
                color: "var(--dark-charcoal)",
              }}
            >
              FEATURED PROJECTS
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
              }}
            >
              My Recent Work
            </motion.h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(16, 18, 16, 0.1)" }}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white cursor-pointer"
                style={{
                  aspectRatio: "16/11",
                }}
                onClick={() => {
                  setSelectedProject(project);
                  setSelectedImageIndex(0);
                }}
              >
                {/* Image */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(180deg, rgba(16, 18, 16, 0) 0%, rgba(16, 18, 16, 0.9) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "32px",
                        letterSpacing: "0.02em",
                        color: "#ffffff",
                      }}
                    >
                      {project.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "14px",
                          letterSpacing: "0.05em",
                          color: "var(--swiss-sage)",
                        }}
                      >
                        {project.tag}
                      </p>

                      <Maximize2
                        size={20}
                        style={{ color: "var(--swiss-sage)" }}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              backgroundColor: "rgba(16, 18, 16, 0.95)",
            }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "2px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10"
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(16, 18, 16, 0.8)",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <X size={20} style={{ color: "#ffffff" }} />
              </motion.button>

              {/* Header */}
              <div
                style={{
                  padding: "60px 60px 40px",
                  borderBottom: "1px solid rgba(16, 18, 16, 0.1)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "rgba(16, 18, 16, 0.06)",
                      padding: "6px 16px",
                      marginBottom: "20px",
                      fontFamily: "var(--font-body)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      color: "var(--dark-charcoal)",
                    }}
                  >
                    {selectedProject.tag}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(32px, 4vw, 56px)",
                      letterSpacing: "0.02em",
                      lineHeight: "1.1",
                      color: "var(--dark-charcoal)",
                      marginBottom: "20px",
                    }}
                  >
                    {selectedProject.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      lineHeight: "1.8",
                      color: "rgba(16, 18, 16, 0.7)",
                      maxWidth: "800px",
                    }}
                  >
                    {selectedProject.description}
                  </p>
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "24px",
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        letterSpacing: "0.05em",
                        color: "var(--dark-charcoal)",
                        textDecoration: "none",
                        paddingBottom: "4px",
                        borderBottom: "1px solid var(--dark-charcoal)",
                      }}
                    >
                      View Live Project
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Images */}
              <div style={{ padding: "40px 60px 60px" }}>
                {selectedProject.images.length > 0 ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    {selectedProject.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        style={{
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: "2px",
                        }}
                      >
                        <img
                          src={image}
                          alt={`${selectedProject.name} - Image ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        borderRadius: "2px",
                      }}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
