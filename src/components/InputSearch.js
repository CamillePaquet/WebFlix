import useStyles from "./InputSearch.style";

function InputSearch(props) {
  const onChange = props.onChange;
  const value = props.value;
  const classes = useStyles();
  return (
    <input
      className={classes.inputSearch}
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default InputSearch;
