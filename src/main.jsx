import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/componets/Header'
import Pokedex from './assets/componets/Pokedex'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Pokedex/>
  </StrictMode>,
)
