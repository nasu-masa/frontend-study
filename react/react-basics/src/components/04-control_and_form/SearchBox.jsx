// SearchBox：入力欄のみ担当するコンポーネント
//
// 【役割】
// ・input要素を表示する
// ・Stateは持たない（Exampleから受け取る）
//
// 【受け取るprops】
// ・keyword   → 現在の入力値（Stateの値）
// ・onchange  → 入力値が変わったときに呼ぶ関数
//   ※ props名はExampleで渡す名前に合わせてください

// TODO: propsを受け取る（引数を分割代入で書く）
const SearchBox = ({ keyword, setKeywordVal }) => {
  return (
    <div>
      {/* TODO: input要素を書く */}
      {/* TODO: valueにkeywordをセットする */}
      {/* TODO: onChangeで入力値をStateに反映する */}
      <input type="text" placeholder="商品" value={keyword} onChange={ (e) => {setKeywordVal(e.target.value)}} />
    </div>
  );
};

export default SearchBox;
