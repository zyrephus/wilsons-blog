import React from "react";
import { Link } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import LoginIcon from '@mui/icons-material/Login';

// Ripple color
const theme = createTheme({
    components: {
      MuiButtonBase: {
        styleOverrides: {
          // Override the default ripple color
          root: {
            '& .MuiTouchRipple-root': {
              color: '#B16CFF',
            },
          },
        },
      },
    },
  });
 
const Navbar = () => {
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <BottomNavigation
                    sx={{
                        width: '100%',
                        height: '70px',
                        borderBottom: '2px solid #B16CFF',
                        backgroundColor: '#151515',
                        '& .MuiBottomNavigationAction-root': {
                            '& .MuiSvgIcon-root': {
                                color: 'white', // Color of icon when not selected
                                marginBottom: '5px',
                            },
                            '&.Mui-selected .MuiSvgIcon-root': {
                                color: '#B16CFF', // Color when selected
                            },
                            '& .MuiBottomNavigationAction-label': {
                                color: 'white', // Color of labels
                            }
                        }
                    }} 
                    value={value} 
                    onChange={handleChange}
                >
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
                        label="Login"
                        value="login"
                        icon={<LoginIcon />}
                        component={Link}
                        to="/sign-up"
                    />
                </BottomNavigation>
            </ThemeProvider>
        </>
    );
};
 
export default Navbar;