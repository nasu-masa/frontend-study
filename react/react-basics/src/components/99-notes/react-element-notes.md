# React要素について

## コンポーネント

Reactコンポーネントは、propsを受け取ってReact要素を返す関数である。

```jsx
const Profile = ({ name }) => {
  return <h3>{name}</h3>;
};
```

---

## props

propsは親コンポーネントから子コンポーネントへ渡される引数であり、JavaScriptのオブジェクトとして扱われる。

```jsx
<Profile name="Takashi" age={19} />
```

```js
props = {
  name: "Takashi",
  age: 19,
};
```

propsは読み取り専用（read-only）であり、子コンポーネント側で変更してはいけない。

---

## JSX

JSXはHTMLのように見えるが、実際にはReact要素を生成するための構文である。

```jsx
<h1>Hello</h1>
```

Babelによって、

```js
React.createElement("h1", null, "Hello");
```

に変換される。

---

## React要素

React要素とは、JSXがBabelによって `React.createElement()` に変換され、その実行結果として生成されるJavaScriptオブジェクトである。

イメージ：

```js
{
  type: "h1",
  props: {
    children: "Hello",
  },
}
```

React要素は、Reactが「何を表示するか」を表す設計図のような存在である。

---

## children

childrenは特別なpropsであり、開始タグと終了タグの間に書かれたReact要素が自動的に渡される。

```jsx
<Card>
  <Profile />
</Card>
```

```js
props = {
  children: <Profile />,
};
```

childrenの中身はReact要素（またはReact要素の配列）である。

---

## Reactの描画の流れ

```text
JSX
↓
Babel
↓
React.createElement(...)
↓
React要素（JavaScriptオブジェクト）
↓
React内部（Fiber）
↓
DOM要素
↓
ブラウザに表示
```

---

## 自分なりの理解

* コンポーネント：propsを受け取ってReact要素を返す関数
* props：親から子へ渡されるJavaScriptオブジェクト
* JSX：React要素を生成するための構文
* React要素：Reactが「何を表示するか」を表すJavaScriptオブジェクト
* children：React要素を受け取ることが多い特別なprops

### 補足：JavaScriptオブジェクトとは

JavaScriptオブジェクトとは、キーと値を持つ入れ物である。

```js
const user = {
  name: "Takashi",
  age: 19,
};
```
name や age を「キー（プロパティ名）」という
"Takashi" や 19 を「値」という
オブジェクトの値には、JavaScriptのほぼすべてのデータ型を入れることができる

例：
```js
const sample = {
  //　プリミティブ型　値そのものを持つ（イミュータブル＝変更できない）
  text: "Hello",            // 文字列
  count: 10,                // 数値
  isAdmin: true,            // 真偽値
  //　オブジェクト型　
  items: [1, 2, 3],         // 配列
  user: { name: "Tom" },    // オブジェクト
  greet: () => "Hi",        // 関数

};
```
Reactでは、propsもReact要素もJavaScriptオブジェクトとして扱われている。