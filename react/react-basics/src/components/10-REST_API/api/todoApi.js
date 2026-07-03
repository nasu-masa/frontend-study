// ============================================================
// 問題 1: APIファイル（todoApi.js）
// ============================================================
// Axiosを使ってJSON Serverと通信する関数を完成させてください。
// JSON ServerはポートXXXXで起動しています。
// ============================================================

import axios from "axios";

// [問題 1-1]
// Axiosのインスタンスを作成してください。
// baseURLには JSON Server のベースURLを指定します。
// ポートは 3001 を使用してください。
const api = axios.create({
  baseURL: "http://localhost:3003",
});

// [問題 1-2]
// GETリクエスト: 全TODOを取得する関数
// /todos エンドポイントに GET リクエストを送ってください。
// 取得したデータを返却してください。
const fetchTodos = async () => {
  const response = await api.get("/todos");
  return response.data;
};

// [問題 1-3]
// POSTリクエスト: 新しいTODOを追加する関数
// 引数 title（文字列）を受け取り、
// completed: false と一緒にボディへ含めてください。
const addTodo = async (title) => {
  const response = await api.post("/todos", {
    title: title,
    completed: false,
  });
  return response.data;
};

// [問題 1-4]
// PATCHリクエスト: TODOの完了状態を切り替える関数
// 引数 id（数値）と completed（真偽値）を受け取ってください。
// /todos/:id のURLに PATCH リクエストを送ってください。
const toggleTodo = async (id, completed) => {
  const response = await api.patch(`/todos/${id}`, {
    completed,
  });
  return response.data;
};

// [問題 1-5]
// DELETEリクエスト: TODOを削除する関数
// 引数 id を受け取り、/todos/:id に DELETE リクエストを送ってください。
const deleteTodo = async (id) => {
  const response  = await api.delete(`/todos/${id}`);
  return response.data;
};
export { fetchTodos, addTodo, toggleTodo, deleteTodo };