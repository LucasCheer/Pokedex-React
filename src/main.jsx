import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/componets/Header'
import Footer from './assets/componets/Footer' 
import Pokedex from './assets/componets/Pokedex'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Pokedex namePokemon={"Lucas"} numPokemon={45}/>
    <Footer/>
  </StrictMode>,
)
