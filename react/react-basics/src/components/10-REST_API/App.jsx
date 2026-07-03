// ============================================================
// 問題 2: App.jsx（React.lazy + Suspense）
// ============================================================
// React.lazy と Suspense を使って TodoApp を
// ダイナミックインポートしてください。
// ============================================================

import React, { lazy, Suspense } from "react";

//JSX変換(React.createElement)のために昔は必須だったから import React（本体）と書いた。

// [問題 2-1]
// React.lazy を使って TodoApp を動的にインポートしてください。
// ファイルパスは "./components/TodoApp" です。
const TodoApp = lazy(() => import("./components/TodoApp"));

// [問題 2-2]
// フォールバックUIとして <div>Loading...</div> を表示させてください。
// Suspense の fallback prop に渡してください。
function App() {
  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>REST API Todo App</h1>
      <Suspense  fallback={<div>Loading...</div>}>
        <TodoApp />
      </Suspense>
    </div>
  );
}

export default App;
