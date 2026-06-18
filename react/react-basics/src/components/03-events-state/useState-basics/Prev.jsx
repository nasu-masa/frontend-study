import { useState } from "react";

// POINT: 前のStateをもとに更新するときは prev を使う
// setCount(prev => prev + 1)

const Prev = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(prev => prev + 1);
  };

  const countDown = () => {
    setCount(prev => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Prev;
