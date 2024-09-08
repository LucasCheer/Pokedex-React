// Funciones

export async function getDataPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
  
      return {
        id: data.id,
        name: data.name,
        sprite_front: data.sprites.front_default,
        sprite_back: data.sprites.back_default,

      };
    } catch (error) {
      console.error(error);
    }
  }



export function getAllData() {
    const id = getInputSearch(); // Obtén el valor del input
    return getDataPokemon(id) // Usa el valor obtenido para la segunda función
        .then(pokemonData => {
            if (pokemonData) {
                console.log(pokemonData); // Puedes usar los datos aquí
                return pokemonData; // Devuelve los datos para usarlos donde necesites
            } else {
                console.log("No se encontró el Pokémon");
                return null;
            }
        });
}