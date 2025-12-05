import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { SEO } from "../components/SEO";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const [quoteForm, setQuoteForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    projectType: "",
    timeline: "",
    budget: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzngnbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: quoteForm.firstName,
          lastName: quoteForm.lastName,
          email: quoteForm.email,
          mobile: quoteForm.mobile,
          projectType: quoteForm.projectType,
          timeline: quoteForm.timeline,
          budget: quoteForm.budget,
          description: quoteForm.description,
          _subject: `New Quote Request from ${quoteForm.firstName} ${quoteForm.lastName}`,
        }),
      });

      if (response.ok) {
        toast.success("Quote request sent successfully! I'll get back to you within 24 hours.");
        // Reset form
        setQuoteForm({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          projectType: "",
          timeline: "",
          budget: "",
          description: "",
        });
      } else {
        toast.error("Failed to send quote request. Please try again or email me directly.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send quote request. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact - RusiruWi | Get in Touch with Rusiru Widanpathirana"
        description="Contact Rusiru Widanpathirana (RusiruWi) for UI/UX design, web development, and product design projects. Based in Sri Lanka, available for freelance and contract work."
        keywords="Contact RusiruWi, Contact Rusiru Widanpathirana, Hire UI/UX Designer, Freelance Designer Sri Lanka"
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
      >
        <div className="swiss-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
            style={{
              backgroundColor: "rgba(16, 18, 16, 0.06)",
              padding: "10px 24px",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--dark-charcoal)",
              display: "inline-block",
            }}
          >
            GET IN TOUCH
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            LET'S WORK TOGETHER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "var(--dark-shade-3)",
              maxWidth: "640px",
            }}
          >
            Ready to bring your vision to life? Share your project details and I'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section - Two Column Layout */}
      <section
        style={{
          backgroundColor: "#101210",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div className="swiss-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Quote Form (7-8 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-7"
            >
              {/* Decorative Rectangle Behind Heading */}
              <div className="relative mb-12">
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "-20px",
                    width: "120px",
                    height: "80px",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    zIndex: 0,
                  }}
                />
                <h2
                  className="relative"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(32px, 4vw, 48px)",
                    letterSpacing: "0.02em",
                    lineHeight: "1.1",
                    color: "#ffffff",
                    marginBottom: "20px",
                  }}
                >
                  REACH OUT FOR A CUSTOM WEBSITE QUOTE
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "16px",
                    lineHeight: "1.7",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Fill out the details below to help me understand your project better. The more information you provide, the more accurate the quote.
                </p>
              </div>

              <form onSubmit={handleQuoteSubmit} className="space-y-8">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <label
                      htmlFor="firstName"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "12px",
                      }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={quoteForm.firstName}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, firstName: e.target.value })
                      }
                      placeholder="John"
                      required
                      style={{
                        width: "100%",
                        padding: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "2px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                  >
                    <label
                      htmlFor="lastName"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-body)",
                        fontSize: "13px",
                        letterSpacing: "0.05em",
                        color: "rgba(255, 255, 255, 0.8)",
                        marginBottom: "12px",
                      }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={quoteForm.lastName}
                      onChange={(e) =>
                        setQuoteForm({ ...quoteForm, lastName: e.target.value })
                      }
                      placeholder="Doe"
                      required
                      style={{
                        width: "100%",
                        padding: "16px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "2px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        color: "#ffffff",
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </motion.div>
                </div>

                {/* Email Address */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={quoteForm.email}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, email: e.target.value })
                    }
                    placeholder="john.doe@example.com"
                    required
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Mobile (WhatsApp) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.55 }}
                >
                  <label
                    htmlFor="mobile"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    Mobile (WhatsApp) <span style={{ opacity: 0.5 }}>(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    value={quoteForm.mobile}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, mobile: e.target.value })
                    }
                    placeholder="+94 XX XXX XXXX"
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Project Type */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <label
                    htmlFor="projectType"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    What type of project do you need?
                  </label>
                  <input
                    type="text"
                    id="projectType"
                    value={quoteForm.projectType}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, projectType: e.target.value })
                    }
                    placeholder="e.g., Website Design, Mobile App, Brand Identity"
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.65 }}
                >
                  <label
                    htmlFor="timeline"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    What's your desired timeline?
                  </label>
                  <input
                    type="text"
                    id="timeline"
                    value={quoteForm.timeline}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, timeline: e.target.value })
                    }
                    placeholder="e.g., 2-4 weeks, 1-2 months"
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Budget */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <label
                    htmlFor="budget"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    What's your estimated budget range?
                  </label>
                  <input
                    type="text"
                    id="budget"
                    value={quoteForm.budget}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, budget: e.target.value })
                    }
                    placeholder="e.g., $5,000 - $10,000"
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.75 }}
                >
                  <label
                    htmlFor="description"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "12px",
                    }}
                  >
                    Briefly describe your project
                  </label>
                  <textarea
                    id="description"
                    value={quoteForm.description}
                    onChange={(e) =>
                      setQuoteForm({ ...quoteForm, description: e.target.value })
                    }
                    placeholder="Tell me about your project, business, or idea..."
                    rows={6}
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "2px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#ffffff",
                      transition: "all 0.3s ease",
                      resize: "vertical",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                  type="submit"
                  whileHover={{ y: -1 }}
                  style={{
                    padding: "18px 48px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "2px",
                    backgroundColor: "transparent",
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(255, 255, 255, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Get a Quote
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Direct Contact Info Only (4-5 columns) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-5"
            >
              {/* Direct Contact Info */}
              <div
                style={{
                  padding: "40px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "2px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(24px, 3vw, 32px)",
                    letterSpacing: "0.03em",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  OR REACH ME DIRECTLY
                </h3>

                {/* Email */}
                <a
                  href="mailto:rusiru1wi@gmail.com"
                  className="flex items-center gap-3 mb-5 group"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.85)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                    className="group-hover:border-white"
                  >
                    <Mail size={16} />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    rusiru1wi@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+94781291149"
                  className="flex items-center gap-3 group"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.85)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                      color: "rgba(255, 255, 255, 0.85)",
                    }}
                    className="group-hover:border-white"
                  >
                    <Phone size={16} />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    +94 78 129 1149
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}