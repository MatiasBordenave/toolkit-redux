import { configureStore } from '@reduxjs/toolkit'
import { counterReducer }   from './slices/counter'
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonSlice,
  },
})