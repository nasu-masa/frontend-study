import { useState, useEffect } from "react";
import Timer from "./components/Timer";
import Count from "./components/Count";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);
  // StrictMode（開発環境）では、
  // 副作用のバグ検出のため 一度アンマウントされて再マウントされる」。
  // ※ 本番環境では通常どおり実行される。

  return (
    <>
      <Count />
      <h2>タイマー</h2>
      {isDisp && <Timer />}
      <div>
        <button onClick={() => setIsDisp((prev) => !prev)}>
          {isDisp ? "閉じる" : "開く"}
        </button>
      </div>
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
