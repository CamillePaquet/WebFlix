import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  listRating: {
    display: "flex",
    listStyle: "none",
  },
  imgRating: {
    width: "60px",
  },
}));

export default useStyles;
