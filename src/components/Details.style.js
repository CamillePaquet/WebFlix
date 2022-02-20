import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  buttonContainer: {
    textAlign: "right",
    marginRight: 20,
  },
  container: {
    margin: "0 10%",
  },
  detailsContainer: {
    display: "flex",
    justifyContent: "space-around",

  },
  afficheContainer: {
    textAlign: "center",
  },
  donneesContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },
  img: {
    width: "200px",
    height: "auto"
  },
  listChip: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
  },
  elementChip: {
    listStyle: "none",
    margin: "0 2px",
  },
  resumeFilm: {
    textAlign: "center"
  },

}));

export default useStyles;
