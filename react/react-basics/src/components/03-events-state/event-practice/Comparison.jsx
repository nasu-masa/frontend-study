import "./EventPractice.css";
import Practice from "./Practice";
import Answer from "./Answer";

const Comparison = () => {
  return (
    <div className="comparison">
      <div className="comparison-panel">
        <h2>練習問題</h2>
        <Practice />
      </div>
      <div className="comparison-panel">
        <h2>完成例</h2>
        <Answer />
      </div>
    </div>
  );
};

export default Comparison;
