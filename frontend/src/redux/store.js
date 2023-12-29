import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import filterSlice from './slices/filterSlice';


const store = configureStore({
    reducer: {
        // Передаем срез книг и срез фильтра

        books: booksReducer,
        filter: filterSlice
    },
});

export default store;