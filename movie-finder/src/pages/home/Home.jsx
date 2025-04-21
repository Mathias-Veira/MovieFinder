import { useFetchData } from "../../hooks/useFetchData";
import "../../index.css";
import * as React from "react";
import { Pagination } from "@mui/material";
import { NavBarComponent } from "../../components/NavBarComponent";
import { useGenres } from "../../hooks/useGenres";
import { useFilters } from "../../hooks/useFilters";

export const Home = () => {
  const { data, handleChange, totalPages,handlePage } = useFetchData();
  const {genre} = useGenres();
  const { movies, handleFilterChange,handleGenreChange, paginasTotales,handleFilterPage } = useFilters();
  return (
    <>
      <NavBarComponent></NavBarComponent>

      <div className="container-fluid bg-dark h-100">
        <div className="p-4 w-100 h-100">
          <div className="d-flex justify-content-between w-25 mb-3">
          <h6 className="text-white">Movies</h6>
          {/* Aquí van los filtros */}
          <div>
              <select name="" id="" onChange={handleGenreChange}>
                <option value="-1">Selecciona una opción</option>
                {genre.map((genero) => (

                    <option key={genero.idGenero} value={genero.idGenero}>{genero.nombreGenero}</option>
                ))}
              </select>
          </div>
          </div>  
          <div className="d-flex flex-wrap gap-5 w-100 text-white">
            {(movies.length>0?movies:data).map((movie) => (
              <div key={movie.idPelicula} className="d-flex flex-column movie" style={{width:"6%", fontSize: "1em"}}>
                <img
                  src={`http://image.tmdb.org/t/p/w185/${movie.urlPosterPelicula}`}
                  alt="pelicula"
                />
                <p className="mb-0">{movie.tituloPelicula}</p>
                <p className="mb-0 ">
                  {new Date(movie.fechaSalidaPelicula).getFullYear()}
                </p>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center w-100 color-white">
            <Pagination
              page={movies.length>0?handleFilterPage+1:handlePage+1}
              onChange={movies.length>0?handleFilterChange:handleChange}
              color="primary"
              size="large"
              count={movies.length>0?paginasTotales:totalPages}
              showFirstButton
              showLastButton
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "white", // cambia el color del número
                  borderColor: "white", // cambia el color del borde del botón
                },
                "& .Mui-selected": {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            ></Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
