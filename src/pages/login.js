import React from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
 
const Login = () => {
    const [name, setName] = React.useState('');
    return (
        <>
            <Box
                display="flex" // Enables flexbox
                flexDirection="row" // Stack children vertically
                justifyContent="center"
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
                <TextField
                    id="outlined-username"
                    label="Username"
                    value={name}
                    onChange={(event) => {
                    setName(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-password"
                    label="Password"
                    value={name}
                    onChange={(event) => {
                    setName(event.target.value);
                    }}
                />
            </Box>
            <Stack
                spacing={2}
                direction="row"
                display="flex" // Enables flexbox
                justifyContent="center"
                sx={{
                    '& > :not(style)': { m: 1, width: '620px' },
                }}
            >
                <Button variant="outlined">Login</Button>
            </Stack>
        </>
    );
}
 
export default Login;