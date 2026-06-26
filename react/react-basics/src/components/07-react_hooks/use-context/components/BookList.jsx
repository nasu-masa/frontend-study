import BookItem from "./BookItem";
import { useBook } from "../context/BookShelfContext";

const BookList = () => {
  const books = useBook();
  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book.id} book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
