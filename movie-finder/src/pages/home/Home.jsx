import { useFetchData } from "../../hooks/useFetchData";
import "./home.css";
import * as React from 'react';
import { Pagination } from '@mui/material'
import { NavBarComponent } from "../../components/NavBarComponent";

export const Home = () => {
  const {data,handleChange,totalPages} = useFetchData();
  
  return (
    <>
      <NavBarComponent></NavBarComponent>

      <div className="container-fluid bg-dark">
        <div className="movies">
          <h6 className="text-white">Movies</h6>
          <div className="mostrarMovies text-white">
            {data?.map((movie) => (
              
                <div key={movie.idPelicula}  className="movie-card">
                  <img
                    src={`http://image.tmdb.org/t/p/w185/${movie.urlPosterPelicula}`}
                    alt="pelicula"
                  />
                  <p className="mb-0">{movie.tituloPelicula}</p>
                  <p className="mb-0 ">{new Date(movie.fechaSalidaPelicula).getFullYear()}</p>
                </div>
              
            ))}
          </div>
          <div className="d-flex justify-content-center w-100 color-white">
          <Pagination onChange={handleChange} color="primary" size="large" count={totalPages} showFirstButton showLastButton sx={{
        '& .MuiPaginationItem-root': {
          color: 'white', // cambia el color del número
          borderColor: 'white', // cambia el color del borde del botón
        },
        '& .Mui-selected': {
          backgroundColor: 'white',
          color: 'black',
        },
      }}></Pagination>
          </div>
          
        </div>
      </div>
    </>
  );
};
