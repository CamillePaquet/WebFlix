
import Card from "./Card"
import useStyles from "./SimilarFilms.style";

function SimilarFilms(props) {
  const similar = props.similar;

  const classes = useStyles();
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className={classes.similarList}>
      {similar.map((movie) => (
        <Card
          image={`${urlImage}${movie.poster_path}`}
          title={movie.title}
          id={movie.id}
          key={movie.id}
        ></Card>
      ))}
    </div>
  );
}

export default SimilarFilms;
