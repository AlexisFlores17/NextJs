import { PokemonsResponse, SimplePokemon,PokemonGrid } from "@/pokemons";
import { notFound } from "next/navigation";


const getPokemons = async(limit=20, offset=0): Promise<SimplePokemon[]> => {
 const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
 .then( res => res.json());

 const pokemons = data.results.map( pokemon => ({
  id: pokemon.url.split('/').at(-2)! ,
  name: pokemon.name,
 }))
  // throw new Error("Error prueba");
  // throw notFound()
 return pokemons;
}


export const metadata = {
 title: 'Favoritos',
 description: 'listado de pokemons',
};



export default async function NamePage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">Pokémons favoritos <small className="text-blue-500">globalState</small></span>

      <PokemonGrid pokemons={[]} />
        
    </div>
  );
}