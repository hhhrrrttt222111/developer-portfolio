import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import { ThemeContext } from "../../contexts/ThemeContext";

import expImgWhite from "../../assets/svg/experience/expImgWhite.svg";
import expImgBlack from "../../assets/svg/experience/expImgBlack.svg";
import "./Experience.css";

const Card = styled(motion.div)(({ bgColor, hoverColor }) => ({
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  backgroundColor: bgColor,
  "&:hover": { backgroundColor: hoverColor },
}));

function ExperienceCard({ id, company, jobtitle, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      bgColor={theme.primary30}
      hoverColor={theme.primary50}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      className="experience-card"
    >
      <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
        <img src={theme.type === "light" ? expImgBlack : expImgWhite} alt="" />
      </div>
      <div className="experience-details">
        <h6 style={{ color: theme.primary }}>
          {startYear}-{endYear}
        </h6>
        <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
        <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
      </div>
    </Card>
  );
}

export default ExperienceCard;
