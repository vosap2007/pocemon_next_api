import Link from "next/link";

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");

  return response.json();
}

const PokemonsPage = async () => {
  const pokemons = await getPokemons();

  console.log("pokemons", pokemons.results);

  return (
    <>
      <h1>Pokemon Page</h1>
      <ul>
        {pokemons.results.map((pokemon: any) => {
          return (
            <li key={pokemon.name}>
              <Link href={`/pokemons/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PokemonsPage;
