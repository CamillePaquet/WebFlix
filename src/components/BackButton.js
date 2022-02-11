import { Link } from "react-router-dom";

function BackButton() {
  return (
    <input className="Back-button">
      <Link to="/">Home</Link>
    </input>
  );
}

export default BackButton;
