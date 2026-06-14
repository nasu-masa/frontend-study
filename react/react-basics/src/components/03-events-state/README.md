# 03-events-state

イベントリスナーと State（useState）の学習ディレクトリです。

---

## イベントリスナーとは

ユーザーの操作（クリック、入力など）を検知して、処理を実行する仕組みです。

ブラウザが「何かが起きた」という通知（イベント）を受け取り、あらかじめ登録しておいた関数（ハンドラ）を呼び出します。

---

## React のイベントハンドラ

React では HTML の属性のように JSX に直接イベントを書きます。

```jsx
const handleClick = () => {
  console.log("クリックされました");
};

<button onClick={handleClick}>クリック</button>
```

- `onClick`、`onChange`、`onSubmit` などが代表的
- ハンドラには関数の「参照」を渡す（`handleClick()` と書くと即実行されてしまう）
- イベントオブジェクト（`e`）を引数で受け取ることもできる

---

## State とは

コンポーネントが持つ「動的な値」です。

State が変わると React がコンポーネントを再描画（再レンダリング）します。
通常の変数では再描画は起きません。

---

## useState の役割

```jsx
import { useState } from "react";

const [count, setCount] = useState(0);
```

| 要素 | 説明 |
|---|---|
| `count` | 現在の State の値 |
| `setCount` | State を更新する関数 |
| `useState(0)` | 初期値を指定して State を作成 |

State を更新するときは必ず `setCount` を使います。直接 `count = 1` と書いても再描画されません。

---

## イベント → State 更新 → 再描画 の流れ

```
ユーザーが操作する
      ↓
イベントハンドラが呼ばれる
      ↓
setState で State を更新する
      ↓
React がコンポーネントを再描画する
      ↓
画面に新しい値が表示される
```

```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
};

<button onClick={handleClick}>{count}</button>
```

ボタンをクリックするたびに `count` が増え、画面の数字が更新されます。
