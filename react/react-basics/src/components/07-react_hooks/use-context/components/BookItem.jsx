import { useState } from "react";
import { useDispatchBook } from "../context/BookShelfContext";

const BookItem = ({ book }) => {
  const [editBook, setEditBook] = useState(book.title);
  const [editing, setEditing] = useState(false);

  // editingId方式（グローバル管理）
  // const [editingId, setEditingId] = useState(null);
  // 「どのアイテムを編集中か」を1つのIDで管理する設計のとき。
  // 例: editingId === book.id ならその行だけ編集モードにする

  const dispatch = useDispatchBook();

  const updateBook = (e) => {
    e.preventDefault();
    dispatch({
      type: "update",
      book: { ...book, title: editBook },
    });
    setEditing(false);
  };

  const cancelEdit = () => {
    setEditBook(book.title);
    setEditing(false);
  };

  const toggleEditMode = () => {
    setEditing(true);
  };

  const handleChange = (e) => {
    setEditBook(e.target.value);
  };

  const complete = (id) => {
    dispatch({ type: "delete", id: id });
  };

  return (
    <div>
      <button
        onClick={() => {
          complete(book.id);
        }}
      >
        完了
      </button>
      <form onSubmit={updateBook} style={{ display: "inline" }}>
        {editing ? (
          <>
            <input type="text" value={editBook} onChange={handleChange} />
            <button type="submit">保存</button>
            <button type="button" onClick={cancelEdit}>
              キャンセル
            </button>
          </>
        ) : (
          <span onDoubleClick={toggleEditMode}>{book.title}</span>
        )}
      </form>
    </div>
  );
};
export default BookItem;
