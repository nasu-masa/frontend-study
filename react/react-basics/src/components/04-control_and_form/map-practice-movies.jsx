import Movie from "./map-practice-movie";

const Example = () => {
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

export default Example;
