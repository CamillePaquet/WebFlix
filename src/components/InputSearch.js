import useStyles from "./InputSearch.style";
import { useState } from "react";
function InputSearch(props) {

  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value.toLocaleUpperCase());
    props.onAdd(event.target.value.toLocaleUpperCase());
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
