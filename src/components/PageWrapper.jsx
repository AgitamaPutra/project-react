import { motion } from "framer-motion";
import { pageTransition } from "../utils/animations";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
