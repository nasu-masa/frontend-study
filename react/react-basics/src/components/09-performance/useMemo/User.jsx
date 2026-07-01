import { useState, useMemo } from "react";

// useMemoは「依存が変わらないなら前の結果を使う」という決まりを作るもの

const User = () => {
  const [count, setCount] = useState(0);

  const user = useMemo(() => {
    return {
      name: "Taro",
      age: 20,
    };
  }, []);

  console.log("User Render");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default User;
