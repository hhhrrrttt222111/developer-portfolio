import React from 'react'
import { IoMenuSharp } from "react-icons/io5";

import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--container">
                <h1>Jane Doe</h1>

                <IoMenuSharp className="nav-menu"/>
            </div>
        </div>
    )
}

export default Navbar
