import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: gold;
`;

const Wrapper = styled.section`
    padding: .5em;
    background: darkgreen;
    border: 2px solid gold;
    border-radius: 3px;
`;

const NavBar = styled.nav`
    background-color: darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
`;

const NavButton = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 0 1em;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: darkgray;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: gray;
    }

    &:first-child {
        border-radius: 5px 0 0 5px;
    }

    &:last-child {
        border-radius: 0 5px 5px 0;
    }

    &:not(:last-child) {
        border-right: 1px solid white;
    }
`;

const Header = () => (
    <div>
        <Wrapper>
            <Title> Cal Poly Computer Engineering Tutoring</Title>
        </Wrapper>
        <NavBar>
            <NavButton to="/">Home</NavButton>
            <NavButton to="/courses">Courses</NavButton>
            <NavButton to="/request-tutoring">Request Tutoring</NavButton>
        </NavBar>
    </div>
);

export default Header;