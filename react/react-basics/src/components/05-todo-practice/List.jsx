const List = ({ todoList, deleteTodo }) => {
  const complete = (id) => {
    deleteTodo(id);
  };
  return (
    <>
      {todoList.map((todo) => (
        <div key={todo.id}>
          <button onClick={() => complete(todo.id)}>完了</button>
              <span>{ todo.content}</span>
        </div>
      ))}
    </>
  );
};

export default List;

// Todo一覧を表示するコンポーネント
// 親から受け取ったTodoを表示する役割
// 完了ボタンが押されたら親から受け取った関数を呼び出す
