import { useState } from "react";
import UserList from "./UserList";

const users = [
  { id: 1, name: "田中 太郎", role: "エンジニア" },
  { id: 2, name: "佐藤 花子", role: "デザイナー" },
  { id: 3, name: "鈴木 一郎", role: "マネージャー" },
  { id: 4, name: "山田 美咲", role: "エンジニア" },
  { id: 5, name: "中村 健太", role: "デザイナー" },
];

// TODO: usersをfilterして、nameまたはroleがqueryを含む配列を作る
const Example = () => {
  const [userVal, setUserVal] = useState("");

  const filteredUsers = users.filter((user) => {
    const keyword = userVal.toLowerCase();

    if (keyword === "") return true; 
    return (
      user.name.includes(keyword) ||
      user.role.includes(keyword)
    );
  })

  return (
    <div>
      <h2>ユーザー検索</h2>

      {/* TODO: input要素を置き、valueとonChangeでqueryと紐づける */}
      <input
        type="text"
        value={userVal}
        onChange={(e) => setUserVal(e.target.value)}
      />

      {/* TODO: UserListに絞り込んだユーザーをpropsで渡す */}
      <UserList users={filteredUsers} />

    </div>
  );
};

export default Example;
