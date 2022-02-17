import { Link } from "react-router-dom";

import Card from "./Card.js";

import useStyles from "./GridCard.style";

function GridCards(props) {
  const films = props.data;
  const classes = useStyles();
  return (
    <div>
      <ul className={classes.root}>
        {films.map((film) => (
          <li className={classes.listElement} key={film.id}>
            <Card
              title={film.title}
              image={film.poster_path}
              id={film.id}
            ></Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GridCards;
