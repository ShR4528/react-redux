import { useSelector } from "react-redux";
import "./BookList.css";

const BookList = () => {
    const books = useSelector((state) => state.books);

    return (
        <div
            className="app-block book-list">

            <h2>
                Book List
            </h2>
        </div>
    );
};

export default BookList;
