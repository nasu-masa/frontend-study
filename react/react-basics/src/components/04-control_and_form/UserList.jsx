// TODO: propsからusersを受け取る（引数を分割代入で書く）
const UserList = ({users}) => {
  // TODO: usersが空配列のとき「該当するユーザーが見つかりません。」を返す

  return users.length === 0 
    ? (<p>該当するユーザーが見つかりません。</p>)
    : (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}-{user.role}
        </li>
      ))}
    </ul>
  );
}


export default UserList;
