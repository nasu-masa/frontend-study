// ============================================================
// 問題 3: TodoApp.jsx（useReducer + useEffect）
// ============================================================
// アプリ全体の状態管理と副作用処理を完成させてください。
// ============================================================

import { useState, useReducer, useEffect } from "react";
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from "../api/todoApi";
import Form from "./Form";
import TodoItem from "./TodoItem";

// ----------------------------------------------------------------
// [問題 3-1] initialState を定義してください。
// todos（配列）, loading（真偽値）, error（null or 文字列）
// の3つのプロパティを持つオブジェクトです。
// ----------------------------------------------------------------
const initialState = {
  todos: [],
  loading: false,
  error: null,
};

// ----------------------------------------------------------------
// [問題 3-2] reducer 関数を完成させてください。
// action.type に応じて新しいstateを返します。
// 以下の4種類のアクションを処理してください:
//   - "SET_LOADING"   : loading を action.payload に更新する
//   - "SET_ERROR"     : error を action.payload に更新する
//   - "SET_TODOS"     : todos を action.payload に更新する
//   - "ADD_TODO"      : todos の末尾に action.payload を追加する
//   - "TOGGLE_TODO"   : 対象IDのtodoのcompletedを反転させる
//   - "DELETE_TODO"   : 対象IDのtodoをリストから除外する
// ----------------------------------------------------------------
function reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_TODOS":
      return { ...state, todos: action.payload };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo)  =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo)  => todo.id !== action.id),
      };

    default:
      return state;
  }
}

// ----------------------------------------------------------------
// [問題 3-3] useReducer を使って state と dispatch を取得してください。
// ----------------------------------------------------------------
function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // [問題 3-4]
  // useEffect を使って、コンポーネントマウント時に1度だけ
  // fetchTodos() を呼び出し、取得したデータで "SET_TODOS" を
  // ディスパッチしてください。
  // 通信中は "SET_LOADING" で loading を true / false に切り替え、
  // エラー時は "SET_ERROR" でエラーメッセージをセットしてください。
  useEffect(() => {
    const load = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const todos = await fetchTodos();
        dispatch({ type: "SET_TODOS", payload: todos });
      } catch (e) {
        dispatch({ type: "SET_ERROR", payload: "データの取得に失敗しました" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    load();
  }, []);

  // [問題 3-5]
  // 新しいTODOを追加するハンドラ。
  // addTodo(title) を呼び出し、返ってきた newTodo を
  // "ADD_TODO" でディスパッチしてください。
  const handleAdd = async (title) => {
    const newTodo = await addTodo(title);
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  // [問題 3-6]
  // TODOの完了状態を切り替えるハンドラ。
  // 引数は id と completed（現在の値）です。
  // toggleTodo を呼び出した後、"TOGGLE_TODO" をディスパッチしてください。
  const handleToggle = async(id, completed) => {
    await toggleTodo(id, !completed);
    dispatch({ type: "TOGGLE_TODO", id });
  };

  // [問題 3-7]
  // TODOを削除するハンドラ。
  // deleteTodo(id) を呼び出した後、"DELETE_TODO" をディスパッチしてください。
  const handleDelete = async (id) => {
    await deleteTodo(id);
    dispatch({ type: "DELETE_TODO", id });
  };

  // ----------------------------------------------------------------
  // [問題 3-8] 条件付きレンダリングを完成させてください。
  // loading が true のとき → <p>読み込み中...</p>
  // error が null でないとき → <p style={{ color: "red" }}>{error}</p>
  // ----------------------------------------------------------------
  if (state.loadding === true) return <p>読み込み中...</p>;
  if (!state.error === null) return <p style={{ color: "red" }}>{{error}}</p>;
  return (
    <div>
      {/* [問題 3-9]
          Form コンポーネントに onAdd ハンドラを渡してください */}
      <Form onAdd={handleAdd} />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* [問題 3-10]
            state.todos を map して TodoItem を描画してください。
            各 TodoItem に key, todo, onToggle, onDelete を渡してください */}
        {state.todos.map((todo)  => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
