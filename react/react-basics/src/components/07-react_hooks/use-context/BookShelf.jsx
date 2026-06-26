import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookContextProvider from "./context/BookShelfContext";

const BookShelf = () => {
  return (
    <>
      <h3>練習問題</h3>
      <p>
        BookListコンポーネント内の各項目をBookItemコンポーネントに分離しましょ
        う。
      </p>
      <p>
        タイトルをダブルクリックするとタイトルを変更できるようにしましょう。
      </p>
      <p>
        ReducerとContextを使って本のリストをグローバルなステートにしましょう。
      </p>
      <hr />
      <BookContextProvider>
        <BookList />
        <BookForm />
      </BookContextProvider>
    </>
  );
};

export default BookShelf;
