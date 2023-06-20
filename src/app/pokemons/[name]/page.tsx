import Like from "./like";

/* eslint-disable @next/next/no-img-element */
async function getPokemon(name: any) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return response.json();
}

const PokemonPage = async ({ params }: any) => {
  const pokemon = await getPokemon(params.name);

  return (
    <>
      <h1>Pokemon Page</h1>
      <p>name: {pokemon.name}</p>
      <p>base_experience: {pokemon.base_experience}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Like />
      {/* <ul>
        {pokemons.results.map((pokemon: any) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul> */}
    </>
  );
};

export default PokemonPage;
