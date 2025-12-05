import { motion } from "motion/react";
import showcaseImage from "figma:asset/5845dd1059a93db371cc33f96e9a22823da0e181.png";

export function ClientTrust() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundImage: `url(${showcaseImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
        width: "100%",
      }}
    />
  );
}
