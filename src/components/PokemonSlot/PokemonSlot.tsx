import type { Pokemon } from "../../types/pokemon";

interface PokemonSlotProps {
    pokemon: Pokemon;
}

export default function PokemonSlot({ pokemon }: PokemonSlotProps) {
    return (
        <div className="aspect-square border-8 border-gray-200 bg-gray-100 flex flex-col items-center justify-center relative">

            <img
                src={pokemon.spriteRegular}
                alt={pokemon.name}
                className="w-20 h-20 object-contain"
            />

            <span className="text-xs text-gray-500">
                #{String(pokemon.id).padStart(4, "0")}
            </span>

        </div>
    );
}