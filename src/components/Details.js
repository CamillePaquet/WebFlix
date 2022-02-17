import { useParams, Navigate } from "react-router-dom";
import films from "../films.json";
import Chip from "./Chip";
import SimilarFilms from "./SimilarFilms";
import BackButton from "./BackButton";
import useStyles from "./Details.style";
import Rating from "./Rating";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function Details() {
  const params = useParams();
  const classes = useStyles();
  const id = params.id;
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  const film = films.movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  if (!film) return <Navigate to="/" replace={true} />;

  let similar = [];
  film.genre_ids.map((film_genre) => {
    similar = films.movies.filter((movie) =>
      movie.genre_ids.includes(film_genre)
    );
  });

  const films_similar = similar.filter((movie) => movie.title != film.title);

    
    


  return (
    <div>
      <div className={classes.buttonContainer}>
        <BackButton> </BackButton>
      </div>
      <div className={classes.detailsContainer}>
        <div className={classes.afficheContainer}>
          <img
            className={classes.img}
            src={`${urlImage}${film.poster_path}`}
            alt="affiche du film"
          ></img>
        </div>
        <div className={classes.donneesContainer}>
          <h1>{film.title}</h1>
          <span> Sorti le {film.release_date}</span>
          <ul className={classes.listChip}>
            {film.genre_ids.map((genre_id) => (
              <li className={classes.elementChip} key={genre_id}>
                <Chip id={genre_id}></Chip>
              </li>
            ))}
          </ul>
        </div>
        <p className={classes.resumeFilm}> {film.overview}</p>
        <div className={classes.notesContainer}>
          <h3> Notes du public : </h3>
          <Rating note={film.vote_average}></Rating>
        </div>
        <div>
          <h3>Contenu similaire : </h3>
          <SimilarFilms similar={films_similar}/>
        </div>
      </div>
    </div>
  );
}

export default Details;
