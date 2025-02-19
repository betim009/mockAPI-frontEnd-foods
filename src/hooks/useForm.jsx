import { useState } from "react";

export default function useForm(initialValue = "") {
  const [valueForm, setValueForm] = useState(initialValue);
  const [myForm, setMyForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = ({ target: { value } }) => {
    setValueForm(value)
  };

  const handleClick = () => {
    alert("Implemente sua função aqui!")
  }

  const handleFormChange = ({ target }) => {
    const { name, value } = target;
    const result = {
      ...myForm,
      [name]: target.value
    };

    console.log(result);
    setMyForm(result);
  }


  return {
    valueForm,
    handleChange,
    handleClick,
    handleFormChange
  };
}
