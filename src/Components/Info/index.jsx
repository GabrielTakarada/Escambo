import React, { useState } from "react";
import Botao from "../Botao";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Box } from "@mui/system";
import { Container, Paper } from "@mui/material";
import Rodape from "../Rodape";

import Appbar from "../Cabecalho";

const Addcard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [postDate, setPostDate] = useState("");
  const [location, setLocation] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [orderInfo1, setOrderInfo1] = useState("");
  const [orderInfo2, setOrderInfo2] = useState("");
  const [orderInfo3, setOrderInfo3] = useState("");

  const handleAddCard = () => {
    setShowMessage(true);
  };

  return (
    <>
      <Appbar />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            marginTop="2%"
            padding="40px"
            textAlign="center"
            sx={{
              backgroundColor: "#F5DEB3",
              border: "2px solid black",
              boxShadow: "4.3px 3.5px 0px 0px black, 0px 0px 2px 2.5px white",
            }}
          >
            <h2
              style={{
                marginBottom: "40px",
                fontFamily: "serif",
                marginTop: "10px",
              }}
            >
              Adicionar Produto | Serviço
            </h2>
            <form>
              <div
                style={{
                  marginBottom: "30px",
                  fontFamily: "Monospace",
                  fontSize: "16px",
                  flexDirection: "colum",
                }}
              >
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  style={{
                    borderRadius: "5px",
                    width: "32%",
                    border: "1px solid black",
                    marginLeft: "5%",
                    marginRight: "9%",
                  }}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="location">Contato:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  style={{
                    borderRadius: "5px",
                    width: "32%",
                    border: "1px solid black",
                    marginLeft: "5%",
                  }}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div
                style={{
                  marginBottom: "30px",
                  fontFamily: "Monospace",
                  fontSize: "16px",
                }}
              >
                <label htmlFor="description">Descrição:</label>
                <textarea
                  id="description"
                  value={description}
                  style={{
                    borderRadius: "5px",
                    width: "88%",
                    resize: "none",
                    border: "1px solid black",
                  }}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  marginBottom: "35px",
                  fontFamily: "Monospace",
                  fontSize: "16px",
                }}
              >
                <div style={{ marginRight: "10px", width: "100%" }}>
                  <label htmlFor="orderInfo1">Pedidos:</label>
                  <input
                    type="text"
                    id="orderInfo1"
                    value={orderInfo1}
                    style={{
                      borderRadius: "5px",
                      width: "27%",
                      border: "1px solid black",
                      marginLeft: "3%",
                    }}
                    onChange={(e) => setOrderInfo1(e.target.value)}
                  />
                  <input
                    type="text"
                    id="orderInfo2"
                    value={orderInfo2}
                    style={{
                      borderRadius: "5px",
                      width: "27%",
                      border: "1px solid black",
                      marginLeft: "3%",
                    }}
                    onChange={(e) => setOrderInfo2(e.target.value)}
                  />
                  <input
                    type="text"
                    id="orderInfo3"
                    value={orderInfo3}
                    style={{
                      borderRadius: "5px",
                      width: "27%",
                      border: "1px solid black",
                      marginLeft: "3%",
                    }}
                    onChange={(e) => setOrderInfo3(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{
                  marginBottom: "40px",
                  fontFamily: "Monospace",
                  fontSize: "16px",
                }}
              >
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
                status="success"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "28px",
                  backgroundColor: "#F5DEB3",
                  color: "green",
                }}
              >
                <AlertIcon style={{ maxWidth: "17px" }} />
                Card adicionado com sucesso!
              </Alert>
            )}
          </Box>
        </Paper>
      </Container>
      <Rodape />
    </>
  );
};

export default Addcard;
