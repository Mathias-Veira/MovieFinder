import { useParams } from "react-router-dom";
import { NavBarComponent } from "../../components/NavBarComponent";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { useState } from "react";
export const MovieDetail = () => {
  const { idPelicula } = useParams();
  const { details, cast, crew } = useMovieDetail(idPelicula);
  const [selectedTab, setSelectedTab] = useState("about");
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <div className="container-fluid bg-dark h-100 w-100">
        <div className="p-4">
          <div className="row h-75">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <img
                  
                  src={`http://image.tmdb.org/t/p/w342${details?.poster_path}`}
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
                    About
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
                    Cast & Crew
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
