import useStyles from "./InputSearch.style";
import { useEffect, useState,useCallback } from "react";
import { useSearchParams, useParams } from "react-router-dom";

function InputSearch(props) {
  const [searchParams,setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");
  const classes = useStyles();

  useEffect(() => {
    if (searchParams.has('title')) {
      setValue(searchParams.get('title').toLocaleUpperCase());
    } 
  }, [searchParams])
  
  useEffect(() => {
    props.onAdd(value.toLocaleUpperCase());
  }, [value])

  const onChange = useCallback((event) => {
    setValue(event.target.value.toLocaleUpperCase());
    setSearchParams(event.target.value ? { title: event.target.value } : {});
  }, [setSearchParams]);

  return (
    <input className={classes.inputSearch}
      type="text"
      value={value}
      onChange={onChange}
    />
  );

}

export default InputSearch;
