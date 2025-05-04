export const CastPageComponent = ({ cast, crew }) => {
  const TOTAL_ACTORES = 10;
  const TOTAL_CREW = 10;
  let actores = 1;
  return (
    <div className="row">
      <div className="col-12">
        {cast?.map((reparto) =>{
            if(actores<=TOTAL_ACTORES && reparto.profile_path != null){
              actores++;
              return(
                <div key={reparto?.id} className="d-flex align-items-start mb-3 flex-column" style={{ paddingLeft: "33.6%" }}>
                  <img src={`http://image.tmdb.org/t/p/w92${reparto?.profile_path}`}className="ms-1" alt=""></img>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{reparto.name}</p>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{reparto.character}</p>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{reparto.known_for_department}</p>
                </div>
              ) 
            }
                 
        })}
      </div>
    </div>
  );
};
