import React from "react";
import { Box } from "@mui/system";
import { Container, Paper, Typography } from "@mui/material";
import Appbar from "../../Components/Cabecalho";
import Rodape from "../../Components/Rodape";
import fone from "../../assets/fone.png";

export const Profile = () => {
  return (
    <>
      <Appbar />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            marginTop="8%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={5}
            textAlign="center"
            sx={{ backgroundColor: "#DCDCDC" }}
            border="solid black"
            boxShadow="4.3px 3.5px 0px 0px black, 0px 0px 2px 2.5px white"
            marginBottom="5%"
          >
            <Typography
              variant="h4"
              style={{
                textTransform: "uppercase",
                fontFamily: "fantasy",
                textDecoration: "underline",
              }}
            >
              Produto
            </Typography>
            <Box style={{ display: "flex" }}>
              <img src={fone} alt="Fone" style={{ maxWidth: "250px" }}></img>
              <Box>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "monospace",
                    justifyContent: "end",
                  }}
                >
                  Nome:
                </Typography>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "monospace",
                    justifyContent: "end",
                  }}
                >
                  Contato:
                </Typography>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "monospace",
                    justifyContent: "end",
                  }}
                >
                  Descrição:
                </Typography>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontFamily: "monospace",
                    justifyContent: "end",
                  }}
                >
                  Data de Postagem:
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Rodape />
    </>
  );
};
