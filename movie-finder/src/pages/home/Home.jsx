import { useFetchData } from "../../hooks/useFetchData";
import "./home.css";
import * as React from 'react';
import { Pagination } from '@mui/material'

export const Home = () => {
  const {data,handleChange,totalPages} = useFetchData();
  
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
