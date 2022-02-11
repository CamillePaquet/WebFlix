import { Link } from "react-router-dom";
import useStyles from "./BackButton.style";

function BackButton() {
  const classes = useStyles();
  return (
    <Link className={classes.button} to="/">
      Retour
    </Link>
  );
}

export default BackButton;
