import React, { useContext } from 'react';

import './Achievement.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { achievementData } from '../../data/achievementData'
import AchievementCard from './AchievementCard';

// import { HiArrowRight } from "react-icons/hi";
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';

function Achievement() {

    const { theme } = useContext(ThemeContext);

    // const useStyles = makeStyles(() => ({
    //     viewAllBtn: {
    //         color: theme.tertiary,
    //         backgroundColor: theme.primary,
    //         transition: 'color 0.2s',
    //         "&:hover": {
    //             color: theme.secondary,
    //             backgroundColor: theme.primary,
    //         }
    //     },
    //     viewArr: {
    //         color: theme.tertiary,
    //         backgroundColor: theme.secondary70,
    //         width: '40px',
    //         height: '40px',
    //         padding: '0.5rem',
    //         fontSize: '1.05rem',
    //         borderRadius: '50%',
    //         cursor: 'pointer',
    //         transition: 'background-color 0.2s',
    //         "&:hover": {
    //             color: theme.tertiary,
    //             backgroundColor: theme.secondary,
    //         }
    //     },
    // }));

    // const classes = useStyles();

    return (
        <>
            {achievementData.achievements.length > 0 && (
                <div className="achievement" id="achievement" style={{ backgroundColor: theme.secondary }}>
                    <div className="achievement-body">
                        <h1 style={{ color: theme.primary }}>Achievements</h1>
                        <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
                    </div>
                    <div className="achievement-cards">
                        {achievementData.achievements.map(achieve => (
                            <AchievementCard
                                key={achieve.id}
                                id={achieve.id}
                                title={achieve.title}
                                details={achieve.details}
                                date={achieve.date}
                                field={achieve.field}
                                image={achieve.image} />
                        ))}
                    </div>
                    {/* {achievementData.achievements.length > 3 && (
                        <div className="achievements--viewAll">
                            <Link to="/Achievement">
                                <button className={classes.viewAllBtn}>
                                    View All
                                    <HiArrowRight className={classes.viewArr} />
                                </button>
                            </Link>
                        </div>
                    )} */}
                </div>
            )}
        </>
    )
}

export default Achievement
