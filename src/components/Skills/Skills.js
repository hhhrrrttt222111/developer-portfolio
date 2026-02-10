import React, { useContext, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);
    const [isHovering, setIsHovering] = useState(false);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`
    }

    const rows = 3;
    const shift = Math.floor(skillsData.length / rows);

    const handleSkillBoxHover = useCallback((hovering) => {
        setIsHovering(hovering);
    }, []);

    return (
        <div
            id="skills"
            className="skills"
            style={{ backgroundColor: theme.secondary }}
        >
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Skills</h2>
            </div>
            <div className="skillsContainer">
                {[...Array(rows)].map((_, index) => {
                    const start = index * shift;
                    const shiftedSkills = [...skillsData.slice(start), ...skillsData.slice(0, start)];

                    return (
                        <div className="skill--scroll" key={index} style={{ pointerEvents: 'none' }}>
                            <Marquee
                                gradient={false}
                                speed={80}
                                pauseOnHover={true}
                                pauseOnClick={true}
                                delay={0}
                                play={!isHovering}
                                direction="left"
                            >
                                {shiftedSkills.map((skill, id) => (
                                    <SkillBox
                                        key={id}
                                        skill={skill}
                                        style={skillBoxStyle}
                                        onSkillBoxHover={handleSkillBoxHover}
                                    />
                                ))}
                            </Marquee>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function SkillBox({ skill, style, onSkillBoxHover }) {
    const { theme } = useContext(ThemeContext);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
        onSkillBoxHover(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        onSkillBoxHover(false);
    };

    return (
        <Link to={`/projects?skill=${skill}`} style={{ textDecoration: 'none' }}>
            <div
                className="skill--box"
                style={{
                    ...style,
                    backgroundColor: isHovering ? 'rgb(113, 138, 146)' : style.backgroundColor,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={skillsImage(skill)}
                    alt={skill}
                />
                <h3 style={{ color: theme.tertiary }}>{skill}</h3>
            </div>
        </Link>
    );
}

export default Skills
