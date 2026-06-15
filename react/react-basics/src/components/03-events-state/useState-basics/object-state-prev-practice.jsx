// POINT: 前のStateをもとに更新するときは callback（prev）形式を使う
// POINT: オブジェクトStateはスプレッド構文でコピーして必要な部分だけ更新する

import { useState } from "react";

const productObj = {
  name: "Coffee",
  price: 500,
  stock: 5,
};

const Example = () => {
  const [product, setProduct] = useState(productObj);

  const changeName = (e) => {
    setProduct((prevProduct) => ({ ...prevProduct, name: e.target.value }));
  };

  const priceIncrease = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      price: prevProduct.price + 100,
    }));
  };

  const stockIncrement = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      stock: prevProduct.stock + 1,
    }));
  };

  const priceDecrease = () => {
    setProduct((prevProduct) => {
      if (prevProduct.price <= 0) return prevProduct;

      return {
        ...prevProduct,
        price: prevProduct.price - 100,
      };
    });
  };

  const stockDecrement = () => {
    setProduct((prevProduct) => {
      if (prevProduct.stock <= 0) return prevProduct;

      return {
        ...prevProduct,
        stock: prevProduct.stock - 1,
      };
    });
  };
  // 外のproduct ＝ 現在のstate（コンポーネントが持っている値）

  // 内のprevProduct ＝ Reactが更新処理のために渡してくる「直前のstate」

  // (prevProduct) => { return {...} }
  // ↑ この関数の「戻り値」が新しいstateになる

  // その戻り値が setProduct に渡されて state が更新される

  // stateが更新された結果として再レンダリングが起こる

  return (
    <>
      <h3>練習問題：Object State + prev</h3>

      <p>
        オブジェクトStateを更新する練習です。
        callback（prev）形式を使って実装してください。
      </p>

      <p>商品名: {product.name}</p>
      <p>価格: {product.price}円</p>
      <p>在庫: {product.stock}個</p>

      {/* 商品名入力欄 */}
      <input type="text" value={product.name} onChange={changeName} />

      {/* 価格変更 */}
      <button onClick={priceIncrease}>+100円</button>

      <button onClick={priceDecrease}>-100円</button>

      {/* 在庫変更 */}
      <button onClick={stockIncrement}>在庫 +1</button>

      <button onClick={stockDecrement}>在庫 -1</button>
    </>
  );
};

export default Example;
