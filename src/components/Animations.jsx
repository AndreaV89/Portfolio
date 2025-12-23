// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const ZoomIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

export const FadeUp = ({ children, delay = 0, distance = 30 }) => (
  <motion.div
    initial={{ y: distance, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, direction = "left", delay = 0 }) => (
  <motion.div
    initial={{ x: direction === "left" ? -50 : 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 70, delay }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, staggerAmount = 0.1 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      visible: { transition: { staggerChildren: staggerAmount } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 50 },
      },
    }}
    style={{ height: "100%" }}
  >
    {children}
  </motion.div>
);
