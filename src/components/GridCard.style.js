import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(3,auto)",
    gap: 3,
    listStyle: "none",
    padding: 0,
    justifyContent: "center",
  },
  listElement: {
    margin: 0,
  },
}));

export default useStyles;
