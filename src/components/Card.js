import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../slices";
import useStyles from "./Card.style";

function Card(props) {
  const image = props.image;
  const film = props.film;

  const urlImage = "https://image.tmdb.org/t/p/w500/";
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ film }));
  };



  return (
    <div className={classes.root}>
      <Link className={classes.link} to={`/films/${film.id}`}>
        <img
          className={classes.img}
          src={`${urlImage}${film.poster_path}`}
          alt="affiche du film"
        ></img>
      </Link>
      <button onClick={addToFavorite}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
}


export default Card;
