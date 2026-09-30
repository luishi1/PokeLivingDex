import type { Pokemon } from "../types/pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemon(id: number): Promise<Pokemon> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`No se pudo obtener el Pokemon con id ${id}`);
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    spriteRegular: data.sprites.front_default,
    spriteShiny: data.sprites.front_shiny,
  };
}

export async function getPokemonRange(
  start: number,
  end: number,
): Promise<Pokemon[]> {
  const requests = [];

  for (let id = start; id <= end; id++) {
    requests.push(getPokemon(id));
  }

  return Promise.all(requests);
}
