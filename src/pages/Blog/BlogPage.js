import React, { useContext, useState } from 'react'
import { Grid } from '@material-ui/core'

import './BlogPage.css'
import { SingleBlog } from '../../components'
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'

function BlogPage() {

    const [search, setSearch] = useState('')
    const { theme } = useContext(ThemeContext);

    const filteredArticles = blogData.filter((blog) => {
        const content = blog.title + blog.description + blog.date
        return content.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="blogPage">
            <div className="blogPage--header">
                <h1>Blogs</h1>
            </div>
            <div className="blogPage--container">
                <div className="blog--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach Blog" className="blog--input"/>
                </div>
                <div className="blogs--container">
                    <Grid className="blog-grid" container direction="row" alignItems="center" justifyContent="center">
                        {filteredArticles.reverse().map(blog => (
                            <SingleBlog 
                                theme={theme}
                                title={blog.title}
                                desc={blog.description}
                                date={blog.date}
                                image={blog.image}
                                url={blog.url}
                                key={blog.id}
                                id={blog.id}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
