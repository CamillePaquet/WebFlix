import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
  },
  img: {
    width: "150px",
    height: "auto",
  },
  link: {
    height: "225px",
  },
}));

export default useStyles;
