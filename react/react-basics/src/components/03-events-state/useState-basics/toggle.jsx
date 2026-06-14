import { useState } from "react";

const Example = () => {
  // POINT: Stateによって表示内容を切り替えられる
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
    // 引数に論理否定演算子をわたすことで
    // false->true、true->falseになる
  };

  return (
    <div>
      <button onClick={handleClick}>切り替え</button>
      {isVisible && <p>表示されています</p>}
    </div>
  );
};

export default Example;
