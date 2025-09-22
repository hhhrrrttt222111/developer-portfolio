import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Blog.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blogData } from "../../data/blogData";
import SingleBlog from "./SingleBlog/SingleBlog";

function Blog() {
  const { theme } = useContext(ThemeContext);

  const ViewAllBtn = styled("button")(({ theme: t }) => ({
    color: theme.tertiary,
    backgroundColor: theme.primary,
    border: "none",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    "&:hover": {
      color: theme.secondary,
      backgroundColor: theme.primary,
    },
  }));

  const ViewArr = styled("span")(() => ({
    color: theme.tertiary,
    backgroundColor: theme.secondary70,
    width: "40px",
    height: "40px",
    padding: "0.5rem",
    fontSize: "1.05rem",
    borderRadius: "50%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      color: theme.tertiary,
      backgroundColor: theme.secondary,
    },
  }));

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {blogData.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {blogData
                .slice(0, 3)
                .reverse()
                .map((blog) => (
                  <motion.div
                    key={blog.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <SingleBlog
                      theme={theme}
                      title={blog.title}
                      desc={blog.description}
                      date={blog.date}
                      image={blog.image}
                      url={blog.url}
                      id={blog.id}
                    />
                  </motion.div>
                ))}
            </div>

            {blogData.length > 3 && (
              <div className="blog--viewAll">
                <Link to="/blog">
                  <ViewAllBtn>
                    View All
                    <ViewArr>
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

export default Blog;
