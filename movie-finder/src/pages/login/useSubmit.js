import { useState } from "react";

export const useSubmit = () => {
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

      return{
        form,
        handleOnChange,
        handleSubmit
      }
}
