import { useState } from "react";
import { useDispatchBook } from "../context/BookShelfContext";

const BookForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const dispatch = useDispatchBook();

  const newBook = (e) => {
    e.preventDefault();
    dispatch({
      type: "add", book: {
        id: Date.now(),
        title: enteredTitle,
      }
    });
    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={newBook}>
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
