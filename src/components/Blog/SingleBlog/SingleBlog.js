import React from 'react'

import './SingleBlog.css'

function SingleBlog({ theme, title, desc, date, image, url, id }) {
    return (
        <a className="singleBlog" key={id} href={url} target="_blank" rel="noreferrer">
            <div className="singleBlog--image">
                <img src={image} alt={title} />
            </div>
            <div className="singleBlog--body">
                <h3 style={{color: theme.secondary}}>{title}</h3>
                <h6>{desc}</h6>
                <p>{date}</p>
            </div>
        </a>
    )
}

export default SingleBlog
