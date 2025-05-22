import { useParams } from "react-router-dom";
import { NavBarComponent } from "../../components/NavBarComponent";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useState } from "react";
import { AboutPageComponent } from "../../components/AboutPageComponent";
import { CastPageComponent } from "../../components/CastPageComponent";
import { useMarkMovies } from "../../hooks/useMarkMovies";
import ValoracionComponent from "../../components/ValoracionComponent";
export const MovieDetail = () => {
  const { idPelicula } = useParams();
  const { details, cast, crew } = useMovieDetail(idPelicula);
  const [selectedTab, setSelectedTab] = useState("about");
  let user = leerCookie('usuario');
  user = JSON.parse(JSON.parse(user));
  const {markMovieAsSeen,markMovieAsFavourite,seen,favourite} = useMarkMovies(parseInt(idPelicula),user.idUsuario);
  
  
  function leerCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

  return (
    <>
      <NavBarComponent></NavBarComponent>
      <div className="container-fluid bg-dark h-100" style={{ overflowY: "auto" }}>
        <div className="p-4 ">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img
                  
                  src={`http://image.tmdb.org/t/p/w342${details.poster_path==null?details.backdrop_path:details.poster_path}`}
                ></img>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <p
                className="fs-1 text-white w-25 mb-0"
                style={{ marginLeft: "33.6%" }}
              >
                {details?.title}
              </p>
              <p
                className="fs-4 text-white w-100 mb-0 fst-italic"
                style={{ marginLeft: "33.6%" }}
              >
                {details?.tagline}
              </p>
              <p
                className="fs-6 text-white w-25 mb-0"
                style={{ marginLeft: "33.6%" }}
              >
                {details?.overview}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="w-100 my-3 d-flex justify-content-start">
              <div className="justify-content-center" style={{
        backgroundColor: "white",
        border: "2px solid #ccc",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        marginLeft: "33.6%"
      }}> 
            <i onClick={markMovieAsSeen} className={`fa-solid fa-eye${seen?"":"-slash"}`}></i>
              </div>


              <div className="justify-content-center mx-3" style={{
        backgroundColor: "white",
        border: "2px solid #ccc",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}> 
            <i onClick={markMovieAsFavourite} className={`fa-${favourite?"solid":"regular"} fa-bookmark`}></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul
                className="nav nav-tabs"
                style={{
                  marginLeft: "33.6%",
                  borderBottom: "1px solid #444",
                  width: "fit-content",
                }}
              >
                <li className="nav-item">
                  <a
                    className={`nav-link ${selectedTab == "about"?"active":""}`}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: selectedTab == "about"?"3px solid white":"0px",
                      color: selectedTab == "about"?"white":"#aaa",
                      fontWeight: selectedTab == "about"?"bold":"normal",
                    }}
                    
                    onClick={()=>setSelectedTab("about")}
                  >
                    Acerca de
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${selectedTab == "cast&crew"?"active":""}`}
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      borderBottom: selectedTab == "cast&crew"?"3px solid white":"0px",
                      color: selectedTab == "cast&crew"?"white":"#aaa",
                      fontWeight: selectedTab == "cast&crew"?"bold":"normal",
                    }}
                    
                    onClick={() => setSelectedTab("cast&crew")}
                  >
                    Reparto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {selectedTab == "about"?<AboutPageComponent details={details}></AboutPageComponent>:<CastPageComponent cast={cast} crew={crew} ></CastPageComponent>}
          <ValoracionComponent idPelicula={idPelicula}></ValoracionComponent>
        </div>
      </div>
    </>
  );
};
