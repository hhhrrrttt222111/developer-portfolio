import React from "react";
import { styled } from "@mui/material/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

// Styled button
const IconButton = styled("a")(({ themeColor, themeBg }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: 50,
  border: `2px solid ${themeColor}`,
  color: themeColor,
  transition: "all 0.2s",
  "&:hover": {
    backgroundColor: themeBg,
    color: themeColor,
    transform: "scale(1.1)",
    border: `2px solid ${themeBg}`,
  },
}));

const Icon = styled("span")({
  fontSize: "1.1rem",
  transition: "all 0.2s",
});

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const projectId = name.replace(/\s+/g, "-").toLowerCase();

  return (
    <motion.div
      key={id}
      className="singleProject"
      style={{ backgroundColor: theme.primary400 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projectContent">
        <h2 id={projectId} style={{ color: theme.tertiary }}>
          {name}
        </h2>
        <img src={image ? image : placeholder} alt={name} />
        <div className="project--showcaseBtn">
          <IconButton
            href={demo}
            target="_blank"
            rel="noreferrer"
            themeColor={theme.tertiary}
            themeBg={theme.secondary}
            aria-labelledby={`${projectId} ${projectId}-demo`}
          >
            <FaPlay id={`${projectId}-demo`} as={Icon} aria-label="Demo" />
          </IconButton>
          <IconButton
            href={code}
            target="_blank"
            rel="noreferrer"
            themeColor={theme.tertiary}
            themeBg={theme.secondary}
            aria-labelledby={`${projectId} ${projectId}-code`}
          >
            <FaCode id={`${projectId}-code`} as={Icon} aria-label="Code" />
          </IconButton>
        </div>
      </div>

      <p
        className="project--desc"
        style={{ background: theme.secondary, color: theme.tertiary }}
      >
        {desc}
      </p>

      <div
        className="project--lang"
        style={{ background: theme.secondary, color: theme.tertiary80 }}
      >
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default SingleProject;
