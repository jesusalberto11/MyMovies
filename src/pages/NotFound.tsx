import { Link } from "react-router-dom";
import "../styles/pages/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page flex centered">
      <h1>Oops!</h1>
      <h2>Error 404, page not found!</h2>
      <div>
        <Link className="link-button flex centered" to={"/"}>
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
