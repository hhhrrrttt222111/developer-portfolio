import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Box, Typography, InputBase } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";

import './ProjectPage.css';
import { SingleProject } from '../../components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';
import { headerData } from '../../data/headerData';

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        position: 'relative',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        border: `1px solid ${theme.tertiary}`, // Add border
        borderRadius: '20px',
        backgroundColor:theme.secondary, // Ensure background color
    },
    searchInput: {
        padding: theme.spacing(1, 4, 1, 2),
        width: '100%',
        borderRadius: '30px',
        border: `4px solid #E9AD35cc`, // ${theme.primary80}
        color: '#eaeaea', // theme.tertiary
        outline: 'none',
        backgroundColor: theme.primary,
        fontFamily: "'Noto Sans TC', sans-serif",
        fontWeight: 500,
        fontSize: '0.9rem',
        '&::placeholder': {
            color: 'rgb(193, 145, 49)',//theme.primary600,
        },
    },
    clearButton: {
        position: 'absolute',
        top: '50%',
        right: theme.spacing(3),
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#eaeaea', //theme.tertiary
    },
    home: {
        color: theme.secondary,
        position: 'absolute',
        top: 25,
        left: 25,
        padding: '7px',
        borderRadius: '50%',
        boxSizing: 'content-box',
        fontSize: '2rem',
        cursor: 'pointer',
        boxShadow:
            theme.type === 'dark'
                ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050'
                : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            color: theme.tertiary,
            transform: 'scale(1.1)',
        },
    },
}));

function ProjectPage() {
    const classes = useStyles();
    const { theme } = useContext(ThemeContext);
    const location = useLocation();
    const [search, setSearch] = useState('');

    useEffect(() => {
        const skill = new URLSearchParams(location.search).get('skill');
        if (skill) {
            // For some reason 'C++' skill i srepalced with 'C  '. Use this workaround to fix this.
            if (skill === 'C  ') {
                setSearch(skill.replace(/\s+/g, '++'));  
            } else {
                setSearch(skill);
            }
        }
    }, [location]);

    const filteredArticles = projectsData.filter((project) => {
        const content = project.projectName + project.projectDesc + project.tags;
        const additionalTagsString = project.additional_tags ? project.additional_tags.join(" ") : "";
        return (content.toLowerCase().includes(search.toLowerCase()) ||
            additionalTagsString.toLowerCase().includes(search.toLowerCase()));
    });

    const handleClear = () => {
        setSearch('');
    };

    return (
        <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Projects</title>
            </Helmet>
            <div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Projects</h1>
            </div>
            <div className="projectPage-container">
                <Box className={classes.searchContainer}>
                    <InputBase
                        placeholder="Search project or tag..."
                        className={classes.searchInput}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                            <AiOutlineClose className={classes.clearButton} onClick={handleClear} />
                        </span>
                    )}
                </Box>
                <div className="project-container">
                    <div className="project-grid">
                        {filteredArticles.map(project => (
                            <SingleProject
                                theme={theme}
                                key={project.id}
                                id={project.id}
                                name={project.projectName}
                                desc={project.projectDesc}
                                tags={project.tags}
                                code={project.code}
                                demo={project.demo}
                                image={project.image}
                                imgWidth={project.imgWidth}
                                imgHeight={project.imgHeight}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
