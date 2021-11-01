import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';
import { FaInstagram} from 'react-icons/fa';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube,
    FaBlogger,
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                width: '180px',
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            [t.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
               <div className='container'>
                    <div className='links'>
                    
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                            
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.primary }}
                                    aria-label='Instagram'
                                />
                            </a>
                        )}
                     
                        
                        
                       
                       
                    </div>
             
                    
              
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                       
                        <h1>{headerData.name}</h1>
                        <h6>{headerData.title}</h6>
                        <p>{headerData.description}</p>

                        <div className='lcr-buttonContainer'>
                           
                            <NavLink
                                to='/portfolio'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <Button className={classes.resumeBtn}>
                                    Portfolio
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Landing;
