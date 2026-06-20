import { useState } from "react";
import List from "./List";
import Form from "./Form";

const todoList = [
  { id: 1, content: "猫愛でる" },
  { id: 2, content: "熱さまシート買う" },
  { id: 3, content: "薬飲む" },
];

const Todo = () => {
  const [todos, setTodos] = useState(todoList);
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const addTodo = (newTodo) => {
    if (newTodo.trim() === "") return;
    const todo = {
      id: Date.now(),
      content: newTodo,
    };
    setTodos((prev) => [...prev, todo]);
  };
  return (
    <>
      {/* リスト */}
      <List todoList={todos} deleteTodo={deleteTodo} />
      {/* フォーム */}
      <Form addTodo={addTodo} />
    </>
  );
};

export default Todo;

//なぜTodoがstateを持つのか...
//Todo一覧の状態を管理するコンポーネント
// Todoの追加・削除など、Todo全体に関わる処理を担当する
// FormとListの共通の親なので、stateはここで管理する