import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSubmit = (isLogin) => {
  const navigate = useNavigate();
  //Iniciamos el estado del formulario y el estado de hasError dinámicamente, dependiendo de si estamos en el login o en el registro
  const [form, setForm] = useState(
    isLogin
      ? { nombreUsuario: "", passwordUsuario: "" }
      : { nombreUsuario: "", emailUsuario: "", passwordUsuario: "" }
  );
  const [hasError, setHasError] = useState(
    isLogin
      ? {
          nombreUsuario: {
            error: false,
            textError: "",
          },
          passwordUsuario: {
            error: false,
            textError: "",
          },
        }
      : {
          nombreUsuario: {
            error: false,
            textError: "",
          },
          emailUsuario: {
            error: false,
            textError: "",
          },
          passwordUsuario: {
            error: false,
            textError: "",
          },
        }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    isLogin ? login(form, navigate) : register(form, navigate);
  };

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnBlur = ({ target }) => {
    const { name, value } = target;
    if (value.trim() == "") {
      setHasError({
        ...hasError,
        [name]: {
          error: true,
          textError:
            name == "passwordUsuario"
              ? "No se puede dejar la contraseña vacía"
              : name == "nombreUsuario"
              ? "No se puede dejar el nombre de usuario vacío"
              : "No se puede dejar el correo vacío",
        },
      });
    } else {
      if (value.length < 6 && name == "passwordUsuario") {
        setHasError({
          ...hasError,
          [name]: {
            error: true,
            textError: "La contraseña debe tener 6 o más caracteres",
          },
        });
      } else if (!target.validity.valid && name == "emailUsuario") {
        setHasError({
          ...hasError,
          [name]: {
            error: true,
            textError: "Se debe introducir un correo válido",
          },
        });
      } else {
        setHasError({
          ...hasError,
          [name]: {
            error: false,
            textError: "",
          },
        });
      }
    }
  };

  return {
    form,
    handleOnChange,
    handleSubmit,
    handleOnBlur,
    hasError,
    navigate,
    leerCookie,
  };
};

async function login(form, navigate) {
  try {
    let response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      body: JSON.stringify({
        idUsuario: 0,
        nombreUsuario: form.nombreUsuario,
        passwordUsuario: form.passwordUsuario,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.status == 204) {
      await getUser(form.nombreUsuario);
      navigate("/home");
    } else {
      alert("Nombre de usuario o contraseña no válida");
    }
  } catch (error) {
    console.error(error);
  }
}

async function register(form, navigate) {
  try {
    let response = await fetch("http://localhost:8080/api/usuarios", {
      method: "POST",
      body: JSON.stringify({
        idUsuario: 0,
        nombreUsuario: form.nombreUsuario,
        emailUsuario: form.emailUsuario,
        passwordUsuario: form.passwordUsuario,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await response.json();
    if (response.status == 201) {
      await getUser(form.nombreUsuario);
      navigate("/home");
    } else {
      alert(data.mensaje);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getUser(userName) {
  try {
    let response = await fetch(
      `http://localhost:8080/api/usuarios/${userName}`
    );

    if (!response.ok) {
      throw new Error("Error al obtener el usuario");
    }
    const usuario = await response.text();

    const usuarioJSON = JSON.stringify(usuario);

    document.cookie = `usuario=${usuarioJSON}`;
  } catch (e) {
    console.error(e);
  }
}

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
