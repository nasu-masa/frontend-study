import "./JsxExpression.css";

const Expression = () => {
    const title = "Expression";
    const arr = ['item2', 'item4', 'item6'];
    const hello = (Ex) => `${Ex} Function`;
    const jsx = <h3>Hello JSX</h3>
    const bool = true;
    

    return (
        <div className={title.toLowerCase()}>
        <h3>Hello {title}</h3>
        <h3>{arr}</h3>
        <h3>{hello("Welcome")}</h3>
        {<h3>Hello JSX</h3>}
        {jsx}
        {bool}
        <h3>{/*　画面上には出力されない */}</h3>
        </div>
    );
}
export default Expression;

// JSXの　{}　の中には　JavaScript の　[式] を書ける
// 文字列、配列、関数の戻り値、JSX は描画される
// true / false / null / undefined　、コメントは描画されない
// if文やfor文などの [文] は書けない
