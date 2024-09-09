import React, { useState, useEffect } from 'react';
import '../styles/Pokedex.css';
import { getDataPokemon } from './controllers';

export default function Pokedex() {
  // Defino un estado para cada componente
  const [pokemonID, setPokemonID] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImg, setPokemonImg] = useState('');
  const [pokemonImgBack, setPokemonImgBack] = useState('');
  const [pokemonType, setPokemonType] = useState('');
  const [pokemonPeso, setPokemonPeso] = useState('');
  // Función para la busqueda
  const handleSearch = async () => {
    const input = document.getElementById('input').value; // Obtener el ID
    const pokemonData = await getDataPokemon(input);
    if (pokemonData) {
      setPokemonID(pokemonData.id);
      setPokemonName(pokemonData.name);
      setPokemonImg(pokemonData.sprite_front);
      setPokemonImgBack(pokemonData.sprite_back);
      setPokemonType(pokemonData.type);
      setPokemonPeso(pokemonData.peso);
    }
  };

  return (
    <>
      <div className='container-src'>
        <input id='input' type="text" />
        <button onClick={handleSearch}>Search</button>
      </div>
      <main className='pokedex'>
        <figure className='img-container'>
          <img src={pokemonImg} alt={pokemonName}/>
        </figure>
        <div className='container-info'>
          <h2 className='name-pokemon'>Name: {pokemonName}</h2>
          <p>PokemonID: #{pokemonID}</p>
          <p>Type: {pokemonType}</p>
          <p>Weight: {pokemonPeso} Hectograms</p>
        </div>
      </main>
    </>
  );
}
