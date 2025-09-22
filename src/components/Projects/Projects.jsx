import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { HiArrowRight } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import SingleProject from "./SingleProject/SingleProject";

import "./Projects.css";

// Styled buttons using MUI v5
const ViewAllBtn = styled("button")(({ themeColor, themeBg }) => ({
  color: themeColor,
  backgroundColor: themeBg,
  transition: "color 0.2s, background-color 0.2s",
  border: "none",
  padding: "0.6rem 1.2rem",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  "&:hover": {
    color: themeBg,
    backgroundColor: themeColor,
  },
}));

const ViewArr = styled("span")(({ themeColor, themeBg }) => ({
  color: themeColor,
  backgroundColor: themeBg,
  width: 40,
  height: 40,
  padding: "0.5rem",
  fontSize: "1.05rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background-color 0.2s, color 0.2s",
  "&:hover": {
    backgroundColor: themeColor,
    color: themeBg,
  },
}));

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <ViewAllBtn
                    themeColor={theme.tertiary}
                    themeBg={theme.primary}
                  >
                    View All
                    <ViewArr
                      themeColor={theme.tertiary}
                      themeBg={theme.secondary70 || theme.secondary}
                    >
                      <HiArrowRight />
                    </ViewArr>
                  </ViewAllBtn>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
