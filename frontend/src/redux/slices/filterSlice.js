import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    author: '',
    onlyFavorite: false
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // You can mutate state thanks to Immer Library
            state.title = action.payload;
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },
        setOnlyFavorite: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        resetFilter: () => {
            return initialState;
        }
    }

});

export const { setTitleFilter, resetFilter, setAuthorFilter, setOnlyFavorite } = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;




