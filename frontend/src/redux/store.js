import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './slices/booksSlice';
import filterSlice from './slices/filterSlice';
import errorReducer from './slices/errorSlices';


const store = configureStore({
    reducer: {
        // Передаем срез книг и срез фильтра

        books: booksReducer,
        filter: filterSlice,
        error: errorReducer
    },
});

export default store;