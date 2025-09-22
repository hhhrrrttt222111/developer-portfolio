import React, { useContext, useState } from "react";
import {
  Snackbar,
  IconButton,
  SnackbarContent,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import axios from "axios";
import isEmail from "validator/lib/isEmail";

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";

import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import { ThemeContext } from "../../contexts/ThemeContext";
import { socialsData } from "../../data/socialsData";
import { contactsData } from "../../data/contactsData";

import "./Contacts.css";

// Styled TextField
const Input = styled(TextField)(({ themeColor, themeBg }) => ({
  "& .MuiInputBase-root": {
    color: themeColor,
    backgroundColor: themeBg,
    borderRadius: "20px",
    width: "100%",
    fontSize: "1rem",
    padding: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: themeColor,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: themeColor,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: themeColor,
  },
  "& .MuiInputBase-multiline": {
    padding: "10px",
    minHeight: "100px",
  },
  "& .MuiInputLabel-root": {
    color: themeColor,
    fontFamily: "var(--primaryFont)",
    fontWeight: 600,
    fontSize: "1.5rem",
    transform: "translate(0, -30px) scale(1)", // Adjusted to move label higher
    marginBottom: "0",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(0, -30px) scale(1)", // Matching adjustment for focused/filled state
  },
}));

// Styled circle icons for social & contact
const IconCircle = styled("div")(({ themeColor, themeBg }) => ({
  width: 45,
  height: 45,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 21,
  backgroundColor: themeColor,
  color: themeBg,
  transition: "0.25s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: themeBg,
    color: themeColor,
  },
}));

function Contacts() {
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        axios.post(contactsData.sheetAPI, { name, email, message }).then(() => {
          setSuccess(true);
          setErrMsg("");
          setName("");
          setEmail("");
          setMessage("");
          setOpen(false);

          setTimeout(() => setSuccess(false), 2000);
        });
      } else {
        setErrMsg("Invalid email");
        setOpen(true);
      }
    } else {
      setErrMsg("Enter all the fields");
      setOpen(true);
    }
  };

  return (
    <div className="contacts" style={{ backgroundColor: theme.secondary }}>
      <div className="contacts--container">
        <h1 style={{ color: theme.primary }}>Contact </h1>
        <div className="contacts-body">
          <form className="contacts-form" onSubmit={handleContactForm}>
            <Input
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              themeColor={theme.tertiary}
              themeBg={theme.secondary}
              margin="normal"
              InputProps={{
                style: { height: "50px" },
              }}
            />
            <Input
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              themeColor={theme.tertiary}
              themeBg={theme.secondary}
              margin="normal"
              InputProps={{
                style: { height: "50px" },
              }}
            />
            <Input
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              themeColor={theme.tertiary}
              themeBg={theme.secondary}
              margin="normal"
            />
            <button
              type="submit"
              className="submit-btn"
              style={{
                backgroundColor: theme.primary,
                color: theme.secondary,
                marginTop: "1rem",
                padding: "10px 20px",
                borderRadius: "50px",
                width: "140px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <p style={{ fontSize: "16px", fontFamily: "var(--primaryFont)" }}>
                {success ? "Sent" : "Send"}
              </p>
              <div className="submit-icon">
                <AiOutlineSend
                  className="send-icon"
                  style={{
                    animation: success ? "fly 0.8s linear both" : "initial",
                    position: success ? "absolute" : "initial",
                  }}
                />
                <AiOutlineCheckCircle
                  className="success-icon"
                  style={{
                    display: success ? "inline-flex" : "none",
                    opacity: success ? 1 : 0,
                  }}
                />
              </div>
            </button>
          </form>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <IconCircle themeColor={theme.primary} themeBg={theme.secondary}>
                <FiAtSign />
              </IconCircle>
              <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <IconCircle themeColor={theme.primary} themeBg={theme.secondary}>
                <FiPhone />
              </IconCircle>
              <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
            </a>
            <div className="personal-details">
              <IconCircle themeColor={theme.primary} themeBg={theme.secondary}>
                <HiOutlineLocationMarker />
              </IconCircle>
              <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
            </div>

            <div className="socialmedia-icons">
              {socialsData.twitter && (
                <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaTwitter />
                  </IconCircle>
                </a>
              )}
              {socialsData.github && (
                <a href={socialsData.github} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaGithub />
                  </IconCircle>
                </a>
              )}
              {socialsData.linkedIn && (
                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaLinkedinIn />
                  </IconCircle>
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaInstagram />
                  </IconCircle>
                </a>
              )}
              {socialsData.medium && (
                <a href={socialsData.medium} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaMediumM />
                  </IconCircle>
                </a>
              )}
              {socialsData.blogger && (
                <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaBloggerB />
                  </IconCircle>
                </a>
              )}
              {socialsData.youtube && (
                <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaYoutube />
                  </IconCircle>
                </a>
              )}
              {socialsData.reddit && (
                <a href={socialsData.reddit} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaRedditAlien />
                  </IconCircle>
                </a>
              )}
              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaStackOverflow />
                  </IconCircle>
                </a>
              )}
              {socialsData.codepen && (
                <a href={socialsData.codepen} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaCodepen />
                  </IconCircle>
                </a>
              )}
              {socialsData.gitlab && (
                <a href={socialsData.gitlab} target="_blank" rel="noreferrer">
                  <IconCircle
                    themeColor={theme.primary}
                    themeBg={theme.tertiary}
                  >
                    <FaGitlab />
                  </IconCircle>
                </a>
              )}
            </div>
          </div>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <SnackbarContent
              message={errMsg}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
              sx={{
                backgroundColor: theme.primary,
                color: theme.secondary,
                fontFamily: "var(--primaryFont)",
              }}
            />
          </Snackbar>
        </div>
      </div>
      <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
    </div>
  );
}

export default Contacts;
