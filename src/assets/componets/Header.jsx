import '../styles/Header.css'
import pokedexLogo from '../img/pokedex-logo.svg';
export default function Header(){
    return(
        <>
        <header>
            <img src={pokedexLogo} alt="Logo Pokedex" />
        </header>
        </>
    )
}