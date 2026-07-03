# 10-REST_API 穴埋め式問題

## 学習範囲
- REST API（GET / POST / DELETE）
- JSON Serverを使ったモックAPI
- Axiosによる通信
- useEffectによる初回データ取得
- useReducerによる状態管理
- CRUD操作（追加・削除・更新）
- Reactのコンポーネント分割
- React.lazy と Suspense を使ったダイナミックインポート

## プロジェクト構成

```
10-REST_API/
├── README.md               ← この説明ファイル
├── db.json                 ← JSON Server用モックデータ
├── api/
│   └── todoApi.js          ← Axiosによるデータ通信処理
├── App.jsx                 ← lazy + Suspense でルーティング
├── components/
│   ├── TodoApp.jsx         ← useReducer + useEffect による状態管理
│   ├── Form.jsx            ← 入力フォーム（追加処理）
│   └── TodoItem.jsx        ← 各TODOの表示・削除・更新
```

## JSON Server の起動方法

```bash
# プロジェクトルートで実行
- "jserver": "json-server --watch src/components/10-REST_API/db.json --port 3003"
```
