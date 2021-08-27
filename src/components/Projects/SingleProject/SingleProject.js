import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import './SingleProject.css'

function SingleProject({ id, name, desc, code, demo, image, theme }) {

    const useStyles = makeStyles((t) => ({
        navMenu : {
            "&:hover": {
                color: theme.primary,
            },
            '&::before': {
                content: '',
                display: 'block',
            },
            '&::after': {
                content: '',
                display: 'block',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div key={id} className="singleProject" style={{backgroundColor: theme.primary}}>
            <div className="projectContent">
                <h2 style={{color: theme.tertiary}}>{name}</h2>
                <img src={image} alt={name} />  
                <div className="project--showcaseBtn">
                    <button>
                        <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                    </button>
                    <button>
                        <a href={code} target="_blank" rel="noreferrer">Code</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleProject
