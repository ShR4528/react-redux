import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';




const initialState = {
    books: [],
    isLoadingViaApi: false,
    errorMsg: ''
};


export const fetchBook = createAsyncThunk('books/fetchBook',
    async (url, thunkApi) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            thunkApi.dispatch(setError(error.message));
            throw error;
        }

    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
        },
        toggleFavorite: (state, action) => {
            state.books.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });

        },
    },
    extraReducers: {
        [fetchBook.pending]: (state) => {
            state.isLoadingViaApi = true;
        },
        [fetchBook.fulfilled]: (state, action) => {
            state.isLoadingViaApi = false;
            if (action.payload.title && action.payload.author) {
                state.books.push(createBookWithID(action.payload, "Api"));
            }
        },
        [fetchBook.rejected]: (state) => {
            state.isLoadingViaApi = false;
        }
    }

});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;




export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;