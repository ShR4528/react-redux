import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';


const initialState = [];

// Создаем срез (slice) для состояния книг с редюсерами и экшенами
const booksSlice = createSlice({

    // Называем срез
    name: 'books',

    // Определяем начальное состояние
    initialState,

    // Определяем функции редюсеров для изменения состояния
    reducers: {

        // Добавляем новую книгу в массив состояния
        addBook: (state, action) => {
            state.push(action.payload);
        },

        // Удаляем книгу по id из массива состояния
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },

        // Переключаем статус "избранное" для книги по id
        toggleFavorite: (state, action) => {
            state.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });

        },


    }
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:4000/random-book');
        if (res?.data?.title && res?.data?.author) {
            dispatch(addBook(createBookWithID(res.data, 'API')));
        }
    } catch (error) {
        console.log('Error fetchig random book', error);
    }

};


export const selectBooks = (state) => state.books;

export default booksSlice.reducer;