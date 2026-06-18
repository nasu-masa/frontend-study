const Movie = ({ title, year, actors }) => {
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Year: {year}</p>

      <ul>
        {actors.map((actor) => (
          <li key={actor}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
