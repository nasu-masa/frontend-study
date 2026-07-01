import { useState } from "react";
import Child from "./components/Child";

const Parent = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const handleClickA = () => {
    setCountA((prev) => prev + 1);
  };

  const handleClickB = () => {
    setCountB((prev) => prev + 1);
  };

  const reset = () => {
    setCountA(0);
    setCountB(0);
  };

  return (
    <>
      <h1>React.Memo</h1>
      <div>
        <button onClick={reset}>リセット</button>
      </div>
      <p>{countA}</p>
      <button onClick={handleClickA}>カウントA+1</button>
      <Child countB={countB} />
      <button onClick={handleClickB}>カウントB+1</button>
    </>
  );
  //関数やオブジェクトは毎回新しい参照になるので、渡すとmemoが効かなくなることがある。memoを使う場合に、関数やオブジェクトを渡すときはuseCallbackやuseMemoを使うこと。
};
export default Parent;
