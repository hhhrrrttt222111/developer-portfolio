import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { educationData } from '../../data/educationData'

import eduImg from '../../assets/svg/education/educationImg.svg'
import './Education.css'

function EducationCard() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="education-card" style={{backgroundColor:theme.primary}}>
            <div className="education-img">
                <img src={eduImg} alt="" />
            </div>
            <div className="education-details">
                 <h6>2009-2012</h6>
                 <h4>CourseName</h4>
                 <h5>College Name</h5>
            </div>
        </div>
        
    )
}

export default EducationCard
