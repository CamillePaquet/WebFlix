import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  buttonContainer: {
    textAlign: "right",
    marginRight: 20,
  },
  detailsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    margin: "4em 10em",
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
    width: 300,
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
    gridColumn: "1 / 3",
    gridRow: "2",
  },
  notesContainer: {
    gridColumn: "1 / 3",
  },
}));

export default useStyles;
