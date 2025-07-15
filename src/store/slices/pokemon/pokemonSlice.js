import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLodading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLodading = true;
        },
        setPokemons: ( state, action ) =>{
            console.log(action)
        }
    }
});


export const { increment } = pokemonSlice.actions;