import type { Pokemon } from "../../types/pokemon";

interface PokemonSlotProps {
  pokemon: Pokemon;
}

export default function PokemonSlot({pokemon} : PokemonSlotProps) {
  return (
    <div className="aspect-square border-8 border-gray-200 bg-gray-100 flex items-center justify-center">
      <img 
      src={pokemon.spriteRegular} 
      alt={pokemon.name} 
      className = "w-20 h-20 object-contain"
      />
    </div>
  );
}