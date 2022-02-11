import InputSearch from "./InputSearch";
import GridCards from "./GridCards";
import films from "../films.json";
import { useState } from "react";
import useStyles from "./Home.style";

function Home() {
  const [value, setValue] = useState();
  const onChange = (event) => setValue(event.target.value);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputSearch value={value} onChange={onChange}></InputSearch>
      <GridCards data={films}></GridCards>
    </div>
  );
}

export default Home;
