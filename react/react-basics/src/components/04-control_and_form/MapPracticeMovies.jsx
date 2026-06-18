import Movie from "./MapPracticeMovie";

const MapPracticeMovies = () => {
  const movies = [
    {
      title: "Interstellar",
      year: 2014,
      actors: ["Matthew", "Anne"],
    },
    {
      title: "Inception",
      year: 2010,
      actors: ["Leonardo", "Tom"],
    },
  ];
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.title} {...movie} />
      ))}
    </>
  );
};

export default MapPracticeMovies;
