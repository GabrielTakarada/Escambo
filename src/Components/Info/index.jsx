import React, { useState } from "react";
<<<<<<< HEAD
import Botao from "../Botao";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Box } from "@mui/system";
import { Container, Paper } from "@mui/material";

=======
import Button from "../Button";
import { useNavigate } from "react-router-dom";
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a

const Addcard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [postDate, setPostDate] = useState("");
  const [location, setLocation] = useState("");
<<<<<<< HEAD
  const [showMessage, setShowMessage] = useState(false);

  const handleAddCard = () => {
    setShowMessage(true);
=======

  const navigate = useNavigate();

  const handleAddCard = () => {
    // Aqui você pode enviar os dados do novo card para onde desejar, como um servidor ou um estado global.

    // Navegue de volta para a página principal após a adição do card
    navigate("/main");
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
  };

  return (
    <>
<<<<<<< HEAD
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            marginTop="4%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={5}
            textAlign="center"
            sx={{ backgroundColor: "#DCDCDC" }}
            border="solid black"
            boxShadow="4.3px 3.5px 0px 0px black, 0px 0px 2px 2.5px white"
          >
            {/* <C.Container> */}
            <h2>Adicionar Produto ou Serviço</h2>
            <form style={{ padding: "35px" }}>
              <div style={{ padding: "15px" }}>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  style={{ borderRadius: "5px" }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div style={{ padding: "15px" }}>
                <label htmlFor="location">Localização:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  style={{ borderRadius: "5px" }}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div style={{ padding: "15px" }}>
                <label htmlFor="description">Descrição:</label>
                <textarea
                  id="description"
                  value={description}
                  style={{ borderRadius: "5px" }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div style={{ padding: "15px" }}>
                <label htmlFor="postDate">Data de Postagem:</label>
                <input
                  type="date"
                  id="postDate"
                  value={postDate}
                  style={{ borderRadius: "5px" }}
                  onChange={(e) => setPostDate(e.target.value)}
                />
              </div>
            </form>
            <Botao Text="Adicionar Card" onClick={handleAddCard}>
              Adicionar Produto
            </Botao>
            {showMessage && (
              <Alert
                style={{
                  color: "green",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "13px",
                }}
                status="success"
              >
                <AlertIcon style={{ maxWidth: "17px" }} />
                Card adicionado com sucesso!
              </Alert>
            )}
          </Box>
        </Paper>
      </Container>
=======
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
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
    </>
  );
};

export default Addcard;
