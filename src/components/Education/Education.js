import React,{ useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

function Education() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="education" id="education" style={{backgroundColor: theme.primary2}}>
            <h1 style={{color:theme.primary}}>Education</h1>
            <div className="education-body">
                <div className="education-description">
                    <EducationCard />
                </div>
            </div>
        </div>
    )
}

export default Education
