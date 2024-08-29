import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import styled from 'styled-components';

// const NavButton = styled(Button)`
//     color: white;
//     text-transform: none; /* Keeps the text in its original case */
// `;

const Header = () => (
    <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center'}}>
            <Typography variant="h5" component="div" >
                Cal Poly Computer Engineering Tutoring
            </Typography>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/courses">Courses</Button>
            <Button component={Link} to="/request-tutoring">Request Tutoring</Button>
        </Toolbar>
    </AppBar>
);

export default Header;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: gold;
// `;

// const Wrapper = styled.section`
//     padding: .5em;
//     background: darkgreen;
//     border: 2px solid gold;
//     border-radius: 3px;
// `;

// const NavBar = styled.nav`
//     background-color: darkgray;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 3em;
// `;

// const NavButton = styled(Link)`
//     color: white;
//     text-decoration: none;
//     padding: 0 1em;
//     font-size: 1.2em;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 100%;
//     background-color: darkgray;
//     border: none;
//     outline: none;
//     cursor: pointer;
//     transition: background-color 0.3s;

//     &:hover {
//         background-color: gray;
//     }

//     &:first-child {
//         border-radius: 5px 0 0 5px;
//     }

//     &:last-child {
//         border-radius: 0 5px 5px 0;
//     }

//     &:not(:last-child) {
//         border-right: 1px solid white;
//     }
// `;

// const Header = () => (
//     <div>
//         <Wrapper>
//             <Title> Cal Poly Computer Engineering Tutoring</Title>
//         </Wrapper>
//         <NavBar>
//             <NavButton to="/">Home</NavButton>
//             <NavButton to="/courses">Courses</NavButton>
//             <NavButton to="/request-tutoring">Request Tutoring</NavButton>
//         </NavBar>
//     </div>
// );

// export default Header;