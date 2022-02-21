import GridCards from "./GridCards.js";




function Favorites(props) {

  const films = props.favorites;

  return (
    <div>
        <GridCards data={films} addToFavorite={props.addToFavorite} favorites={props.favorites}></GridCards>
    </div>
  );
}



export default Favorites;
