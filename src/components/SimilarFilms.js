
import Card from "./Card"
import useStyles from "./SimilarFilms.style";
import { useQuery } from "react-query";

function buildUrl() {
  return  `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function SimilarFilms(props) {
  const film = props.film;

  const classes = useStyles();
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  const { data, isLoading, isFetching, error } = useQuery(["movie",film], () =>
    fetch(buildUrl()).then((response) => response.json())
  );

  let similars = [];
  let films_similar = [];
  let sim = [];
  if (!isLoading && !error) {
    film.genres.map((genre) => {
      similars = data.results.filter((movie) =>
        movie.genre_ids.includes(genre.id)
      );
      similars.map((film) => !films_similar.includes(film) ?films_similar.push(film) : null);
    });
    sim = films_similar.filter((movie) => movie.title != film.title)
  };


  return (
    <div className={classes.similarList}>
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
          sim.map((movie) => (
            <Card
              image={`${urlImage}${movie.poster_path}`}
              title={movie.title}
              id={movie.id}
              key={movie.id}
            ></Card>
          ))
        
      )}
    </div>
  );
}

export default SimilarFilms;
