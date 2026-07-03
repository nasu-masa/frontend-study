// ============================================================
// 問題 5: TodoItem.jsx（表示・削除・完了切り替え）
// ============================================================
// 1件分のTODOを表示し、削除・完了切り替えを行うコンポーネントを
// 完成させてください。
// ============================================================

// [問題 5-1]
// 必要なものを React からインポートしてください。
// （useState を使います）
import { useState } from "react";
import TodoApp from "./TodoApp";

// [問題 5-2]
// props の分割代入で todo, onToggle, onDelete を受け取ってください。
function TodoItem({ todo, onToggle, onDelete}) {
  // [問題 5-3]
  // タイトルの編集中フラグを管理するstate（初期値: false）
  const [isEditing, setIsEditing] = useState(false);

  // [問題 5-4]
  // 編集中のテキストを管理するstate（初期値: todo.title）
  const [editingTitle, setEditingTitle] = useState(todo.title);

  // [問題 5-5]
  // 削除ボタンのハンドラ。
  // onDelete に todo.id を渡して呼び出してください。
  const handleDelete = () => {
    onDelete(todo.id);
  };

  // [問題 5-6]
  // 完了チェックボックスのハンドラ。
  // onToggle に todo.id と todo.completed を渡して呼び出してください。
  const handleToggle = () => {
    onToggle(todo.id, todo.completed);
  };

  // [問題 5-7]
  // 編集完了ハンドラ。
  // editText が空文字（トリム後）なら何もしない。
  // onToggle などではなく、ここでは editText の変更を親に反映する
  // 必要はありません（表示上の更新のみ、発展課題とします）。
  // isEditing を false に切り替えるだけでOKです。
  const handleEditDone = () => {
    if (!editTitle.trim() === "") return;
    setIsEditing(false);
  };

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      {/* [問題 5-8]
          チェックボックス。
          checked には todo.completed を、
          onChange には handleToggle を設定してください */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />

      {/* [問題 5-9]
          isEditing が true のとき: input[type="text"] を表示
          isEditing が false のとき: <span> を表示する
          条件分岐（三項演算子）で切り替えてください。

          ▼ isEditing=true の場合
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEditDone}
            autoFocus
          />

          ▼ isEditing=false の場合
          <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#999" : "#000",
            }}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>
      */}
      {isEditing ? (
        <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleEditDone}
            autoFocus
        />
      ) : (
         <span
            style={{
              flex: 1,
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "#999" : "#000",
            }}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </span>
      )}

      {/* [問題 5-10]
          削除ボタン。onClick に handleDelete を設定してください */}
      <button
        onClick={handleDelete}
        style={{ color: "red", background: "none", border: "1px solid red", borderRadius: "4px", cursor: "pointer", padding: "2px 8px 4px" }}
      >
        削除
      </button>
    </li>
  );
}

export default TodoItem;
