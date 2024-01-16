import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';
import { setError } from './errorSlice';




const initialState = {
    books: [],
    errorMsg: ''
};


export const fetchBook = createAsyncThunk('books/fetchBook',
    async (url, thunkApi) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            thunkApi.dispatch(setError('error.message'));
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

        // Удаляем книгу по id из массива состояния
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },

        toggleFavorite: (state, action) => {
            state.books.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });

        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                state.push(createBookWithID(action.payload, "Api"));
            }
        });

    }
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;




export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;