import { createContext, useContext, useReducer } from "react";

const BookContext = createContext();
const BookDispatchContext = createContext();

const initialBooks = [
  { id: 1, title: "ハリー・ポッター"},
  { id: 2, title: "吾輩は猫である"},
  { id: 3, title: "銀河鉄道の夜"},
];

const reducer = (books, action) => {
  switch (action.type) {
    case "add":
      return [...books, action.book];
    case "delete":
      return books.filter((book) => action.id !== book.id);
    case "update":
      return books.map((book) =>
        action.book.id === book.id ? action.book : book,
      );
    default:
      return books;
  }
};

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(reducer, initialBooks);

  return (
    <BookContext.Provider value={books}>
      <BookDispatchContext.Provider value={dispatch}>
        {children}
      </BookDispatchContext.Provider>
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
export const useDispatchBook = () => useContext(BookDispatchContext);

export default BookContextProvider;
