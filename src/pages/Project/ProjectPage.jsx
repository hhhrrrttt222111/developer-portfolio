import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";

import "./ProjectPage.css";
import { SingleProject } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { headerData } from "../../data/headerData";

// Styled input
const SearchInput = styled("input")(({ themeColor, themeBg }) => ({
  color: themeColor,
  width: "40%",
  height: "2.75rem",
  outline: "none",
  border: "none",
  borderRadius: "20px",
  padding: "0.95rem 1rem",
  fontFamily: "'Noto Sans TC', sans-serif",
  fontWeight: 500,
  fontSize: "0.9rem",
  backgroundColor: themeBg,
  boxShadow: "inset 3px 3px 6px #ffffff30, inset -3px -3px 6px #00000030",
  "::placeholder": {
    color: "#aaa",
  },
  "@media (max-width: 600px)": {
    width: "90%",
  },
}));

function ProjectPage() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const filteredArticles = projectsData.filter((project) => {
    const content = project.projectName + project.projectDesc + project.tags;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Projects</title>
      </Helmet>

      <div
        className="projectPage-header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome
            style={{
              color: theme.secondary,
              position: "absolute",
              top: 25,
              left: 25,
              padding: "7px",
              borderRadius: "50%",
              fontSize: "2rem",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </Link>
        <h1 style={{ color: theme.secondary }}>Projects</h1>
      </div>

      <div className="projectPage-container">
        <div className="projectPage-search">
          <SearchInput
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search project..."
            themeColor={theme.tertiary}
            themeBg={theme.secondary}
          />
        </div>

        <div className="project-container">
          <Grid container spacing={4} justifyContent="center">
            {filteredArticles.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <SingleProject
                  theme={theme}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              </motion.div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
