// 練習問題：コンポーネント分割 + 商品検索アプリ
//
// 商品名で絞り込み検索できるアプリを作ってください。
//
// 【役割分担】
// Example      → State管理・filter・propsを渡す（このファイル）
// SearchBox    → inputのみ担当
// ProductList  → mapのみ担当
// ProductItem  → 商品1件の表示のみ担当
//
// 【制約】
// ・useStateはこのコンポーネントだけで使う
// ・filterはこのコンポーネントだけで使う

import { useState } from "react";
// TODO: SearchBox・ProductList・ProductItemを正しいパスからimportする
import SearchBox from "./SearchBox";
import ProductList from "./ProductList";


const products = [
  { id: 1, name: "Apple", price: 120 },
  { id: 2, name: "Banana", price: 180 },
  { id: 3, name: "Carrot", price: 80 },
  { id: 4, name: "Orange", price: 150 },
];

const Example = () => {
  // TODO: 検索キーワードを管理するStateを定義する（初期値は空文字）
  const [keywordVal, setKeywordVal] = useState("");

  // TODO: productsをfilterで絞り込む
  //       条件：商品名（name）に検索キーワードが含まれる
  //       ヒント：String.includes() を使う
  //       大文字・小文字は区別しなくてOK（toLowerCase()を使うとベター）
  const keyword = keywordVal.toLowerCase();
  const filteredProducts = products.filter((product) => {
    const isMatch = product.name.toLowerCase().includes(keyword)
  || product.price.toString().includes(keywordVal);
    return isMatch;
  });

  return (
    <div>
      <h1>商品検索</h1>

      {/* TODO: SearchBoxを表示する */}
      {/* TODO: 必要なpropsを渡す（入力値・更新関数） */}
      <SearchBox keyword={keywordVal} setKeywordVal={setKeywordVal}/>
      {/* TODO: ProductListを表示する */}
      {/* TODO: 必要なpropsを渡す（絞り込み済みの商品リスト） */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Example;

// 【完成イメージ】
//
// 商品検索
//
// [____________]
//
// Apple  120円
// Banana 180円
// Carrot  80円
// Orange 150円
//
// ↓ 入力欄に「ap」と入力すると
//
// [ap_________]
//
// Apple  120円
