import Card from "../Card";
import ProfileAnswer from "./ProfileAnswer";
import NoticeAnswer from "./NoticeAnswer";
import TodoListAnswer from "./TodoListAnswer";

const ExampleAnswer = () => {
  return (
    <div>
      <Card>
        <ProfileAnswer />
      </Card>

      <Card>
        <NoticeAnswer />
      </Card>

      <Card>
        <TodoListAnswer />
      </Card>
    </div>
  );
};

export default ExampleAnswer;
