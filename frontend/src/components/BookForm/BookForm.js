import './BookForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/actionCreators';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthour] = useState('');
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && author) {
            const book = {
                title,
                author,
                id: uuidv4()
            };
            dispatch(addBook(book));
            setTitle('');
            setAuthour('');
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
                    <input type='text' id="author" value={author} onChange={(e) => setAuthour(e.target.value)} />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default BookForm;
