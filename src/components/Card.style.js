import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    width: "150px",
    height: "auto",
  },
}));

export default useStyles;
