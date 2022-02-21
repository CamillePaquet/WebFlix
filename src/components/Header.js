import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./Header.style";

function Header(props) {
  const classes = useStyles();
 
  return (
    <header className={classes.root}>
      <Link className={classes.link} to="/">
        <h1 className={classes.title}>Webflix</h1>
      </Link>
      <Link className={classes.link} to="/favorites">
          {`Favorites (${props.favorites.length})`}
      </Link>
    </header>
  );
}

Header.defaultProps = {
  favorites: [],
};

export default Header;