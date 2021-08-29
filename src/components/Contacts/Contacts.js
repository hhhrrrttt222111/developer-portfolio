import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube, FaBlogger } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { FaAt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi"

import { ThemeContext } from '../../contexts/ThemeContext';


import { contactsData } from '../../data/contactsData'
import './Contacts.css'

function Contacts() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { theme } = useContext(ThemeContext);

    console.log(contactsData);

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${theme.primary}`,
            backgroundColor: `${theme.secondary}`
        },
        message: {
            border: `4px solid ${theme.primary}`,
            backgroundColor: `${theme.secondary}`
        }
    }))

    const classes = useStyles();

    const handleContactForm = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(message)
    }
    
    return (
        <div className="contacts" id="contacts" style={{backgroundColor: theme.secondary}}>
            <h1 style={{color: theme.primary}}>Contacts</h1>
            <div className="contacts-body">
                <div className="contacts-form">
                    <form onSubmit={handleContactForm}>
                        <div className="input-container">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="Name" className={`form-input ${classes.input}`}/>
                        </div>
                        <div className="input-container">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="Email" className={`form-input ${classes.input}`}/>
                        </div>
                        <div className="input-container">
                            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="Message" className={`form-message ${classes.message}`} />
                        </div>

                        <div className="submit-btn" >
                            <button type="submit" style={{backgroundColor:theme.primary, color:theme.tertiary}}>
                                <p>Send</p>
                                <div className="submit-icon" style={{backgroundColor: theme.primary30}}>
                                    <AiOutlineSend />
                                </div>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="contacts-details">
                     <div className="personal-details">
                         <div className="details-icon" style={{backgroundColor:theme.primary}}>
                             <FaAt />
                         </div>
                         <p style={{color:theme.tertiary}}>janedoe@mec.ac.in</p>
                     </div>
                     <div className="personal-details">
                        <div className="details-icon" style={{backgroundColor:theme.primary}}>
                               <FiPhone/> 
                            </div>
                            <p style={{color:theme.tertiary}}>+91 8282307891</p>
                        </div>
                     <div className="personal-details">
                        <div className="details-icon" style={{backgroundColor:theme.primary}}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{color:theme.tertiary}}>Menlo Park, California, United States - 673822 </p>
                     </div>
                     <div className="socialmedia-icons">
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            <FaTwitter />
                         </div>
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            <FaGithub />
                         </div>
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            <FaLinkedin />
                         </div>
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            <FaBlogger />
                         </div>
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            <FaYoutube />
                         </div>
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            
                         </div>
                         <div className="social-icon" style={{backgroundColor:theme.primary}}>
                            
                         </div>
                     </div>
                </div>
            </div> 
        </div>
    )
}

export default Contacts
