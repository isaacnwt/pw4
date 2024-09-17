import React, { useState } from "react";
import "./ListaDeContatos.css";

function ListaDeContatos() {
  const [listaContatos, setListaContatos] = useState(["Irineu"]);
  const [contato, setContato] = useState("");

  const handleChange = (event) => {
    setContato(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addContato();
    }
  };

  const addContato = () => {
    if (contato.trim() !== '') {
      setListaContatos([...listaContatos, contato]);
      setContato('');
    }
  };

  return (
    <div className="card">
      <h1>Lista de Contatos</h1>
      <input
        type="text"
        value={contato}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Novo contato"
      />
      <button onClick={addContato}>Adicionar</button>
      <ul>
        {listaContatos.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos;
