import type { Pokemon } from "../../types/pokemon";
import Box from "./Box";

interface BoxGridProps {
    pokemon: Pokemon[];
}

export default function BoxGrid({ pokemon }: BoxGridProps) {

    const boxes: Pokemon[][] = [];

    for (let i = 0; i < pokemon.length; i += 30) {
        boxes.push(pokemon.slice(i, i + 30));
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {boxes.map((boxPokemon, index) => {
                const start = index * 30 + 1;
                const end = (index + 1) * 30;

                return (
                    <Box
                        key={index}
                        name={`Caja ${start} -${end}`}
                        pokemon={boxPokemon}
                    />
                );
            })}

        </div>
    );
}