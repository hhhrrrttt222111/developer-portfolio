import { useState, useContext, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="backToTop"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <IoIosArrowDropupCircle
              style={{ fontSize: "3rem", color: theme.tertiary }}
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
