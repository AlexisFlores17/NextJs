
import { pokemonAPI } from "../api";
import { Card, Grid, Row, Text} from "@nextui-org/react"
import { NextPage, GetStaticProps } from "next"
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from "@/interfaces";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props{
  pokemons: SmallPokemon[];
}

const HomePage:NextPage<Props> = ({pokemons}) => {

  return (
    <Layout>
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map( ((pokemon) =>(
            <PokemonCard 
              key={pokemon.id}
              pokemon={pokemon}
            />
          )))
        }
      </Grid.Container>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const {data} = await pokemonAPI.get<PokemonListResponse>("/pokemon?limit=151")

  const pokemons: SmallPokemon[]= data.results.map((poke,i)=>({
    ...poke,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg



  return {
    props: {
      pokemons
    }
  }
}

export default HomePage