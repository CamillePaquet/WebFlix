import { Link } from "react-router-dom";

import useStyles from "./Card.style";

function Card(props) {
  const image = props.image;
  const film = props.film;

  const urlImage = "https://image.tmdb.org/t/p/w500/";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link className={classes.link} to={`/films/${film.id}`}>
        <img
          className={classes.img}
          src={`${urlImage}${film.poster_path}`}
          alt="affiche du film"
        ></img>
      </Link>
      <button onClick={props.addToFavorite(film)}>
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
}


Card.defaultProps = {
  favorites: [],
  addToFavorite: Function.prototype,
};

export default Card;
