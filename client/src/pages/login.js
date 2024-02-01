import React, { useState } from "react";
import '../App.css';
import axios from 'axios';
 
const Login = () => {
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/login', {username, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
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