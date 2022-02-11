import { useParams } from "react-router-dom";
import films from "../films.json";
import Chip from "./Chip";
import BackButton from "./BackButton";
import useStyles from "./Details.style";

function Details() {
  const params = useParams();
  const classes = useStyles();
  const id = params.id;
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  const film = films.movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  return (
    <>
      <div className={classes.buttonContainer}>
        <BackButton> </BackButton>
      </div>
      <div className={classes.detailsContainer}>
        <img
          className={classes.img}
          src={`${urlImage}${film.poster_path}`}
          alt="affiche du film"
        ></img>
        <p>{film.title}</p>
      </div>

      <Chip id={film.genre_ids[0]}></Chip>
    </>
  );
}

export default Details;
