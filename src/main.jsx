import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/componets/Header'
import Footer from './assets/componets/footer' 
import Pokedex from './assets/componets/Pokedex'
import './index.css'

const url = 'https://pokeapi.co/api/v2/pokemon/';
function getDataPokemon(id){
  fetch(`${url}/${id} `)
    .then(response => response.json())
    .then(data => {
      console.log(data.name)
      console.log(data.id)
    })
    .catch(error => {
      console.error("Error fetching advice:", error);})
}
getDataPokemon('78');



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Pokedex namePokemon={"Lucas"} numPokemon={45}/>
    <Footer/>
  </StrictMode>,
)
