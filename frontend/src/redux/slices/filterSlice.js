import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload };
        }
    }

});

export default filterSlice.reducer;