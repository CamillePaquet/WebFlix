import { useParams, Navigate } from "react-router-dom";
import films from "../films.json";
import Chip from "./Chip";
import SimilarFilms from "./SimilarFilms";
import BackButton from "./BackButton";
import useStyles from "./Details.style";
import Rating from "./Rating";
import { useQuery } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function buildUrl(id) {
  return `${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
}

function Details() {
  const params = useParams();
  const classes = useStyles();
  const id = params.id;
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  const { data, isLoading, isFetching, error } = useQuery(["movie", id], () =>
    fetch(buildUrl(id)).then((response) => response.json()),
  );

  // const film = films.movies.find(
  //   (movie) => movie.id.toString() === id.toString()
  // );;
 
  // if (!film) return <Navigate to="/" replace={true} />;

  // let similar = [];
  // film.genre_ids.map((film_genre) => {
  //   similar = films.movies.filter((movie) =>
  //     movie.genre_ids.includes(film_genre)
  //   );
  // });

  // const films_similar = similar.filter((movie) => movie.title != film.title);
    
console.log(id)

  return (
    
    <div>

      <div className={classes.buttonContainer}>
        <BackButton> </BackButton>
      </div>
      {error && <div className={classes.error}><div> Error</div></div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
      <div className={classes.container}>
        <div className={classes.detailsContainer}>
          <div className={classes.afficheContainer}>
            <img
              className={classes.img}
              src={`${urlImage}${data.poster_path}`}
              alt="affiche du film"
            ></img>
          </div>
          <div className={classes.donneesContainer}>
            <h1>{data.title}</h1>
            <span> Sorti le {data.release_date}</span>
            <ul className={classes.listChip}>
              {data.genres.map((genre) => (
                <li className={classes.elementChip} key={genre.id}>
                  <Chip genre={genre}></Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className={classes.resumeFilm}> {data.overview}</p>
          <div className={classes.notesContainer}>
            <h3> Notes du public : </h3>
            <Rating note={data.vote_average}></Rating>
          </div>
          <div>
            <h3>Contenu similaire : </h3>
            <SimilarFilms film={data} />
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
