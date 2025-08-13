import { Link } from "react-router-dom";
import pagenotfound from "../assets/pagenotfound.jpg";
export const PageNotFound = () => {
  return (
    <div className="container">
      <center>
        <img src={pagenotfound} className="img-fluid mt-5" />
      </center>
      <p className="text-center">
        <Link to="/" className="btn btn-danger">
          Goto Home Page
        </Link>
      </p>
    </div>
  );
};
