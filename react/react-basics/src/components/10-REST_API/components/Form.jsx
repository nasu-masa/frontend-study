// ============================================================
// 問題 4: Form.jsx（入力フォーム・追加処理）
// ============================================================
// 新しいTODOを追加するフォームを完成させてください。
// ============================================================

import { useState } from "react";

// [問題 4-1]
// props から onAdd を受け取ってください。
function Form({ onAdd }) {
  // [問題 4-2]
  // 入力テキストを管理するローカルstate を
  // useState で定義してください。初期値は空文字です。
  const [title, setTitle] = useState("");
  

  // [問題 4-3]
  // フォームのsubmitハンドラを完成させてください。
  // - デフォルトのフォーム送信動作をキャンセルしてください
  // - title が空文字（トリム後）の場合は何もしない
  // - onAdd(title) を呼び出してください
  // - 送信後はinputを空文字にリセットしてください
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    await onAdd(title);
    setTitle("");
  };

  return (
    // [問題 4-4]
    // <form> の onSubmit に handleSubmit を設定してください。
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      {/* [問題 4-5]
          テキスト入力欄を作ってください。
          value は title state、
          onChange では e.target.value を title に反映させてください */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいTODOを入力..."
        style={{ flex: 1, padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        追加
      </button>
    </form>
  );
}

export default Form;
