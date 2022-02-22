import data from "../films.json";
import useStyles from "./Chip.style";

function Chip(props) {
  const classes = useStyles();
  const label = data.genres[props.id];
  if (!label) return null;
  return (
    <div data-testid="chip" className={classes.root}>
      {label}
    </div>
  );
}

export default Chip;
