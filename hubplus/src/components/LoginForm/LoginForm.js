import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'
import { FaLock  } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; // Import useHistory hook

const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); //Initialize useHistory hook

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
            const { token, id } = response.data;
            console.log('Login successful:', token);
            console.log('ID', id);

            localStorage.setItem('token', token);
            // Update the parent component about the login state
            onLogin(token, id);

            setLoading(false);
            setEmail('');
            setPassword('');
            setError('');

            navigate(`/profile/${id}`);
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
            setLoading(false);
        }
    };


    return (
            <div className='container'>
                <div className="wrapper">
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input 
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <CiMail className="icon" />
                        </div>
                        <div className="input-box">
                            <input 
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <FaLock className="icon"/>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" disabled={loading}>Login</button>

                        {error && <p className="error-message">{error}</p>}

                        <div className="register-link">
                            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default LoginForm