import '../styles/Pokedex.css'

export default function Pokedex(){
    return(
        <>
        <main className='pokedex'>
            <figure>
                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png" alt="Pokemon" />
            </figure>
            <div className='main-pokemon'>
                <h2 className='name-pokemon'>Pikachu</h2>
                <span className='num-pokemon'>#39</span>
                <p className='info-pokemon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur quam facere saepe! Debitis sequi aliquid, odit cumque recusandae dolorum?</p>
            </div>
        </main>
        </>
    )
}