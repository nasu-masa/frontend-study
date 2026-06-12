import { Fragment } from "react";

const FragmentExample = () => {
    return (
        <Fragment>
            <h2>Title</h2>
            <h3>Hello Fragment</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </Fragment>
    )
}

export default FragmentExample;

// Fragmentは余計なdivなどを生成せずに複数要素をまとめられる透明な箱
// <></> は　Fragmentの省略記法
// key属性を付ける場合は　<></>だとエラーになってしまうので<Fragment key=""> を使う