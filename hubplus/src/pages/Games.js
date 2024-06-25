// Games.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Games.css'

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newGame, setNewGame] = useState({
    name: '',
    description: '',
    category: 'Other',
    imageURL: ''
  });

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
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGame({
      ...newGame,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/games', newGame);
      setGames([...games, response.data]);
      setShowForm(false);
      setNewGame({
        name: '',
        description: '',
        category: 'Other',
        imageURL: ''
      });
    } catch (error) {
      setError('Error creating new game');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (games.length === 0) return <p>No games found.</p>;

  return (

    <div>
      <h2>Games List</h2>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Create Game'}
      </button>
      {showForm && (
        <form onSubmit={handleFormSubmit} className="game-form">
          <input
            type="text"
            name="name"
            value={newGame.name}
            onChange={handleInputChange}
            placeholder="Game Name"
            required
          />
          <textarea
            name="description"
            value={newGame.description}
            onChange={handleInputChange}
            placeholder="Game Description"
            required
          ></textarea>
          <select
            name="category"
            value={newGame.category}
            onChange={handleInputChange}
            required
          >
            <option value="Sports">Sports</option>
            <option value="Arcade">Arcade</option>
            <option value="Board">Board</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Other">Other</option>
          </select>
          {/* <input
            type="text"
            name="imageURL"
            value={newGame.imageURL}
            onChange={handleInputChange}
            placeholder="Image URL"
          /> */}
          <button type="submit">Create</button>
        </form>
      )}
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
    </div>
  );
};

export default Games;
