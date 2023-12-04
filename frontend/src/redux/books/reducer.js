
import * as a from './actionTypes';

const intialState = [];

const booksReducer = (state = intialState, action) => {
    switch (action.type) {
        case a.ADD_BOOK:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default booksReducer;