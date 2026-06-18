import Book from "./MapPracticeBook";

const MapPracticeApp = () => {
  const books = [
    { title: "React入門", price: 2800, genres: ["React", "JavaScript"] },
    { title: "JavaScript基礎", price: 2400, genres: ["JavaScript", "ES6"] },
    { title: "TypeScript実践", price: 3200, genres: ["TypeScript", "React"] },
  ];
  return (
    <>
      <h3>練習問題</h3>
      {books.map((book) => (
        <Book key={book.title} {...book}/>
      ))}
    </>
  );
};
export default MapPracticeApp;
