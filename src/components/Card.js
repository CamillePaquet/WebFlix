import { Link } from "react-router-dom";

import useStyles from "./Card.style";

function Card(props) {
  const image = props.image;
  const title = props.title;
  const id = props.id;

  const urlImage = "https://image.tmdb.org/t/p/w500/";
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={`/films/${id}`}>
        <img
          className={classes.img}
          src={`${urlImage}${image}`}
          alt="affiche du film"
        ></img>
      </Link>
    </div>
  );
}

export default Card;
