import React, { useState } from "react";
import '../App.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
const Login = () => {
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    
    return (
        <>
            <div id="loginBox">
                <Box
                    display="flex" // Enables flexbox
                    flexDirection="column" // Stack children vertically
                    alignItems="center"
                    sx={{
                        '& > :not(style)': { m: 1, width: '300px' },
                        '& label.MuiInputLabel-root': {
                            color: 'white', // Color of the label when unfocused
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Color of the border
                                borderWidth: '2px',
                            },
                            '&:hover fieldset': {
                                borderColor: 'orange', // Color of the border on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#B16CFF', // Color of the border when the TextField is focused
                            },
                            '& input': {
                                color: 'white', // Color of the input text
                            },
                        },
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <h2 id="loginHeader">Login</h2>
                    <TextField
                        id="outlined-username"
                        label="Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <TextField
                        id="outlined-password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Stack
                        spacing={2}
                        direction="row"
                        display="flex" // Enables flexbox
                        justifyContent="center"
                        sx={{
                            '& > :not(style)': { m: 1, width: '300px' },
                        }}
                    >
                        <Button 
                            variant="contained"
                            sx={{
                                backgroundColor: 'orange', // Background color for the normal state
                                color: 'white', // Text color
                                '&:hover': {
                                    backgroundColor: '#B16CFF', // Background color on hover
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Stack>
                </Box>
            </div>
        </>
    );
}
 
export default Login;