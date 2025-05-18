import { NavBarComponent } from "../../components/NavBarComponent";
import { useFetchFavouritesSeen } from "../../hooks/useFetchFavouritesSeen";
import "../../index.css";
export const Historial = () => {
  const {data,navigateToDetail } = useFetchFavouritesSeen(false);
  return (
    <>
          <NavBarComponent></NavBarComponent>
          <div className="container-fluid bg-dark h-100">
            <div className="p-4 w-100 h-100">
              <div className="d-flex flex-wrap gap-5 w-100 text-white">
                {(data).map((movie) => (
                  <div
                    key={movie.idPelicula}
                    className="d-flex flex-column movie"
                    onClick={() => navigateToDetail(movie.idPelicula)}
                    style={{ width: "6%", fontSize: "1em" }}
                  >
                    <img
                      src={`http://image.tmdb.org/t/p/w185${movie.urlPosterPelicula}`}
                      alt=""
                    />
                    <p className="mb-0">{movie.tituloPelicula}</p>
                    <p className="mb-0 ">
                      {new Date(movie.fechaSalidaPelicula).getFullYear()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
  );
};
