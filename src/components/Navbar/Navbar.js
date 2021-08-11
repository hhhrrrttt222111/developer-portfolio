import React, { useContext } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { makeStyles } from '@material-ui/core/styles';

import './Navbar.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Navbar() {

    const { theme }  = useContext(ThemeContext)

    const useStyles = makeStyles(() => ({
        navMenu : {
            fontSize: '2.5rem',
            color: theme.secondary,
            cursor: 'pointer',
            transition: 'color 0.3s',
            "&:hover": {
                color: theme.primary,
            }
        }
    }));

    const classes = useStyles();


    return (
        <div className="navbar">
            <div className="navbar--container">
                <h1 style={{color: theme.primary2}}>Jane Doe</h1>

                <IoMenuSharp className={classes.navMenu}/>
            </div>
        </div>
    )
}

export default Navbar
