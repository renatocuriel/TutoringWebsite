import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const TitleBar = styled(AppBar)`
    background-color: darkgreen !important;
    color: white !important;
    padding: 1em 0;
    align-items: center;
    box-shadow: 0px 1px 5px gold !important;
`;

const NavBar = styled(AppBar)`
    background-color: #e6c300 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    box-shadow: 0px 1px 5px gray !important;
`;

const NavButton = styled(Link)`
    color: darkgreen;
    text-decoration: none;
    padding: 0 1em;
    font-size: 1.2em;
    text-transform: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: darkgreen;
        font-weight: bold;
    }

    &.active {
        color: darkgreen;
        font-weight: bold;
    };
`;

const Header = () => (
    <>
        <TitleBar position="static">
            <Toolbar sx={{ justifyContent: 'center'}}>
                <Typography variant="h5" component="div" sx={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>
                    Cal Poly Computer Engineering Tutoring
                </Typography>
            </Toolbar>
        </TitleBar>

        <NavBar position="static">
            <Toolbar sx={{ justifyContent: 'center'}}>
                <NavButton to="/">Home</NavButton>
                <NavButton to="/courses">Courses</NavButton>
                <NavButton to="/request-tutoring">Request Tutoring</NavButton>
            </Toolbar>
        </NavBar>
    </>
);

export default Header;
