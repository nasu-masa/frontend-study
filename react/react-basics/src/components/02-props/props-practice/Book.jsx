import "./Book.css";

// 【表示結果】
// 1つ目
//   Title: Harry Potter
//   Author: J.K. Rowling
//   Price: 2500 yen
//
// 2つ目
//   Title: The Hobbit
//   Author: J.R.R. Tolkien
//   Price: 1800 yen
//
// 3つ目（Propsなし）
//   Title: Unknown
//   Author: Anonymous
//   Price: ?? yen

// 【やること】
// 1. Book.jsx を完成させる
// 2. 分割代入を使う
// 3. デフォルト値を設定する
// 4. JSX で表示する

const Book = ({title = "Unknown", author = "Anonymous", price = "??"}) => {
  return (
    <div className="book">
      <p>Title: { title }</p>
      <p>Author: { author}</p>
      <p>Price: { price } yen</p>
    </div>
  )
};

export default Book;
