import React, { useContext, useState } from 'react'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";

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


    const useStyles = makeStyles((t) => ({
        search : {
            color: theme.tertiary, 
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.85rem',  
            backgroundColor: theme.secondary, 
            boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #ffffff40, inset -3px -3px 6px #00000050' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000040',
            "&::placeholder": {
                color: theme.tertiary80, 
            },
            [t.breakpoints.down('sm')]: {
                width:'90%',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 20,
            left: 20,
            fontSize: '2.05rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            "&:hover": {
                transform: 'scale(1.1)',
            }
        },
    }));

    const classes = useStyles();

    return (
        <div className="blogPage" style={{backgroundColor: theme.secondary}}>
            <div className="blogPage--header" style={{backgroundColor: theme.primary}}>
                <Link to="/">
                    <AiOutlineHome className={classes.home}/>
                </Link>
                <h1 style={{color: theme.secondary}}>Blogs</h1>
            </div>
            <div className="blogPage--container">
                <div className="blog--search">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Seach blog..." className={classes.search}/>
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
