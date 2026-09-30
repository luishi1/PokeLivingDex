import type { Pokemon } from "../types/pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const SPRITE_URL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

interface PokemonListResponse {
    results: {
        name: string;
        url: string;
    }[];
}

export async function getAllPokemon(): Promise<Pokemon[]> {
    const response = await fetch(`${API_URL}?limit=1025`);

    if (!response.ok) {
        throw new Error("No se pudo obtener la lista de Pokémon.");
    }

    const data: PokemonListResponse = await response.json();

    return data.results.map((pokemon, index) => {
        const id = index + 1;

        return {
            id,
            name: pokemon.name,
            spriteRegular: `${SPRITE_URL}/${id}.png`,
            spriteShiny: `${SPRITE_URL}/shiny/${id}.png`,
        };
    });
}