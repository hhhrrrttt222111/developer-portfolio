import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleBlog.css";

// Optionally, you can use styled to style the container dynamically
const BlogCard = styled(motion.a)(({ themeColor }) => ({
  display: "block",
  textDecoration: "none",
  borderRadius: "12px",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: themeColor,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px) scale(1.02)",
  },
}));

function SingleBlog({ theme, title, desc, date, image, url, id }) {
  return (
    <BlogCard
      key={id}
      href={url}
      target="_blank"
      rel="noreferrer"
      themeColor={theme.primary400}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="singleBlog"
    >
      <div
        className="singleBlog--image"
        style={{ backgroundColor: theme.secondary }}
      >
        <img src={image ? image : placeholder} alt={title} />
      </div>
      <div className="singleBlog--body">
        <p style={{ color: theme.tertiary }}>{date}</p>
        <h3 style={{ color: theme.secondary }}>{title}</h3>
        <h6 style={{ color: theme.secondary }}>{desc}</h6>
      </div>
    </BlogCard>
  );
}

export default SingleBlog;
