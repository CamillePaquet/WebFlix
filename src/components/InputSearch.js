import useStyles from "./InputSearch.style";
import { useEffect, useState } from "react";
import { useSearchParams,useHistory } from "react-router-dom";
function InputSearch(props,ref) {
  const [params] = useSearchParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (params.get('title')) {
      setValue(params.get('title').toLocaleUpperCase());
    }
  }, [params])
  
  useEffect(() => {
    props.onAdd(value.toLocaleUpperCase());
    
  }, [value])


  const onChange = (event) => {
    setValue(event.target.value.toLocaleUpperCase());
  };

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
  );

}

export default InputSearch;
