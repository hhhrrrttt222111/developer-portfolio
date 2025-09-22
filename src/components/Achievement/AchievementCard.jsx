import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { AiOutlineFolder } from "react-icons/ai";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./Achievement.css";

// Styled container replacing makeStyles
const CardContainer = styled(motion.div)(({ theme, bgColor, hoverColor }) => ({
  backgroundColor: bgColor,
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: hoverColor,
  },
}));

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  return (
    <CardContainer
      key={id}
      bgColor={theme.primary30}
      hoverColor={theme.primary50}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
      <div className="achievecard-content">
        <div className="achievecard-details1">
          <h2 style={{ color: theme.tertiary }}>{title}</h2>
          <p style={{ color: theme.tertiary80 }}>{details}</p>
        </div>
        <div className="achievecard-details2" style={{ color: theme.primary }}>
          <h5>{date}</h5>
          <div className="achievecard-field">
            <AiOutlineFolder />
            <h5>{field}</h5>
          </div>
        </div>
      </div>
      <div className="achievecard-imgcontainer">
        <img src={image} alt={title} />
      </div>
    </CardContainer>
  );
}

export default AchievementCard;
