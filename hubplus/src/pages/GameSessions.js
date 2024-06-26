import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './GameSessions.css';

const GameSessions = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [token] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/games/${id}`, {
                    headers: {
                        'Authorization': `${token}`
                    }
                });
                setGame(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching game details');
                setLoading(false);
            }
        };

        fetchGame();
    }, [id,token]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!game) return null;

    return (
        <div className="game-detail-container">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
            <p><strong>Category:</strong> {game.category}</p>
            {game.imageURL && <img src={game.imageURL} alt={game.name} className="game-image" />}
            {/* Add more details as needed */}
        </div>
    );
};

export default GameSessions;
