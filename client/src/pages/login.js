import React, { useState } from "react";
import {Navigate} from "react-router-dom";
import '../App.css';
 
const Login = () => {
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    const [redirect, setRedirect] = useState(false);
    
    async function login(event) {
        event.preventDefault();
        const respone = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
        });
        if(respone.ok) {
            setRedirect(true);
        }
        else {
            alert("Wrong credentials.");
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        required
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        required
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="login">Login</button>
            </form>
        </div>
    );
}
 
export default Login;