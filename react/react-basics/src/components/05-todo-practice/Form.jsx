import { useState } from "react";

const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default Form;

// Todoを入力するコンポーネント
// 入力欄の状態(input)だけを管理する
// 入力された文字列を親に渡し、Todoの作成は親に任せる