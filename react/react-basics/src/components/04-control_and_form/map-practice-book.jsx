const Book = ({ title, price, genres }) => {
  return (
    <div>
      <h2>Title:{title}</h2>
      <p>Price:{price}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
