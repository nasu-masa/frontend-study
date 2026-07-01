import { useState, useCallback } from "react";
import Child from "./components/Child";

 //useCallbackは依存配列が変わらない限り同じ関数参照を返す仕組み。
  //関数の再生成を防ぐことで、React.memoと組み合わせて不要な再レンダリングを防ぐ。

  // 依存配列[]の中身が変わると、再生成される。依存配列の中身が変わらなければ、再生成されない。

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);
 
  return (
    <>
      <h1>Parent</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        親カウント +1
      </button>
      <Child onClick={handleClick} />
    </>
  );
};

export default Parent;

