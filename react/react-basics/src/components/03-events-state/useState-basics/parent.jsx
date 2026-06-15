import TextSync from "./text-sync";
import Counter from "./counter";
import Toggle from "./toggle";
import Prev from "./prev";
 
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

      <hr />

      <h2>4. Prev</h2>
      <Prev />
    </div>
  );
};

export default Parent;
