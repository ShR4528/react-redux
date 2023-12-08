import { useSelector } from "react-redux";
import "./BookList.css";

const BookList = () => {
    const books = useSelector((state) => state.books);

    return (
        <div
            className="app-block book-list">
            <h2>BookList</h2>
            {books.lenght === 0 ? (

                <p>No books avalible</p>

            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}.  {book.title} by <strong>{book.author}</strong>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};




export default BookList;