import { useFetchData } from "../../hooks/useFetchData";
import "./home.css";

export const Home = () => {
  const movies = useFetchData(0);

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
          <h6 className="text-white">Movies</h6>
          <div className="mostrarMovies text-white">
            {movies.map((movie) => (
              
                <div key={movie.idPelicula}  className="movie-card">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${movie.urlPosterPelicula}`}
                    alt="pelicula"
                  />
                  <p className="mb-0">{movie.tituloPelicula}</p>
                  <p className="mb-0 ">{movie.fechaSalidaPelicula}</p>
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
