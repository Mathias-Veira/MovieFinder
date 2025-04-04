import "./login.css";
import { useState } from "react";
export const Login = () => {
  const [form, setForm] = useState({
    nombreUsuario:"",
    passwordUsuario:""
  });
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(form);
  };

  const handleOnChange = ({target}) =>{
    const {name, value} = target;

    setForm({
      ...form,
      [name]:value
    });
  }
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 d-flex w-100 align-items-center column-gap-1 text-white">
            <i className="fa-solid fa-film"></i>{" "}
            <p className="mb-0 ">MovieFinder</p>
          </span>
        </div>
      </nav>
      <hr className="hr-thin" />

      <form className="bg-dark" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userNameInput" className="form-label text-white">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="userNameInput"
            name="nombreUsuario"
            value={form.nombreUsuario}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label text-white">
            Contraseña
          </label>
          <input
            name="passwordUsuario"
            type="password"
            className="form-control"
            id="passwordInput"
            value={form.passwordUsuario}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <p className="text-white">¿No tienes cuenta?</p>
          <a href="" className="text-white">Registrate</a>
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </>
  );
};
