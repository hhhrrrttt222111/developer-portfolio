import React from 'react';
import Fade from 'react-reveal/Fade';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, demo, image, theme, imgWidth, imgHeight }) {

    return (
        <Fade bottom>
            <a href={demo} target="_blank" rel="noopener noreferrer">
                <div
                    key={id}
                    className='singleProject'
                    style={{ backgroundColor: theme.primary400,
                             "--img-width": imgWidth,
                             "--img-height": imgHeight }}
                >
                    <div className='projectContent'>
                        <h2
                            id={name.replace(' ', '-').toLowerCase()}
                            style={{ color: theme.tertiary }}
                        >
                            {name}
                        </h2>
                        <img src={image ? image : placeholder} alt={name} style={{width: imgWidth, height: imgHeight}}/>
                    </div>
                    <p
                        className='project--desc'
                        style={{
                            background: theme.secondary,
                            color: theme.tertiary,
                        }}
                    >
                        {desc}
                    </p>
                    <div
                        className='project--lang'
                        style={{
                            background: theme.secondary,
                            color: theme.tertiary80,
                        }}
                    >
                        <div className="tag-container">
                            {tags.map((tag, id) => (
                                <span key={id}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </Fade>
    );
}

export default SingleProject;
