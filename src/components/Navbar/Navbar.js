import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { MdPhone } from 'react-icons/md';
import { FaUser, FaFolderOpen } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useEffect } from 'react';
import {
    greenThemeLight,
    greenThemeDark,
    bwThemeLight,
    bwThemeDark,
    blueThemeLight,
    blueThemeDark,
    redThemeLight,
    redThemeDark,
    orangeThemeLight,
    orangeThemeDark,
    purpleThemeLight,
    purpleThemeDark,
    pinkThemeLight,
    pinkThemeDark,
    yellowThemeLight,
    yellowThemeDark,
} from '../../theme/theme';
import { Menu, MenuItem, IconButton } from '@material-ui/core';

const type = {
    light: {
        greenThemeLight,
        bwThemeLight,
        blueThemeLight,
        redThemeLight,
        orangeThemeLight,
        purpleThemeLight,
        pinkThemeLight,
        yellowThemeLight,
    },
    dark: {
        greenThemeDark,
        bwThemeDark,
        blueThemeDark,
        redThemeDark,
        orangeThemeDark,
        purpleThemeDark,
        pinkThemeDark,
        yellowThemeDark,
    },
};

function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, setHandleDrawer, setTheme, themeType, setThemeType } = useContext(ThemeContext);
    const [themes, setThemes] = useState(type[themeType]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const handleSetTheme = (theme, e) => {
        setTheme(themes[theme]);
        handleClick(e);
    };

    useEffect(() => {
        if (themeType === 'dark') {
            setThemes(type['dark']);
            const find = Object.keys(type.dark).filter((item) => type.dark[item].primary === theme.primary);
            setTheme(type.dark[find]);
        } else {
            setThemes(type['light']);
            const find = Object.keys(type.light).filter((item) => type.light[item].primary === theme.primary);
            setTheme(type.light[find]);
        }
    }, [themeType]);

    const useStyles = makeStyles((t) => ({
        navMenu: {
            fontSize: '2.5rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transform: 'translateY(-10px)',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '2.5rem',
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '2rem',
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
        toggleThemeIconButton: {
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            transform: 'translateY(-10px)',
            marginRight: 10,
            overflow: 'hidden',
            backgroundColor: theme.primary,
            border: `2px solid ${themeType === 'light' ? 'black' : 'white'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <>
                        <IconButton
                            className={classes.toggleThemeIconButton}
                            aria-controls='simple-menu'
                            aria-haspopup='true'
                            onClick={handleClick}
                        />
                        <Menu
                            id='simple-menu'
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {Object.keys(themes).map((item, index) => {
                                return (
                                    <MenuItem onClick={handleClose} key={index}>
                                        <IconButton
                                            style={{
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                padding: 0,
                                            }}
                                            aria-controls='simple-menu'
                                            aria-haspopup='true'
                                            onClick={(e) => handleSetTheme(item, e)}
                                        >
                                            <div style={{ width: '15px', height: '30px', backgroundColor: themes[item].primary }} />
                                            <div
                                                style={{ width: '15px', height: '30px', backgroundColor: themes[item].secondary }}
                                            />
                                        </IconButton>
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </>
                    <IoMenuSharp className={classes.navMenu} onClick={handleDrawerOpen} aria-label='Menu' />
                </div>
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink to='/' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Home</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#about' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>About</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#resume' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <HiDocumentText className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Resume</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#services'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <BsFillGearFill
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        Services
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#blog' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <FaFolderOpen className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Blog</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink to='/#contacts' smooth={true} spy='true' duration={2000}>
                                <div className={classes.drawerItem}>
                                    <MdPhone className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>Contact</span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <div
                                className={classes.drawerItem}
                                onClick={() => setThemeType(themeType === 'light' ? 'dark' : 'light')}
                            >
                                {themeType === 'light' ? (
                                    <Brightness4Icon className={classes.drawerIcon} />
                                ) : (
                                    <BrightnessHighIcon className={classes.drawerIcon} />
                                )}
                                <span className={classes.drawerLinks}>{themeType === 'light' ? 'Dark' : 'Light'}</span>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
