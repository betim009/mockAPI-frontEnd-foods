import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";

export default function About() {

  const {
    handleChange,
    valueForm,
    handleClick,
    handleFormChange
  } = useForm();

  const { data, handleFormChangeSubmit, handleSubmit } = useFetch();

  return (
    <main>
      <p>Hook's:</p>
      <input
        placeholder="Escreva algo..."
        value={valueForm}
        onChange={handleChange}
      />
      <p>{valueForm}</p>
      <button onClick={handleClick}>Click</button>

      <br />
      <br />

      <input
        type="text"
        name="name"
        onChange={handleFormChange}
        placeholder="Nome..."
      />
      <input
        type="text"
        name="email"
        onChange={handleFormChange}
        placeholder="Email..."
      />


      <br />
      <br />
      <br />

      <p>Form Submit</p>
      <input
        type="text"
        name="title"
        onChange={handleFormChangeSubmit}
        placeholder="Nome..."
      />
      <input
        type="text"
        name="body"
        onChange={handleFormChangeSubmit}
        placeholder="Email..."
      />
      <button onClick={handleSubmit}>Enviar</button>

    </main>
  );
}
