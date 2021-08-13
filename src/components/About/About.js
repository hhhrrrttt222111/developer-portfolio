import React,{ useContext} from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import {aboutData} from '../../data/aboutData'



function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" style={{backgroundColor: theme.primary2}}>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color:theme.secondary1}}>{aboutData.description1}<br/><br/>{aboutData.description2}</p>
                </div>
                <div className="about-img">
                    <img src={theme.aboutimg2} alt="" />
                </div>
            </div>
        </div>
        
    )
}

export default About
