import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithID from '../../utils/createBookWithID';




const initialState = {
    books: [],
    errorMsg: ''
};


export const fetchBook = createAsyncThunk('books/fetchBook',
    async () => {
        const res = await axios.get('http://localhost:4000/random-book');
        return res.data;
    }
);


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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            if (action.payload.title && action.payload.author) {
                state.push(createBookWithID(action.payload, "Api"));
            }
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            console.log("Error fetching the book");
        });
    }
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;




export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;