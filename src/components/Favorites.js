import GridCards from "./GridCards.js";
import { useDispatch, useSelector } from "react-redux";
import { favoritesSlice } from "../slices";


function Favorites(props) {

  const films = useSelector((state) => state.favorites);

  // console.log(films)


  return (
    <div>
        <GridCards data={films} addToFavorite={props.addToFavorite} favorites={props.favorites}></GridCards>
    </div>
  );
}



export default Favorites;
