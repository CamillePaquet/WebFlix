import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    width: "40%",
    margin: "auto",
    listStyle: "none",
  },
  listElement: {
    margin: 0,
  },
}));

export default useStyles;
