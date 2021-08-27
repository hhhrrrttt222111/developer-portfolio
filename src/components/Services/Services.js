import React,{useContext} from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Services.css'

function Services() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className="services" id="services" style={{backgroundColor:theme.secondary}}>
            <div className="services-header">
                <h1 style={{color: theme.primary}}>Services</h1>
            </div>
            <div className="services-body">
                <p style={{color:theme.tertiary80}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>
            </div>
        </div>
    )
}

export default Services
