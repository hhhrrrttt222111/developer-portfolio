import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./SingleService.css";

function SingleService({ id, title, icon }) {
  const { theme } = useContext(ThemeContext);

  // Framer Motion animation variant for bottom-up fade
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      key={id}
      className="single-service"
      style={{ backgroundColor: theme.primary400 }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="service-content" style={{ color: theme.tertiary }}>
        <i className="service-icon">{icon}</i>
        <h4 style={{ color: theme.tertiary }}>{title}</h4>
      </div>
    </motion.div>
  );
}

export default SingleService;
