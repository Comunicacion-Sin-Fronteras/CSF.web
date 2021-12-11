import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  border-radius: 16px;
  ::placeholder {
    color: palevioletred;
  }
`;

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name you entered was: ${name}')
  }

  return (
    <div className="formularioJuego">
      <form>
        <Input type="text" placeholder="Respuesta" />
        <button className="button"><span>Siguiente</span></button>
      </form>
    </div>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

export default MyForm;