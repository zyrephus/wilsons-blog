import React from "react";
import { Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/Book';
import LoginIcon from '@mui/icons-material/Login';
 
const Navbar = () => {
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                    component={Link}
                    to="./"
                />
                <BottomNavigationAction
                    label="About"
                    value="about"
                    icon={<InfoIcon />}
                    component={Link}
                    to="/about"
                />
                <BottomNavigationAction
                    label="Contact"
                    value="contact"
                    icon={<EmailIcon />}
                    component={Link}
                    to="/contact"
                />
                <BottomNavigationAction
                    label="Blogs"
                    value="blogs"
                    icon={<BookIcon />}
                    component={Link}
                    to="/blogs"
                />
                <BottomNavigationAction
                    label="Login"
                    value="login"
                    icon={<LoginIcon />}
                    component={Link}
                    to="/sign-up"
                />
            </BottomNavigation>
        </>
    );
};
 
export default Navbar;