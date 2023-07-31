import usePokemonSearchResult from "@/hooks/usePokemonSearchResult";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const { pokemon } = usePokemonSearchResult(search);
  return (
    <main className={`p-20 font-mono`}>
      <div className="grid justify-center">
        <div>
          <img src="logo.png" className="h-36 mx-auto" />
        </div>
        <input
          spellCheck={false}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 px-3 focus:outline-accent border-2s h-8 text-secondary"
        />
        <div className="text-accent">
          {pokemon && (
            <div className="mt-20">
              <h1 className="text-4xl font-bold text-center capitalize">
                #{pokemon.id}
                {` `}
                {pokemon.name}
              </h1>
              <img
                src={pokemon.sprites.front_default}
                className="h-64 mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
