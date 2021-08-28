import React,{useContext} from 'react';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, icon}) {

    const { theme } = useContext(ThemeContext);
    return (
        <div key={id} className="single-service" style={{backgroundColor:theme.primary}}>
            <div className="service-content">
                <i className="service-icon">{icon}</i>
                <h4>{title}</h4>  
            </div>         
        </div>
    )
}

export default SingleService
