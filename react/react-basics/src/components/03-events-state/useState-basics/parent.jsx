import TextSync from "./text-sync";
import Counter from "./counter";
import Toggle from "./toggle";

const Parent = () => {
  return (
    <div>
      <h1>useState の基本パターン集</h1>

      <h2>1. Input State Sync</h2>
      <TextSync />

      <hr />

      <h2>2. Counter</h2>
      <Counter />

      <hr />

      <h2>3. Toggle</h2>
      <Toggle />
    </div>
  );
};

export default Parent;
