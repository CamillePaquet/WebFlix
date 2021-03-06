import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  listRating: {
    display: "flex",
    listStyle: "none",
  },
  imgRating: {
    width: "50px",
  },
}));

export default useStyles;
