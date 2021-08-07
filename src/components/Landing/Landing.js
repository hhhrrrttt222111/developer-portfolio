import { Button } from '@material-ui/core'
import React from 'react'

import { headerData } from '../../data/headerData'

function Landing() {
 
    return (
        <div className="landing">
            <h1>{headerData.title}</h1>
            <p>{headerData.desciption}</p>
            <a href={headerData.resumePdf} download="resume">
                <Button variant="outlined" color="secondary">Download Resume</Button>
            </a>
            <img src={headerData.image} alt="" />
        </div>
    )
}

export default Landing
