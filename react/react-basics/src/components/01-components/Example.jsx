import "./Example.css";
import List from "./List";
import Button from "./Button";
import FragmentExample from "./FragmentExample";
import Expression from "./JsxExpression";

// function Example() {
//     return (
//         <div>
//             <h1>Hello, World!</h1>
//             <p>これはコンポーネントの例です。</p>
//         </div>
//     );
// }

const Example = () => {
    return (
    <>
        <div className="component">
            <h1>Hello, World!</h1>
            <p>これはコンポーネントの例です。</p>
            <List />
            <Button />
        </div>
            <FragmentExample />
            <Expression />
    </>
    );
};

export default Example;