import { useDispatch, useSelector } from "react-redux";
import "./BookList.css";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavorite } from "../../redux/slices/filterSlice";


const BookList = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavorite);


    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };


    const filterBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());
        const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
        return matchesTitle && matchesAuthor && matchesFavorite;

    });





    return (
        <div
            className="app-block book-list">
            <h2>BookList</h2>
            {books.length === 0 ? (

                <p>No books avalible</p>

            ) : (
                <ul>
                    {filterBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}.  {book.title} by <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span onClick={() => handleToggleFavorite(book.id)}>
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar className="star-icon" />
                                    )}
                                </span>
                                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>

            )}
        </div>
    );

};




export default BookList;
