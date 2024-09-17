import React, { useState } from "react";
import "./ListaDeContatos.css";

function ListaDeContatos() {
  const [listaContatos, setListaContatos] = useState([{ nome: "Irineu", telefone: "9999-9999" }]);
  const [contato, setContato] = useState({ nome: "", telefone: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContato((prevContato) => ({
      ...prevContato,
      [name]: value,
    }));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addContato();
    }
  };

  const addContato = () => {
    if (contato.nome.trim() !== "" && contato.telefone.trim() !== "") {
      setListaContatos([...listaContatos, contato]);
      setContato({ nome: "", telefone: "" });
    }
  };


  return (
    <div className="card">
      <h1>Lista de Contatos</h1>
      <input
        type="text"
        name="nome"
        value={contato.nome}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Nome do contato"
      />
      <input
        type="text"
        name="telefone"
        value={contato.telefone}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Telefone"
      />
      <button onClick={addContato}>Adicionar</button>
      <ul>
        {listaContatos.map((contato, index) => (
          <li key={index}>
            {contato.nome} - {contato.telefone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeContatos;
