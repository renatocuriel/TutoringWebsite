import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>;
            <li><Link to="/courses">Courses</Link></li>;
            <li><Link to="/request-tutoring">Request Tutoring</Link></li>;
        </ul>
    </nav>
);

export default Header;