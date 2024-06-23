// Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters

const Profile = () => {
    const { id } = useParams(); // Extract 'id' parameter from the URL
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/users/${id}`);
                setUserData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching user data');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [id]); // Fetch data whenever 'id' changes

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!userData) return null; // Or some default message

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            {/* Add more fields as per your API response */}
        </div>
    );
};

export default Profile;
