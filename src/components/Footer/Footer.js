import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
              
                 by   <a target="_blank" href='https://github.com/AswinAnand66'>Aswin Anandh</a>
                 <br/>
                 <p id='copyrights'>
                     Hemanath © 2021
                 </p>
                
            </p>
            <br/>
            <br/>
           
           
        </div>
    )
}

export default Footer

