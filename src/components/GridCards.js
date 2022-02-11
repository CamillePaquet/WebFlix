import { Link } from "react-router-dom";
import films from "../films.json";
import Card from "./Card.js";

function GridCards() {
  return (
    <div>
      <ul>
        {films.movies.map((film) => (
          <li key={film.id}>
            <Link to={`/films/${film.id}`}>
              <Card
                title={film.title}
                image={film.poster_path}
                id={film.id}
              ></Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GridCards;
