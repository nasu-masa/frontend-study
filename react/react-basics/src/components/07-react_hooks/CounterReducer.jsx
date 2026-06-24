import { useReducer } from "react";

// ■ 課題: useReducerでカウンターを管理する
//
// 操作できること:
//   1. カウントを「stepの数だけ」増やす
//   2. カウントを「stepの数だけ」減らす
//   3. カウントをリセットする（0に戻す）
//   4. stepを入力フォームで変更する
//
// state の構造:
//   count … 現在のカウント値
//   step  … 1回の増減幅

// ▼ actionの種類を定数で管理する（タイポ防止）
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const SET_STEP = "SET_STEP";

// throw new Error()呼ぶため
const MILK = "MILK";

// ▼ 初期state
const initialState = {
  count: 0,
  step: 1,
  isCow: false,
};

// ■ TODO: reducerを実装する
// 引数: state（現在の状態）, action（{ type, payload }）
// 返り値: 新しいstate
function reducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      // TODO: countをstepの分だけ増やして返す
      return {
        ...state,
        count: state.count + state.step,
      };

    case DECREMENT:
      // TODO: countをstepの分だけ減らして返す
      return {
        ...state,
        count: state.count - state.step,
      };

    case RESET:
      // TODO: countを0に戻す（stepはそのまま）
      return initialState;

    case SET_STEP:
      // TODO: stepをaction.payloadの値に更新する
      return {
        ...state,
        step: action.payload,
      };

    case MILK:
      return {
        ...state,
        isCow: !state.isCow,
      };

    // ヒント: action.payloadには新しいstepの値が入ってくる
    default:
      throw new Error("不明な定数です");
  }
}

export default function CounterReducer() {
  // TODO: useReducerでstateとdispatchを受け取る
  // ヒント: useReducer(reducer関数, 初期state)
  
  const [state, dispatch] = useReducer(reducer, initialState);

  // TODO: INCREMENTをdispatchする関数を実装する
  function handleIncrement() {
    dispatch({ type: INCREMENT });
  }

  // TODO: DECREMENTをdispatchする関数を実装する
  function handleDecrement() {
    dispatch({ type: DECREMENT });
  }

  // TODO: RESETをdispatchする関数を実装する
  function handleReset() {
    dispatch({ type: RESET });
  }

  // TODO: SET_STEPをdispatchする関数を実装する
  // ヒント: inputのvalueをpayloadとして渡す
  function handleSetStep(e) {
    dispatch({ type: SET_STEP, payload : Number(e.target.value) });
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>useReducer カウンター</h1>

      {/* カウント表示 */}
      <p style={{ fontSize: "48px", fontWeight: "bold", margin: "16px 0" }}>
        {state.isCow? `🐄${state.count}` : state.count}
      </p>

      {/* 操作ボタン */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
        {/* TODO: それぞれのボタンにonClickを設定する */}
        <button onClick={handleDecrement}>− 減らす</button>
        <button onClick={handleIncrement}>＋ 増やす</button>
        <button onClick={handleReset}>リセット</button>
        <button onClick={() => { dispatch({ type: MILK })}}>🐄</button>
      </div>

      {/* step設定 */}
      <div>
        <label>
          ステップ幅：
          <input
            type="number"
            min="1"
            value={state.step}
            onChange={handleSetStep}
          />
        </label>
        {/* TODO: 現在のstepを表示する */}
        <p>現在のstep: {state.step}</p>
      </div>
    </div>
  );
}
