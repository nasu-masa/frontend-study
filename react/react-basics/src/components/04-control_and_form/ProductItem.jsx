// ProductItem：商品1件の表示のみ担当するコンポーネント
//
// 【役割】
// ・商品名（name）と価格（price）を表示する
// ・データの加工はしない（表示だけ）
// ・useStateは使わない
//
// 【受け取るprops】
// ・name  → 商品名
// ・price → 価格（数値）

// TODO: propsを受け取る（引数を分割代入で書く）
const ProductItem = ({ product }) => {
  return (
    <li>
      {/* TODO: 商品名を表示する */}
      {product.name} - {product.price}円
      {/* TODO: 価格を「〇〇円」の形式で表示する */}
    </li>
  );
};

export default ProductItem;

// 【表示イメージ】
// Apple
// 120円
