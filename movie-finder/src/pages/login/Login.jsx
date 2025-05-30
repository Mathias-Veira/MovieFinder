import { Link } from "react-router-dom";
import "./login.css";
import { useSubmit } from "../../hooks/useSubmit";
import { useEffect } from "react";
import { NavBarComponent } from "../../components/NavBarComponent";

export const Login = () => {
  const { form, handleOnChange, handleSubmit,handleOnBlur,hasError,navigate,leerCookie } = useSubmit(true);
  useEffect(() => {
    const user = leerCookie('usuario');
    if(user) navigate('/home')
  }, [])
  
  return (
    <>
      <NavBarComponent></NavBarComponent>
      
      <form className="bg-dark form h-100" onSubmit={handleSubmit}>
        <div className="mb-3 inputs">
          <label htmlFor="userNameInput" className="form-label text-white ms-5">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="userNameInput"
            name="nombreUsuario"
            value={form.nombreUsuario}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            required
          />
          <p className="errores" hidden={!hasError.nombreUsuario.error}>
            {hasError.nombreUsuario.textError}
          </p>
        </div>
        <div className="mb-3 inputs">
          <label htmlFor="passwordInput" className="form-label text-white ms-5">
            Contraseña
          </label>
          <input
            name="passwordUsuario"
            type="password"
            className="form-control"
            id="passwordInput"
            value={form.passwordUsuario}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            required
          />
          <p className="errores"  hidden={!hasError.passwordUsuario.error}>
            {hasError.passwordUsuario.textError}
          </p>
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <p className="text-white">¿No tienes cuenta?</p>
          <Link to={'/registro'} className="text-white">
            Regístrate
          </Link>
        </div>
        <button type="submit" className="btn btn-primary" disabled={hasError.nombreUsuario.error || hasError.passwordUsuario.error}>
          Log In
        </button>
      </form>
    </>
  );
};
