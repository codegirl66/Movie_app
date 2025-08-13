import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backup from "../assets/backup.jpg";

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : backup;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setMovie(jsonData);
    }
    fetchMovie();
  }, [url]);

  useEffect(() => {
    document.title = `${movie.title}`;
  }, [movie.title]);

  return (
    <main className="container">
      <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img
            src={image}
            className="img-fluid img-thumbnail"
            alt={movie.title}
          />
        </div>
        <div className="col-md-8">
          <h3 style={{ color: "rgb(1, 102, 102)" }}>{movie.title}</h3>
          <p className="mt-3">{movie.overview}</p>

          {movie.genres ? (
            <p className="d-flex gap-3">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-danger">
                  {genre.name}
                </span>
              ))}
            </p>
          ) : (
            ""
          )}
          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i>{" "}
            {movie.vote_average} |{" "}
            <i className="bi bi-people-fill text-success"></i>{" "}
            {movie.vote_count}
          </p>

          <table className="table table-bordered w-50 mt-2">
            <tbody>
              <tr>
                <th>Runtime</th>
                <td>
                  {movie.runtime
                    ? `${Math.floor(movie.runtime / 60)}h ${
                        movie.runtime % 60
                      }m`
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>
                  {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>
                  {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
                </td>
              </tr>
              <tr>
                <th>Release Date</th>
                <td>{movie.release_date}</td>
              </tr>
            </tbody>
          </table>

          <a
            className="btn btn-warning"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
          >
            View in IMDB
          </a>
        </div>
      </div>
    </main>
  );
};
