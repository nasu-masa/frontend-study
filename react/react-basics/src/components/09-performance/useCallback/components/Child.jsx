import { memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child Render");

  return (
    <div>
      <button onClick={onClick}>子ボタン</button>
    </div>
  );
});

export default Child;
