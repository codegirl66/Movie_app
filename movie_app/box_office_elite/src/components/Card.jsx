import { Link } from "react-router-dom";
import backup from "../assets/backup.jpg";

export const Card = ({ movie }) => {
  // Destructure the properties from the movie object
  const { poster_path, id, overview, title, vote_count, vote_average } = movie;

  // Use a fallback image if poster_path is missing
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}` // Using w500 for better performance
    : backup;

  return (
    <div className="col">
      <div className="card h-100 shadow-sm" title={title}>
        <img
          src={image}
          alt={title || "Movie Poster"}
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-overflow-1">
            {title || "Title Not Available"}
          </h5>

          <p className="card-text text-overflow-2">
            {overview || "No description available for this title."}
          </p>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <Link
              to={`/movie/${id}`}
              className="btn btn-sm btn-outline-teal stretched-link"
            >
              Read More
            </Link>
            <small>
              <i className="bi bi-star-fill text-warning"></i>
              {/* FIX: Add logic to correctly pluralize "review" vs "reviews" */}
              {vote_average} | {vote_count}{" "}
              {vote_count === 1 ? "review" : "reviews"}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
