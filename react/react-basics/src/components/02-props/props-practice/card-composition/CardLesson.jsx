import Example from "./practice/Example";
import ExampleAnswer from "./answer/ExampleAnswer";

const CardLesson = () => {
  return (
    <div>
      <h2>練習問題</h2>
      <Example />

      <hr />

      <h2>完成例</h2>
      <ExampleAnswer />
    </div>
  );
};

export default CardLesson;
