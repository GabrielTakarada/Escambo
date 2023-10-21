import React, { useState } from "react";
import Botao from "../Botao";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Box } from "@mui/system";
import { Container, Paper } from "@mui/material";


const Addcard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [postDate, setPostDate] = useState("");
  const [location, setLocation] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleAddCard = () => {
    setShowMessage(true);
  };

  return (
    <>
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
    </>
  );
};

export default Addcard;
