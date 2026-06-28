import { useState, useEffect, useRef } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

     const isFirstRender = useRef(true);

     useEffect(() => {
       if (isFirstRender.current) {
         isFirstRender.current = false;
         return;
       }
       console.log("count changed");
     }, [count]);

    return (
      <>
        <h2 style={{ color: "blue" }}>カウント</h2>
        <h3>{count}</h3>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          カウントアップ
        </button>
        <button
          onClick={() => {
            setCount((prev) => (prev <= 0 ? prev : prev - 1));
          }}
        >
          カウントダウン
        </button>
      </>
    );
}
export default Count;