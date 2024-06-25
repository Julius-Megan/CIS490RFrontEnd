// Games.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

    // Function to retrieve the JWT token from localStorage
    const getToken = () => {
        return localStorage.getItem('token');
    };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const token = getToken();
        if (!token) {
            throw new Error('No token available');
        }
        const response = await axios.get('http://localhost:3001/api/games', {
            headers: {
                'Authorization': `${token}`
            }
        });
        console.log('Fetched games:', response.data); // Log the fetched data
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching games');
        console.error('Error fetching games:', error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    console.log('Games state updated:', games); // Log when games state is updated
  }, [games]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (games.length === 0) return <p>No games found.</p>;

  return (
    <div className="games-container">
      {games.map((game) => (
        <div className="game-box" key={game.id}>
          <h2>{game.name}</h2>
          <p>{game.description}</p>
          <p><strong>Category:</strong> {game.category}</p>
          {game.imageURL && <img src={game.imageURL} alt={game.name} className="game-image" />}
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Games;
