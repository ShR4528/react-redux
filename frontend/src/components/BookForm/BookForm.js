import './BookForm.css';
import { FaSpinner } from 'react-icons/fa';
import { setError } from '../../redux/slices/errorSlice';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addBook, fetchBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import createBookWithID from '../../utils/createBookWithID';





const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length);
        const randomBook = booksData[randomIndex];
        dispatch(addBook(createBookWithID(randomBook, 'random')));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {

            dispatch(addBook(createBookWithID({ title, author }, 'manual')));
            setTitle('');
            setAuthor('');
        } else {
            dispatch(setError('Add author and title'));
        }
    };



    const handleAddRandomByApi = async () => {
        try {
            setIsLoading(true);
            await dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
        } finally {
            setIsLoading(false);
        }




    };
    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type='text' id="title" value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input type='text' id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>Add Random</button>

                <button type="button" onClick={handleAddRandomByApi} disabled={isLoading}>
                    {isLoading ? (
                        <>  <span>Loading...</span>
                            <FaSpinner className='spinner' />
                        </>
                    ) : 'Add random Api'}

                </button>

            </form>
        </div>
    );
};



export default BookForm;
