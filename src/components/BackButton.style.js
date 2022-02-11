import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  button: {
    background: "black",
    color: "white",
    padding: "6px 8px",
    textDecoration: "none",
  },
}));

export default useStyles;
