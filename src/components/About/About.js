import React,{ useContext} from 'react';

import './About.css';
import { ThemeContext } from '../../contexts/ThemeContext';

import aboutImg from '../../assets/svg/about.svg'

function About() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="about" style={{backgroundColor: theme.primary2}}>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>Who I am</h2>
                    <p style={{color:theme.secondary1}}><span style={{color: theme.secondary}}>My name's Jane.</span> I'm a web designer and developer based in Southampton, UK.<br/><br />During the day I’m the lead developer at a local agency. During the evenings I spend my time working on freelance projects and building my own products.During the evenings I spend my time working on freelance projects and building my own products.</p>
                </div>
                <div className="about-img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
        
    )
}

export default About
