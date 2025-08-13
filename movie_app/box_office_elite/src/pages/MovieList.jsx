import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath);
  const navigator = useNavigate();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <main className="container">
        {title === "Your Guide to Great Movies" ? (
          // CORRECTED: Using responsive padding (p-3 on mobile, p-md-5 on larger screens)
          <div className="bg-body-tertiary p-3 p-md-5 border mb-5 rounded">
            <h3 style={{ color: "teal" }}>Welcome to BoxOffice Elite</h3>
            <p className="lead">
              Experience the magic of cinema with real-time updates on the
              world’s top-rated movies and box office champions.
            </p>
            <button
              className="explore btn"
              onClick={() => {
                navigator("/movies/upcoming");
              }}
            >
              Explore Now
            </button>
          </div>
        ) : (
          ""
        )}
        <h5 className="text-danger py-2 border-bottom">{title}</h5>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-3">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </main>
    </div>
  );
};
