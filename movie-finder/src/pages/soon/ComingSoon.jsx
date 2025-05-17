import { NavBarComponent } from "../../components/NavBarComponent";
import { useFetchComingSoon } from "../../hooks/useFetchComingSoon";
import "../../index.css";
import { Pagination } from "@mui/material";

export const ComingSoon = () => {
  const { data, handleChange,totalPages,handlePage,navigateToDetail } = useFetchComingSoon();
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <div className="container-fluid bg-dark h-100">
        <div className="p-4 w-100 h-100">
          <div className="d-flex flex-wrap gap-5 w-100 text-white">
            {(data).map((movie) => (
              <div
                key={movie.id}
                className="d-flex flex-column movie"
                onClick={() => navigateToDetail(movie.id)}
                style={{ width: "6%", fontSize: "1em" }}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w185${movie.poster_path==null?movie.backdrop_path:movie.poster_path}`}
                  alt=""
                />
                <p className="mb-0">{movie.title}</p>
                <p className="mb-0 ">
                  {new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center w-100 color-white">
            <Pagination
              page={handlePage + 1}
              onChange={handleChange}
              color="primary"
              size="large"
              count={totalPages}
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
  )
}
