import { useState } from "react";
import { useDispatchBook } from "../context/BookShelfContext";

const BookForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const dispatch = useDispatchBook();

  const addBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: enteredTitle,
    };

    dispatch({ type: "add", book: newBook });

    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={addBook}>
        <input
          type="text"
          value={enteredTitle}
          onChange={(e) => setEnteredTitle(e.target.value)}
          placeholder="本のタイトルを入力"
        />
        <button type="submit">追加</button>
      </form>
    </div>
  );
};

export default BookForm;
