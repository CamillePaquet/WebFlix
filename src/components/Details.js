import { useParams } from "react-router-dom";
import films from "../films.json";

function Details() {
  const params = useParams();

  const id = params.id;

  const film = films.movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  return <p>{film.title}</p>;
}

export default Details;
