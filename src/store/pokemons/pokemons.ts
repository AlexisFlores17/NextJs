import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState{
    [key:string]:SimplePokemon,
}

const initialState:PokemonsState = {
    '1':{id:'1', name:'bulbasaur'},
    '4':{id:'1', name:'charmander'},
    '6':{id:'1', name:'charizard'},
}

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        
        
    }
  }
});

export const {} = pokemonSlice.actions

export default pokemonSlice.reducer