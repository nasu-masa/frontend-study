import { useState } from "react";

const Toggle = () => {
  // POINT: Stateによって表示内容を切り替えられる
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  // POINT: useStateはトップレベルで呼ぶ（呼び出し順でstateを管理しているため）

  const handleClick = () => {
    setIsVisible(!isVisible);
    // 引数に論理否定演算子をわたすことで
    // false->true、true->falseになる
  };

  return (
    <>
      <button onClick={handleClick}>button表示</button>
      {isVisible && (
        <>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            押してね
          </button>
          <p> {count}回押された</p>
        </>
      )}
    </>
  );
};

export default Toggle;
