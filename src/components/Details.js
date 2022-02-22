import { useParams } from "react-router-dom";
import Chip from "./Chip";
import SimilarFilms from "./SimilarFilms";
import BackButton from "./BackButton";
import useStyles from "./Details.style";
import Rating from "./Rating";

import { useDispatch, useSelector } from "react-redux";




function Details(props) {
  const params = useParams();
  const classes = useStyles();
  const id = params.id;
  const urlImage = "https://image.tmdb.org/t/p/w500/";

 
    
  const movies = useSelector((state) => state.movies);
  const data = movies.filter((movie) => movie.id == id)[0]
  
  console.log(data)
  return (
    
    <div>

      <div className={classes.buttonContainer}>
        <BackButton> </BackButton>
      </div>

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
            {data.genre_ids.map((genre_id) => (
              <li className={classes.elementChip} key={genre_id}>
                <Chip id={genre_id}></Chip>
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
            <SimilarFilms film={data}/>
          </div>
          </div>
        </div>

    </div>
  );
}

export default Details;
