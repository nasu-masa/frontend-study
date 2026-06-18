// 練習問題：Props + State
//
// InputArea（入力担当）と TextResult（表示担当）を
// 別コンポーネントに分離してください。
//
// POINT:
// ・StateはExample（親）が持つ
// ・子コンポーネントはPropsで値を受け取る
// ・入力担当と表示担当で役割を分ける

import { useState } from "react";
// 【要件】
// ■ Exampleコンポーネント
// ・useStateを使って文字列Stateを1つ定義する。
// ・初期値は空文字 "" とする。
// ・必要なPropsを子コンポーネントへ渡す。
const PropsStateTextCounter = () => {
  const [text, setText] = useState("");
  return (
    <>
      <InputArea text={text} setText={setText} />
      <TextResult text={text} />
    </>
  );
};
// ■ InputAreaコンポーネント
// ・input要素を表示する。
// ・入力された値をStateに反映する。
// ・Stateは持たない。
// ・Propsを使って更新する。
const InputArea = ({ text, setText }) => {
  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    //(e)の中に「今入力された文字」が入ってる
  );
};
// ■ TextResultコンポーネント
// ・現在の入力内容を表示する。
// ・現在の文字数も表示する。
// ・Propsで受け取った値のみを使う。
const TextResult = ({ text }) => {
  return (
    <>
      <p>入力内容: {text}</p>
      <p>文字数: {text.length}</p>
    </>
  );
};

export default PropsStateTextCounter;

// 【完成イメージ】
//
// 入力欄：[React]
//
// 入力内容：React
// 文字数：5文字
