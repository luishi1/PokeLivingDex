import type { Pokemon } from "../../types/pokemon";
import PokemonSlot from "../PokemonSlot/PokemonSlot";

interface BoxProps {
    name: string;
    pokemon: Pokemon[];
    shinyMode: boolean;
    mixedShiny: Set<number>;
}

export default function Box({
    name,
    pokemon,
    shinyMode,
    mixedShiny
}: BoxProps) {

    return (
        <section>
            <h2 className="text-sm text-black-400 uppercase mb-1">
                {name}
            </h2>

            <div className="grid grid-cols-6 gap-2 bg-gray-200 p-2">

                {pokemon.map((poke) => (
                    <PokemonSlot
                        key={poke.id}
                        pokemon={poke}
                        shinyMode={shinyMode}
                        mixedShiny={mixedShiny}
                    />
                ))}

            </div>
        </section>
    );
}