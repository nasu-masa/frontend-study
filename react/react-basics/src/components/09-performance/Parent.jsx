import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

// useMemoとuseCallbackとmemoの総合学習
//本来は重い処理にuseMemoを使うが、今回はuseMemoの使い方の学習のため、重い処理はしていない


const Parent = () => {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return {
      name: "Taro",
      age: 20,
    };
  }, []);

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  const activeUsers = useMemo(() => {
    return [1, 2, 3, 4].filter((n) => n % 2 === 0);
  }, []);

  return (
    <>
      <h1>Parent</h1>

      <button onClick={() => setCount(count + 1)}>+1</button>

      <Child user={user} onClick={handleClick} users={activeUsers} />
    </>
  );
};

export default Parent;
