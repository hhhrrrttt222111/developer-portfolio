import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

import './Landing.css'
import { headerData } from '../../data/headerData'

import twitter from '../../assets/svg/social/twitter.svg'
import github from '../../assets/svg/social/github.svg'
import linkedin from '../../assets/svg/social/linkedin.svg'


const useStyles = makeStyles((theme) => ({
    resumeBtn : {
        color: '#459446',
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '146px',
        height: '45px',
        fontFamily: 'Poppins',
        border: '3px solid #459446'
    },
    contactBtn : {
        backgroundColor: '#459446',
        color: '#EAEAEA',
        borderRadius: '30px',
        textTransform: 'inherit',
        textDecoration: 'none',
        width: '146px',
        height: '45px',
        fontFamily: 'Poppins',
        marginLeft: '2.5rem',
        "&:hover": {
            backgroundColor: "#459446"
        }
    }
}));

function Landing() {

    const classes = useStyles();
 
    return (
        <div className="landing">
            <div className="landing--container">
                <div className="landing--container-left">
                    <div className="lcl--content">
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="" className="landing--social"/>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={github} alt="" className="landing--social"/>
                        </a>
                        <a href="/" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="" className="landing--social"/>
                        </a>
                    </div>
                </div>
                <img src={headerData.image} alt="" className="landing--img"/>
                <div className="landing--container-right">
                    <div className="lcr--content">
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className="lcr-buttonContainer">
                            <a href={headerData.resumePdf} download="resume">
                                <Button className={classes.resumeBtn}>Download CV</Button>
                            </a>
                            <Button className={classes.contactBtn}>Contact</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
