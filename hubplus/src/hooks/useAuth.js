// hooks/useAuth.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.post('http://localhost:3001/api/auth/validate', {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setIsLoggedIn(true);
                setUser(response.data.user);
            })
            .catch(err => {
                console.error('Token validation failed', err);
                localStorage.removeItem('token');
            });
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
            setUser(response.data.user);
            setIsLoggedIn(true);
            localStorage.setItem('token', response.data.token);
        } catch (err) {
            throw new Error('Login failed. Please check your credentials and try again.');
        }
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    return { isLoggedIn, user, login, logout };
};

export default useAuth;
