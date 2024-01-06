import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="footer" style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Made by {shortname(headerData.name)}
      </p>
    </div>
  );
}

export default Footer;
