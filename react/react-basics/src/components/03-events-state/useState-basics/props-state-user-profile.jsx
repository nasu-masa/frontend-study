// 練習問題：Props + State（User Profile版）
//
// InputArea（入力担当）と ProfileCard（表示担当）を
// 別コンポーネントに分離してください。
//
// POINT:
// ・StateはExample（親）が持つ
// ・子コンポーネントはPropsで値を受け取る
// ・入力担当と表示担当で役割を分ける
// ・onChangeで入力値をStateに反映する

import { useState } from "react";

// 【要件】
//
// ■ Exampleコンポーネント
// ・useStateを使って名前（name）を管理する。
// ・初期値は空文字 "" とする。
// ・必要なPropsを子コンポーネントへ渡す。
//
// ■ InputAreaコンポーネント
// ・input要素を表示する。
// ・入力された名前をStateに反映する。
// ・Stateは持たない。
// ・Propsを使って更新する。
//
// ■ ProfileCardコンポーネント
// ・現在入力されている名前を表示する。
// ・名前の文字数も表示する。
// ・Propsで受け取った値のみを使う。

const Example = () => {
  const [name, setName] = useState("");
  const nameChange = (e) => setName(e.target.value);
  return (
    <>
      <InputArea name={name} setName={setName} nameChange={nameChange} />
      <ProfileCard name={name} />
    </>
  );
};

const InputArea = ({ name, setName, nameChange }) => {
  return (
    <>
      名前を入力：
      <input type="text" value={name} onChange={nameChange} />
    </>
  );
};

const ProfileCard = ({ name }) => {
  return (
    <>
      <h3>ユーザー名：{name}</h3>
      <p>名前の文字数：{name.length}</p>
    </>
  );
};

export default Example;

// 【完成イメージ】
//
// 名前を入力：[Nasubi]
//
// ユーザー名：Nasubi
// 名前の文字数：6文字
