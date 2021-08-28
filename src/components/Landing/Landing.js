import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { socialsData } from '../../data/socialsData'

import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaBlogger } from "react-icons/fa";


function Landing() {
    const { theme, drawerOpen }  = useContext(ThemeContext)

    const useStyles = makeStyles(() => ({
        resumeBtn : {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'Poppins',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            "&:hover": {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            }
        },
        contactBtn : {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Poppins',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            "&:hover": {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            }
        }
    }));

    const classes = useStyles();

    return (
        <div className="landing" >
            <div className="landing--container">
                <div className="landing--container-left" style={{backgroundColor: theme.primary}}>
                    <div className="lcl--content">
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                                <FaLinkedin className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target="_blank" rel="noreferrer">
                                <FaGithub className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                                <FaTwitter className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a href={socialsData.youtube} target="_blank" rel="noreferrer">
                                <FaYoutube className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a href={socialsData.blogger} target="_blank" rel="noreferrer">
                                <FaBlogger className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                    </div>
                </div>
                <img src={headerData.image} alt="" className="landing--img" style={{ opacity: `${drawerOpen ? '0' : '1'}`, borderColor: theme.secondary}}/>
                <div className="landing--container-right" style={{backgroundColor: theme.secondary}}>
                    <div className="lcr--content" style={{color: theme.tertiary}}>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className="lcr-buttonContainer">
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf} download="resume">
                                    <Button className={classes.resumeBtn}>Download CV</Button>
                                </a>
                            )}
                            <Button className={classes.contactBtn}>Contact</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
