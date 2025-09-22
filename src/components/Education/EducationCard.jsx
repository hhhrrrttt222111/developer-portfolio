import React, { useContext } from "react";
import { styled } from "@mui/material/styles"; // replaces makeStyles
import { motion } from "framer-motion";

import { ThemeContext } from "../../contexts/ThemeContext";

import eduImgWhite from "../../assets/svg/education/eduImgWhite.svg";
import eduImgBlack from "../../assets/svg/education/eduImgBlack.svg";
import "./Education.css";

// Styled container using theme props
const CardContainer = styled(motion.div)(({ bgColor, hoverColor }) => ({
  borderRadius: "8px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  backgroundColor: bgColor,
  "&:hover": {
    backgroundColor: hoverColor,
  },
}));

function EducationCard({ id, institution, course, startYear, endYear }) {
  const { theme } = useContext(ThemeContext);

  return (
    <CardContainer
      key={id}
      bgColor={theme.primary30}
      hoverColor={theme.primary50}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      className="education-card"
    >
      <div className="educard-img" style={{ backgroundColor: theme.primary }}>
        <img src={theme.type === "light" ? eduImgBlack : eduImgWhite} alt="" />
      </div>
      <div className="education-details">
        <h6 style={{ color: theme.primary }}>
          {startYear}-{endYear}
        </h6>
        <h4 style={{ color: theme.tertiary }}>{course}</h4>
        <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
      </div>
    </CardContainer>
  );
}

export default EducationCard;
