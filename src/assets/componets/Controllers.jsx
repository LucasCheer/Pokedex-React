// Funciones

export async function getDataPokemon(id) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return {
        id: data.id,
        name: data.name,
        sprite_front: data.sprites.other["official-artwork"].front_default,
        sprite_back: data.sprites.back_default,
        type: data.types[0].type.name,
        peso: data.weight,
        altura: data.height,
      };
    } catch (error) {
      console.error(error);
      return {
        id: null,
        name: "Pokemon invalid",
        sprite_front: null,
        sprite_back: null,
        type: null,
        peso: null,
        altura: null,
      }
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