import { memo } from "react";

const Child = memo(({ countB }) => {
    console.log("Child Render");
    return <p>{countB}</p>;
});
export default Child;