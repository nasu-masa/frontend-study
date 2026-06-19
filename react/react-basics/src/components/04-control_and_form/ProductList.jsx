// ProductList：商品一覧のmapのみ担当するコンポーネント
//
// 【役割】
// ・受け取ったproductsをmapで繰り返し表示する
// ・filterはここでは使わない（Exampleで済んでいる）
// ・useStateは使わない
//
// 【受け取るprops】
// ・products → 絞り込み済みの商品の配列

// TODO: ProductItemを正しいパスからimportする
import ProductItem from "./ProductItem";
// TODO: propsを受け取る（引数を分割代入で書く）
const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>該当する商品がありません。</p>;
  }
  return (
    <ul>
      {/* TODO: productsをmapで繰り返し、ProductItemを表示する */}
      {/* TODO: keyにはproduct.idを使う */}
      {/* TODO: ProductItemに必要なpropsを渡す */}
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
