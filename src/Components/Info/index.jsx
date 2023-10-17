import React, { useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Addcard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [postDate, setPostDate] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const handleAddCard = () => {
    // Aqui você pode enviar os dados do novo card para onde desejar, como um servidor ou um estado global.

    // Navegue de volta para a página principal após a adição do card
    navigate("/main");
  };

  return (
    <>
      {/* <C.Container> */}
      <h2>Adicionar Novo Card</h2>
      <form>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Descrição:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="postDate">Data de Postagem:</label>
        <input
          type="date"
          id="postDate"
          value={postDate}
          onChange={(e) => setPostDate(e.target.value)}
        />

        <label htmlFor="location">Localização:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
      <Button Text="Adicionar Card" onClick={handleAddCard}>
        Adicionar Card
      </Button>
      {/* </C.Container> */}
    </>
  );
};

export default Addcard;
