import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'
import { FaUser, FaLock} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const SignUpForm = () => {  

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/api/signup', {
                name,
                lastname,
                email,
                password
            });
            console.log('Signup successful:', response.data);
            setLoading(false);
            // Optionally handle successful signup (e.g., redirect to login)
        } catch (err) {
            setError('Signup failed. Please try again.');
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };



    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange}required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={handleChange} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} required />
                    <CiMail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to the terms & conditions</label>
                </div>

                <button type="submit">Sign Up</button>

                <div className="register-link">
                    <p>Already have an account? <a href="#">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm