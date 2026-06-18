import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // POINT: setStateで値を更新すると画面も更新される
  const handleClick = () => {
    setCount(count + 10);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default Counter;
