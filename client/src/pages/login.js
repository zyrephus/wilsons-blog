import React, { useState } from "react";
import '../App.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 
const Login = () => {
    const history = useNavigate();

    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post("https://localhost:4000/login", { username, password });
            if (res.data === "exist") {
                history("/blogs");
            } else if (res.data === "notexist") {
                alert("User does not exist.");
            }
        } catch (error) {
            alert("Wrong password.");
            console.log(error);
        }
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