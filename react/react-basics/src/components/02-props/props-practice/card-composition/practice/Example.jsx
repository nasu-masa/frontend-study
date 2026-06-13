import Card from "../Card";
import Profile from "./Profile";
import Notice from "./Notice";
import TodoList from "./TodoList";

const Example = () => {
  return (
    <div>
      <Card>
        <Profile />
      </Card>

      <Card>
        <Notice />
      </Card>

      <Card>
        <TodoList />
      </Card>
    </div>
  );
};

export default Example;
