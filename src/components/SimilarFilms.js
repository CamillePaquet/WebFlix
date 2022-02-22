
import Card from "./Card"
import useStyles from "./SimilarFilms.style";
import { useDispatch, useSelector } from "react-redux";


function SimilarFilms(props) {
  const film = props.film;

  const classes = useStyles();
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  const movies = useSelector((state) => state.movies);


  let similars = [];
  let films_similar = [];
  let sim = [];
  
    film.genre_ids.map((genre) => {
      similars = movies.filter((movie) =>
        movie.genre_ids.includes(genre)
      );
      similars.map((film) => !films_similar.includes(film) ? films_similar.push(film) : null);
    });
    sim = films_similar.filter((movie) => movie.title !== film.title)



  return (
    <div className={classes.similarList}>
      {
          sim.map((movie) => (
            <Card
              key = {film.id+Math.random()}
              image={`${urlImage}${movie.poster_path}`}
              film={movie}
            ></Card>
          ))
        
      }
    </div>
  );
}

export default SimilarFilms;
