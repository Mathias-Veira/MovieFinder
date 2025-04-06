import { useFetchData } from "../../hooks/useFetchData";
import "./home.css";

export const Home = () => {
  const movies = useFetchData();

  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 d-flex w-100 align-items-center column-gap-1 text-white">
            <i className="fa-solid fa-film"></i>
            <p className="mb-0 ">MovieFinder</p>
          </span>
        </div>
      </nav>
      <hr className="hr-thin" />

      <div className="container-fluid bg-dark">
        <div className="movies">
          <h6 className="text-white">Películas</h6>
          <div className="mostrarMovies text-white">
            {movies.map((movie) => (
              <>
                <div className="movie-card">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${movie.urlPosterPelicula}`}
                    alt="pelicula"
                  />
                  <p key={movie.idPelicula}>{movie.tituloPelicula}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
