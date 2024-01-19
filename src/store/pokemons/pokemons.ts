import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState{
   favorites: {[key:string]:SimplePokemon}
}

// const getInitialState = ():PokemonsState =>{

// if( typeof localStorage ==='undefined' ) return {};
//   const favorites = JSON.parse( localStorage.getItem("favorite-pokemons") ?? "{}");

//   return favorites;
// }

const initialState:PokemonsState = {
  favorites:{}
  // ...getInitialState()
    // '1':{id:'1', name:'bulbasaur'},
    // '4':{id:'4', name:'charmander'},
    // '6':{id:'6', name:'charizard'},
}

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
        
        const pokemon = action.payload;
        const {id} = pokemon;

        if(!!state.favorites[id]) {
          delete state.favorites[id];
          // return
        } else {

          state.favorites[id] = pokemon;
        }

        localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
        
    },
    setFavoritePokemons(state,action:PayloadAction<{[key:string]:SimplePokemon}>){
      state.favorites = action.payload
    } 
  }
});

export const { toggleFavorite,setFavoritePokemons} = pokemonSlice.actions

export default pokemonSlice.reducer