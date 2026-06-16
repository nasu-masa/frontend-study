import TextSync from "./text-sync";
import Counter from "./counter";
import Toggle from "./toggle";
import Prev from "./prev";
import PrevObject from "./object-state-prev-practice";
import PropsState from "./props-state-text-counter";
import PropsStateProfile from "./props-state-user-profile";
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

      <hr />

      <h2>5. PrevObject</h2>
      <PrevObject />

      <hr />

      <h2>6. PropsState</h2>
      <PropsState />

      <hr />

      <h2>7. PropsStateProfile</h2>
      <PropsStateProfile />

      <hr />
    </div>
  );
};

export default Parent;
