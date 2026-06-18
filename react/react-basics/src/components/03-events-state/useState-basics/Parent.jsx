import TextSync from "./TextSync";
import Counter from "./Counter";
import Toggle from "./Toggle";
import Prev from "./Prev";
import PrevObject from "./ObjectStatePrevPractice";
import PropsState from "./PropsStateTextCounter";
import PropsStateProfile from "./PropsStateUserProfile";
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
