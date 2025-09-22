import React, { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

import "./Navbar.css";

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    handleDrawerClose();
  };

  const navItems = [
    { id: "home", label: "Home", icon: <IoHomeSharp />, link: "/" },
    { id: "about", label: "About", icon: <FaUser />, link: "about" },
    { id: "resume", label: "Resume", icon: <HiDocumentText />, link: "resume" },
    {
      id: "services",
      label: "Services",
      icon: <BsFillGearFill />,
      link: "services",
    },
    { id: "blog", label: "Blog", icon: <FaFolderOpen />, link: "blog" },
    { id: "contacts", label: "Contact", icon: <MdPhone />, link: "contacts" },
  ];

  const shortName = (name) => (name.length > 12 ? name.split(" ")[0] : name);

  return (
    <div className="navbar">
      <div className="navbar--container">
        <h1 style={{ color: theme.secondary }}>{shortName(headerData.name)}</h1>
        <IoMenuSharp
          style={{
            fontSize: "2.5rem",
            color: theme.tertiary,
            cursor: "pointer",
          }}
          onClick={handleDrawerOpen}
        />
      </div>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: { xs: "12em", sm: "14em" },
            backgroundColor: theme.secondary,
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
            padding: "2rem 1rem",
          },
        }}
      >
        <CloseIcon
          onClick={handleDrawerClose}
          sx={{
            fontSize: "2rem",
            color: theme.primary,
            cursor: "pointer",
            position: "absolute",
            right: { xs: 20, sm: 40 },
            top: { xs: 20, sm: 40 },
          }}
        />
        <div style={{ marginTop: "4rem" }}>
          {navItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              style={{
                margin: "1.5rem auto",
                borderRadius: "40px",
                backgroundColor: theme.secondary,
                color: theme.primary,
                width: "85%",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "0 1rem",
                border: `2px solid ${theme.primary}`,
                cursor: "pointer",
              }}
              onClick={() =>
                item.link === "/"
                  ? (window.location.href = "/")
                  : scrollToSection(item.link)
              }
            >
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Drawer>
    </div>
  );
}

export default Navbar;
