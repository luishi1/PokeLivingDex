import { useEffect, useState } from "react";
import type { Pokemon } from "./types/pokemon";
import { getAllPokemon } from "./services/pokeapi";
import BoxGrid from "./components/Box/BoxGrid";

function App() {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadPokemon() {
            try {
                setLoading(true);

                const data = await getAllPokemon();

                setPokemon(data);
            } catch (error) {
                console.error(error);
                setError("No se pudieron cargar los Pokémon.");
            } finally {
                setLoading(false);
            }
        }

        loadPokemon();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">
                    Cargando Pokémon...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500">
                    {error}
                </p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white text-black">

            {/* HEADER */}
            <header className="border-b border-gray-300">

                <div className="max-w-7xl mx-auto px-5 py-3">

                    {/* Título y botones */}
                    <div className="flex items-center justify-between">

                        <div>
                            <h1 className="text-3xl font-black tracking-tight">
                                <span>POKE</span>
                                <span className="text-green-600">
                                    LIVING
                                </span>
                                <span>DEX</span>
                            </h1>

                            <p className="text-sm">
                                capturados 0000/1025
                            </p>
                        </div>

                        <div className="flex gap-2">

                            <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                                🌑 Oscuro
                            </button>

                            <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                                ＋ Agregar
                            </button>

                            <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                                🔄 Compartir
                            </button>

                            <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                                📊 Estadísticas
                            </button>

                        </div>

                    </div>

                    {/* Selector de Dex */}
                    <div className="flex mt-2">

                        <button className="bg-white border border-gray-300 rounded-l px-3 py-1">
                            Living Dex
                        </button>

                        <button className="bg-gray-200 border border-gray-300 rounded-r px-3 py-1">
                            ☆ Shiny Living Dex
                        </button>

                    </div>

                    {/* Herramientas */}
                    <div className="flex gap-2 mt-3 mb-3">

                        <input
                            type="text"
                            placeholder="🔍 Buscar por # o por nombre..."
                            className="border border-gray-300 rounded px-2 py-1 w-64"
                        />

                        <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                            ☆ Shiny
                        </button>

                        <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                            ↪ Surtido
                        </button>

                        <button className="border border-gray-300 rounded px-3 py-1 hover:bg-gray-100">
                            ☰ Formas
                        </button>

                    </div>

                </div>

            </header>

            {/* CAJAS */}
            <section className="max-w-7xl mx-auto px-5 py-5">

                <BoxGrid pokemon={pokemon} />

            </section>

        </main>
    );
}

export default App;