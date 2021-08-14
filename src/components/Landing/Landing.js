import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";


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
            border: `3px solid ${theme.primary}`
        },
        contactBtn : {
            backgroundColor: theme.primary,
            color: theme.primary2,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'Poppins',
            "&:hover": {
                backgroundColor: theme.primary
            }
        }
    }));

    const classes = useStyles();

    console.log(theme)

    return (
        <div className="landing" >
            <div className="landing--container">
                <div className="landing--container-left" style={{backgroundColor: theme.primary}}>
                    <div className="lcl--content">
                        <a href="/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="landing--social" style={{color: theme.primary2}}/>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <FaGithub className="landing--social" style={{color: theme.primary2}}/>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <FaTwitter className="landing--social" style={{color: theme.primary2}}/>
                        </a>
                    </div>
                </div>
                <img src={headerData.image} alt="" className="landing--img" style={{ opacity: `${drawerOpen ? '0' : '1'}`,borderColor: theme.primary2}}/>
                <div className="landing--container-right" style={{backgroundColor: theme.primary2}}>
                    <div className="lcr--content" style={{color: theme.secondary}}>
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
