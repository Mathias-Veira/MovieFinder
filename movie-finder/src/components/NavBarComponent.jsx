export const NavBarComponent = () => {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-75">
            <span className="navbar-brand mb-0 h1 d-flex align-items-center column-gap-1 text-white">
              <i className="fa-solid fa-film"></i>
              <p className="mb-0 ">MovieFinder</p>
            </span>
            <a href="/home" className="text-white text-decoration-none">Inicio</a>
            <a href="/proximamente" className="text-white text-decoration-none">Próximamente</a>
            <a href="/historial" className="text-white text-decoration-none">Historial</a>
            <a href="/favoritos" className="text-white text-decoration-none">Favoritos</a>
          </div>
        </div>
      </nav>
      <hr className="border-top m-0" />
    </>
  );
};
