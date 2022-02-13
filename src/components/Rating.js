import starpleine from "../assets/star.png";
import starvide from "../assets/stars_vide.png";
import useStyles from "./Rating.style";
function Rating(props) {
  const note = props.note;
  const classes = useStyles();
  const number_stars = Math.floor(note / 2);
  const number_stars_vides = 5 - number_stars;
  let stars_pleines = [];
  let stars_vides = [];
  for (let i = 0; i < number_stars; i++) {
    stars_pleines.push(
      <li key={i + 10} className={classes.elementRating}>
        <img src={starpleine} className={classes.imgRating} alt=""></img>
      </li>
    );
  }
  for (let i = 0; i < number_stars_vides; i++) {
    stars_vides.push(
      <li key={i * 2.399} className={classes.elementRating}>
        <img src={starvide} className={classes.imgRating} alt=""></img>
      </li>
    );
  }
  // {stars_vides.each((star, idx) => (
  //   <li key={idx + 20}>
  //     <img src="../public/assets/stars_vide.png"></img>
  //   </li>
  // ))}
  return (
    <ul className={classes.listRating}>
      {stars_pleines}
      {stars_vides}
    </ul>
  );
}

export default Rating;
