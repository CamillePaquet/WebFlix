import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "inline-block",
    height: "auto",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
  },
  img: {
    width: "150px",
    height: "200px",
  },
  link: {
    display: "flex",
  },
}));

export default useStyles;
