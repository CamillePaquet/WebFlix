import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    margin: "auto",
    listStyle: "none",
  },
}));

export default useStyles;
