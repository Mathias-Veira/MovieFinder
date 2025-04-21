import "./registro.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSubmit } from "../../hooks/useSubmit";
import { NavBarComponent } from "../../components/NavBarComponent";
export const Registro = () => {
  const { form, handleOnChange, handleSubmit,handleOnBlur,hasError,navigate,leerCookie } = useSubmit(false);

  useEffect(() => {
      const user = leerCookie('usuario');
      if(user) navigate('/home')
    }, [])
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <form className="bg-dark form h-100" onSubmit={handleSubmit}>
        <div className="mb-3 inputs">
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
            onBlur={handleOnBlur}
            required
          />
          <p className="errores" hidden={!hasError.nombreUsuario.error}>
            {hasError.nombreUsuario.textError}
          </p>
        </div>

        <div className="mb-3 inputs">
          <label htmlFor="emailInput" className="form-label text-white">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="emailUsuario"
            value={form.emailUsuario}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            required
          />
          <p className="errores" hidden={!hasError.emailUsuario.error}>
            {hasError.emailUsuario.textError}
          </p>
        </div>
        <div className="mb-3 inputs">
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
            onBlur={handleOnBlur}
            required
          />
          <p className="errores"  hidden={!hasError.passwordUsuario.error}>
            {hasError.passwordUsuario.textError}
          </p>
        </div>
        <div className="mb-3 d-flex justify-content-center align-items-center flex-column">
          <p className="text-white">¿Ya tienes cuenta?</p>
          <Link to={'/'} className="text-white">
            Iniciar Sesión
          </Link>
        </div>
        <button type="submit" className="btn btn-primary" disabled={hasError.nombreUsuario.error || hasError.emailUsuario.error|| hasError.passwordUsuario.error}>
          Registrarse
        </button>
      </form>
    </>
  )
}
