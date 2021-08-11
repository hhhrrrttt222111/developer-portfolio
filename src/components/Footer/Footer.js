import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Footer() {


    const { theme }  = useContext(ThemeContext)

    var year = new Date().getFullYear();


    return (
        <div className="footer" style={{backgroundColor: theme.primary1}}>
            <p style={{color: theme.primary2}}>Copyright © {year}</p>
        </div>
    )
}

export default Footer

