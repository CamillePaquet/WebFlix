import { Link } from "react-router-dom";

function Card(props) {
  const urlImage = "https://image.tmdb.org/t/p/w500/";
  const image = props.image;
  const titre = props.titre;
  const id = props.id;
  console.log(urlImage);
  return (
    <Link to={`/films/${id}`} className="Card-container">
      <img
        className="Card-image"
        src={`${urlImage}${image}`}
        alt="affiche du film"
      ></img>
      <h3 className="Card-titre">{titre}</h3>
    </Link>
  );
}

export default Card;
