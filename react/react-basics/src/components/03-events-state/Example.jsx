const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました。");
  };

  const clickHandler2 = () => {
    console.log("ボタンがクリックされました。");
  };

  return (
    <>
      {/* POINT イベントハンドラ = イベント発生時に呼び出される関数 */}
      {/* POINT 関数そのもの（参照）を渡す */}
      <button onClick={clickHandler}>クリックしてね</button>

      {/* POINT Reactがクリック時に clickHandler2() を実行してくれる */}
      <button onClick={clickHandler2}>クリックしてね</button>

      {/* NG: レンダリング時に即実行される */}
      {/* <button onClick={clickHandler()}>クリックしてね</button> */}

      {/* 引数を渡したい場合はwrapper関数を作る */}
      {/* <button onClick={() => clickHandler()}>クリックしてね</button> */}

      {/* POINT onClick の C は大文字 */}
    </>
  );
};

export default Example;
