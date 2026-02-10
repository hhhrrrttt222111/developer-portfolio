import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({ id, institution, course, startYear, endYear, url }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div key={id} className={`education-card ${classes.educationCard}`} >
                    <div className="educard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                    </div>
                    <div className="education-details">
                        <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                        <h4 style={{color: theme.tertiary}}>{course}</h4>
                        <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                    </div>
                </div>
            </a>
        </Fade>
    )
}

export default EducationCard
