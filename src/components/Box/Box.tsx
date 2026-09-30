import type { Pokemon } from "../../types/pokemon";
import PokemonSlot from "../PokemonSlot/PokemonSlot";

interface BoxProps {
    name: string;
    pokemon: Pokemon[];
}

export default function Box({ name, pokemon }: BoxProps) {
    return (
        <section>
            <h2 className="text-sm text-red-400 uppercase mb-1">
                {name}
            </h2>

            <div className="grid grid-cols-6 gap-2 bg-gray-200 p-2">
                {pokemon.map((poke) => (
                    <PokemonSlot
                        key={poke.id}
                        pokemon={poke}
                    />
                ))}
            </div>
        </section>
    );
}