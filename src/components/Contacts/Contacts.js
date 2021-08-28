import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';


import { contactsData } from '../../data/contactsData'
import './Contacts.css'

function Contacts() {
// eslint-disable-next-line
    const { theme } = useContext(ThemeContext);

    console.log(contactsData)
    
    return (
        <div className="contacts" id="contacts">
            <h1>Contacts</h1>
        </div>
    )
}

export default Contacts
