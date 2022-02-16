import InputSearch from "./InputSearch";
import GridCards from "./GridCards";
import films from "../films.json";
import { useState } from "react";
import useStyles from "./Home.style";

function Home() {
  let filmsdup = structuredClone(films);

  const [filmslist, setFilms] = useState(filmsdup);

  const onAdd = (value) => {
    filmsdup = structuredClone(films);
    filmsdup.movies = filmsdup.movies.filter((film) => film.title.toLocaleUpperCase().includes(value))
    setFilms(filmsdup);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputSearch onAdd={onAdd}></InputSearch>

      <GridCards data={filmslist}></GridCards>
    </div>
  );
}

export default Home;
