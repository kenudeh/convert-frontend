import React, { useState } from "react";
import api from "../../../api";  // Importing the Axios instance
import { useNavigate, Link } from "react-router-dom";
import './LoginAndSignup.css'
import logo from "../../../Images/logo.png"


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Use the `api` instance to make the login request
            const response = await api.post("/api/auth/jwt/create/", {
                username,
                password,
            });

            // Store the access and refresh tokens in localStorage
            const { access, refresh } = response.data;
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);

            // Redirect to the dashboard
            navigate("/dashboard");
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <main className="login-container">
            <div className="brand">
                <img src={logo} alt="convert logo" />
                <p>Convert</p>
            </div>
            
            <h2>Sign in to your account</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="create-account-text">
                Don't have an account?{" "}
                <Link to="/signup" className="create-account-link">
                    Create one here
                </Link>
            </p>
            <div className="copyright">
                <p>copyright &copy; 2025 IdeasRocket</p>
            </div>
        </main>
    );
};
 
export default Login;