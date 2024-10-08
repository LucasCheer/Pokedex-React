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
  const [pokemonAltura, setPokemonAltura] = useState(''); 
  // Función para la busqueda
  const handleSearch = async () => {
    const input = document.getElementById('input').value.toLowerCase(); // Obtener el ID
    const pokemonData = await getDataPokemon(input);
    if (pokemonData) {
      setPokemonID(pokemonData.id);
      setPokemonName(pokemonData.name);
      setPokemonImg(pokemonData.sprite_front);
      setPokemonImgBack(pokemonData.sprite_back);
      setPokemonType(pokemonData.type);
      setPokemonPeso(pokemonData.peso);
      setPokemonAltura(pokemonData.altura);
    }
  };
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const pokemonNameCapitalize = capitalize(pokemonName);

  return (
    <main className='main-pokedex'>
      <div className='container-src'>
        <input id='input' type="text" placeholder='Enter ID or Name of Pokemon..' />
        <button onClick={handleSearch}>Search</button>
      </div>
      <main className='pokedex'>
        <figure className='img-container'>
          <img src={pokemonImg} alt={pokemonName}/>
        </figure>
        <div className='container-info'>
          <div className='title-pokemon'>
            <h2 className='name-pokemon'>{pokemonNameCapitalize}</h2>
            <p className='pokemon-id'>#{pokemonID}</p>
          </div>
          <p className='info'><span className='stat'>Type</span><span>{pokemonType}</span></p>
          <p className='info'><span className='stat'>Height</span> <span>{pokemonAltura / 10} m</span></p>
          <p className='info'><span className='stat'>Weight</span> <span>{pokemonPeso / 10} kg</span></p>
        </div>
      </main>
    </main>
  );
}
