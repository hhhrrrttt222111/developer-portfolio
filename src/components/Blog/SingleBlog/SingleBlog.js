import React from 'react'

import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer" style={{backgroundColor: theme.primary400}}>
            <div className="singleBlog--image" style={{backgroundColor: theme.secondary}}>
                <img src={image} alt={title} />
            </div>
            <div className="singleBlog--body">
                <p style={{color: theme.tertiary}}>{date}</p>
                <h3 style={{color: theme.secondary}}>{title}</h3>
                <h6 style={{color: theme.secondary}}>{desc}</h6>
            </div>
        </a>
    )
}

export default SingleBlog
