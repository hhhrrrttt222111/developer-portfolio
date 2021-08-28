import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Footer() {


    const { theme }  = useContext(ThemeContext)

    var year = new Date().getFullYear();


    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>Made with <span style={{color: theme.primary}}>❤</span></p>
        </div>
    )
}

export default Footer

