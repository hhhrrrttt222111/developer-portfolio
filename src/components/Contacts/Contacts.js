import React, { useContext, useState } from 'react';
import axios from 'axios'
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@material-ui/core/styles';
import { FaTwitter, FaLinkedinIn, FaGithub, FaYoutube, FaBloggerB, FaRedditAlien, FaStackOverflow, FaCodepen, FaInstagram, FaGitlab, FaMediumM } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi"

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData'
import { contactsData } from '../../data/contactsData'
import './Contacts.css'

function Contacts() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,    
            transition: 'border 0.2s ease-in-out',
            "&:focus": {
                border: `4px solid ${theme.primary600}`,
            }    
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            "&:focus": {
                border: `4px solid ${theme.primary600}`,
            }    
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600, 
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex', 
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor:theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            "&:hover": {
                transform: 'scale(1.1)',
                color: theme.secondary50,
                backgroundColor:theme.tertiary,
            }
        },
        detailsIcon: {
            backgroundColor:theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            "&:hover": {
                transform: 'scale(1.1)',
                color: theme.secondary50,
                backgroundColor:theme.tertiary,
            }
        }
    }))

    const classes = useStyles();

    const handleContactForm = (e) => {
        e.preventDefault()

        if(name && email && message) {

            if(isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message
                }
        
                axios.post(contactsData.sheetAPI, responseData)
                    .then(res => {
                        console.log('success')
                        setSuccess(true)
                        setErrMsg('')

                        setName("");
                        setEmail("");
                        setMessage("")
                    })
            } else {
                setErrMsg('Invalid email')
            }
            
        } else {
            setErrMsg('Enter all the fields')
        }

    }

    console.log(errMsg)
    
    return (
        <div className="contacts" id="contacts" style={{backgroundColor: theme.secondary}}>
            <div className="contacts--container">
                <h1 style={{color: theme.primary}}>Contacts</h1>
                <div className="contacts-body">
                    <div className="contacts-form">
                        <form onSubmit={handleContactForm}>
                            <div className="input-container">
                                <label for="Name"  className={classes.label}>Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="Name" className={`form-input ${classes.input}`}/>
                            </div>
                            <div className="input-container">
                                <label for="Email"  className={classes.label}>Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="Email" className={`form-input ${classes.input}`}/>
                            </div>
                            <div className="input-container">
                                <label for="Message"  className={classes.label}>Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="Message" className={`form-message ${classes.message}`} />
                            </div>

                            <div className="submit-btn" >
                                <button type="submit" style={{backgroundColor:theme.primary, color:theme.secondary}}>
                                    <p>{!success ? 'Send' : 'Sent'}</p>
                                    <div className="submit-icon">
                                        <AiOutlineSend />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contacts-details">
                        <a href={`mailto:${contactsData.email}`} className="personal-details">
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{color:theme.tertiary}}>{contactsData.email}</p>
                        </a>
                        <a href={`tel:${contactsData.phone}`} className="personal-details">
                            <div className={classes.detailsIcon}>
                                <FiPhone/> 
                            </div>
                            <p style={{color:theme.tertiary}}>{contactsData.phone}</p>
                        </a>
                        <div className="personal-details">
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{color:theme.tertiary}}>Menlo Park, California, United States - 673822 </p>
                        </div>

                        <div className="socialmedia-icons">
                            {socialsData.twitter && (
                                <a href={socialsData.twitter} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaTwitter />
                                </a>
                            )}
                            {socialsData.github && (
                                <a href={socialsData.github} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaGithub />
                                </a>
                            )}
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaLinkedinIn />
                                </a>
                            )}
                            {socialsData.instagram && (
                                <a href={socialsData.instagram} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaInstagram />
                                </a>
                            )}
                            {socialsData.medium && (
                                <a href={socialsData.medium} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaMediumM />
                                </a>
                            )}
                            {socialsData.blogger && (
                                <a href={socialsData.blogger} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaBloggerB />
                                </a>
                            )}
                            {socialsData.youtube && (
                                <a href={socialsData.youtube} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaYoutube />
                                </a>
                            )}
                            {socialsData.reddit && (
                                <a href={socialsData.reddit} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaRedditAlien />
                                </a>
                            )}
                            {socialsData.stackOverflow && (
                                <a href={socialsData.stackOverflow} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaStackOverflow />
                                </a>
                            )} 
                            {socialsData.codepen && (
                                <a href={socialsData.codepen} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaCodepen />
                                </a>
                            )}
                            {socialsData.gitlab && (
                                <a href={socialsData.gitlab} target="_blank" rel="noreferrer" className={classes.socialIcon} >
                                    <FaGitlab />
                                </a>
                            )}          
                        </div>
                    </div>
                </div> 
            </div>
            <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
        </div>
    )
}

export default Contacts
