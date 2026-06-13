import Book from "./Book";

const books = [
  { title: "Harry Potter", author: "J.K. Rowling", price: 2500 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", price: 1800 },
];

const Example = () => {
  return (
    <div>
      <h3>練習問題</h3>
      <p>
        Bookコンポーネントの中身を変更して、
        完成コードと同じ表示になるようにしてください。
        ※なるべく分割代入を使用してください。
      </p>

      <Book
        title={books[0].title}
        author={books[0].author}
        price={books[0].price}
      />

      <Book {...books[1]} />

      <Book />
    </div>
  );
};

export default Example;
