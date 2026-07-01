import { memo } from "react";

const Child = memo(({ user, onClick, users }) => {
  console.log("Child Render");

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={onClick}>click</button>
      <p>{users.join(",")}</p>
    </div>
  );
});

export default Child;
