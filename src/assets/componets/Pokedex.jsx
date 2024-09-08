import React, { useState, useEffect } from 'react';
import '../styles/Pokedex.css';
import { getDataPokemon } from './controllers';

export default function Pokedex() {
  // Defino un estado para cada componente
  const [pokemonID, setPokemonID] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImg, setPokemonImg] = useState('');
  const [pokemonImgBack, setPokemonImgBack] = useState('');

  // Función para la busqueda
  const handleSearch = async () => {
    const input = document.getElementById('input').value; // Obtener el ID
    const pokemonData = await getDataPokemon(input);
    if (pokemonData) {
      setPokemonID(pokemonData.id);
      setPokemonName(pokemonData.name);
      setPokemonImg(pokemonData.sprite_front);
      setPokemonImgBack(pokemonData.sprite_back);
    }
  };

  return (
    <>
      <div className='container-src'>
        <input id='input' type="text" />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <main className='pokedex'>
        <figure>
          <img src={pokemonImg} alt={pokemonName}/>
          <img src={pokemonImgBack} alt={pokemonName} />
        </figure>
        <div className='container-info'>
          <p>#{pokemonID}</p>
          <h2 className='name-pokemon'>{pokemonName}</h2>
        </div>
      </main>
    </>
  );
}
