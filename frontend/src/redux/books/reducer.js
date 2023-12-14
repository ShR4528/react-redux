
import * as a from './actionTypes';

const intialState = [];

const booksReducer = (state = intialState, action) => {
    switch (action.type) {
        case a.ADD_BOOK:
            return [...state, action.payload];
        case a.DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);
        case a.TOGGLE_FAVORITE:
            return state.map((book) => {
                if (book.id === action.payload) {
                    return { ...book, isFavorite: !book.isFavorite };
                }
                return book;
            });
        default:
            return state;


    }
};

export default booksReducer;