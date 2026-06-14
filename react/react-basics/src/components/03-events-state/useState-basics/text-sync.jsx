import { useState } from "react";

// POINT: Stateを入力値と同期する
const Example = () => {
  const [text, setText] = useState("");

  // POINT: onChange → setState → 再レンダリング
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="テキストを入力"
      />
      <p>{text}</p>
    </div>
  );
};

export default Example;
