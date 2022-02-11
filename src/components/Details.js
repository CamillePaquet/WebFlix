import { useParams } from "react-router-dom";
import films from "../films.json";
import Chip from "./Chip";

function Details() {
  const params = useParams();

  const id = params.id;

  const film = films.movies.find(
    (movie) => movie.id.toString() === id.toString()
  );

  return (
    <>
      <p>{film.title}</p>
      <Chip id={film.genre_ids[0]}></Chip>
    </>
  );
}

export default Details;
