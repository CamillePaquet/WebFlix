import InputSearch from "./InputSearch";
import GridCards from "./GridCards";
import films from "../films.json";
import {  useState } from "react";
import useStyles from "./Home.style";
import { useQuery } from "react-query";

function buildUrl(value) {

  return value.length > 0
    ? `${process.env.REACT_APP_API_URL}/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
    : `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function Home() {
  
  const [paramsValue, setParamValue] = useState("");

  const { data, isLoading, isFetching, error } = useQuery(["movies", paramsValue], () =>
    fetch(buildUrl(paramsValue)).then((response) => response.json())
  );
  
  const onAdd = (value) => {
    setParamValue(value);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputSearch onAdd={onAdd}></InputSearch>
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <GridCards data={data?.results}></GridCards>
        )}
    </div>
  );
}

export default Home;
