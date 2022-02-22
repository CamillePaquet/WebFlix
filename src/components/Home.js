import InputSearch from "./InputSearch";
import GridCards from "./GridCards";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./Home.style";



function Home(props) {
  
  const [paramsValue, setParamValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, [dispatch]);

  const movies = useSelector((state) => state.movies);
  
  const onAdd = (value) => {
    setParamValue(value);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputSearch onAdd={onAdd}></InputSearch>
      <GridCards data={movies}></GridCards>
    </div>
  );
}

export default Home;
