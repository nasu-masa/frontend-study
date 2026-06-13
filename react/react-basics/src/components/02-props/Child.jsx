import "./Child.css";

// const Child = (props) => {
//     return (
//       <div className={`component ${props.color}`}>
//         <h3>Hello Component</h3>
//       </div>
//     );
// }

//②分割代入（javascriptの機能）
/* <Child /> のようにcolorを渡さなかった場合、
color === "blue" になります。 */
const Child = ({ color = "blue" }) => {
    return (
        <div className={`component ${color}`}>
            <h3>Hello Component</h3>
        </div>
    );
};

//③ 分割代入＋別名（エイリアス）
// const Child = ({ color: c = "blue" }) => {
//   return (
//     <div className={`component ${c}`}>
//       <h3>Hello Component</h3>
//     </div>
//   );
// };
export default Child;

// ① 「Propsはオブジェクト」という基本形
// ② Reactで一番よく見る実践形
// ③ 「名前が衝突する時や短くしたい時」に使う応用形
// propsへは全てのデータ型を渡すことができる