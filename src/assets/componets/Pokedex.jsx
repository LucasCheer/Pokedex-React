import React, { useState } from 'react';
import '../styles/Pokedex.css';
import { getDataPokemon } from './controllers';

export default function Pokedex() {
  // Definir un único estado para los datos del Pokémon
  const [pokemonData, setPokemonData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!inputValue.trim()) {
      setError('Please enter a valid Pokémon name or ID.');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const data = await getDataPokemon(inputValue.toLowerCase());
      if (data) {
        setPokemonData({
          id: data.id,
          name: capitalize(data.name),
          sprite_front: data.sprite_front,
          sprite_back: data.sprite_back,
          type: data.type,
          peso: data.peso,
          altura: data.altura,
        });
      } else {
        setError('Pokémon not found.');
        setPokemonData(null);
      }
    } catch (err) {
      setError('An error occurred while fetching the Pokémon data.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <main className="main-pokedex">
      <div className="container-src">
        <input
          type="text"
          placeholder="Enter ID or Name of Pokémon..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        pokemonData && (
          <main className="pokedex">
            <figure className="img-container">
              <img src={pokemonData.sprite_front} alt={pokemonData.name} />
            </figure>
            <div className="container-info">
              <div className="title-pokemon">
                <h2 className="name-pokemon">{pokemonData.name}</h2>
                <p className="pokemon-id">#{pokemonData.id}</p>
              </div>
              <p className="info">
                <span className="stat">Type:</span> <span>{pokemonData.type}</span>
              </p>
              <p className="info">
                <span className="stat">Height:</span>{' '}
                <span>{pokemonData.altura / 10} m</span>
              </p>
              <p className="info">
                <span className="stat">Weight:</span>{' '}
                <span>{pokemonData.peso / 10} kg</span>
              </p>
            </div>
          </main>
        )
      )}
    </main>
  );
}
