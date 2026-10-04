import type { Pokemon } from "../../types/pokemon";
import { useDexStore } from "../../store/dexStore";

interface PokemonSlotProps {
  pokemon: Pokemon;
}

export default function PokemonSlot({ pokemon }: PokemonSlotProps) {
  const isCaptured = useDexStore((state) => state.isCaptured(pokemon.id));

  const toggleCaptured = useDexStore((state) => state.toggleCaptured);

  return (
    <button
      onClick={() => toggleCaptured(pokemon.id)}
      className={`
        aspect-square
        border-8
        border-gray-200
        flex
        flex-col
        items-center
        justify-center
        relative
        cursor-pointer
        transition

        ${isCaptured ? "bg-green-400" : "bg-gray-100 hover:bg-gray-200"}
    `}
    >
      <img
        src={pokemon.spriteRegular}
        alt={pokemon.name}
        className={`
        w-20
        h-20
        object-contain
        transition
    `}
      />

      <span className="text-xs text-gray-500">
        #{String(pokemon.id).padStart(4, "0")}
      </span>

    </button>
  );
}
