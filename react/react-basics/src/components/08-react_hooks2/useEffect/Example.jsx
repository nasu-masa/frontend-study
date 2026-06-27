import { useState, useEffect, useRef } from "react";
import Timer from "./components/Timer";

const Example = () => {
  const [count, setCount] = useState(0);
  const [isDisp, setIsDisp] = useState(true);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("count changed");
  }, [count]);
  // StrictMode（開発環境）では、
  // 副作用のバグ検出のため useEffect が追加実行されることがある。
  // ※ 本番環境では通常どおり実行される。

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
      <h2>タイマー</h2>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>
        {isDisp ? "閉じる" : "開く"}
      </button>
    </>
  );
};
export default Example;
/*
 * useEffect
 * ・レンダリング後に副作用（API通信、タイマー、イベント登録など）を実行するフック
 * ・依存配列が [] の場合、初回レンダリング（マウント）後に1回だけ実行される
 * ・依存配列に state や props を指定すると、その値が前回から変わったときだけ再実行される
 * ・return にクリーンアップ関数を書くことで、タイマーやイベントなどの後片付けができる
 */