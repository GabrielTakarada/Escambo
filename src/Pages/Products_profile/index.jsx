import React from "react";
import { Box } from "@mui/system";
import { Chip, Container, Divider, Paper, Typography } from "@mui/material";
import Appbar from "../../Components/Cabecalho";
import fone from "../../assets/fone.png";
import Star from "../../Components/Star";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
import Foot from "../../Components/foot";

export const Profile = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Inicialize o VanillaTilt no elemento do cartão
    VanillaTilt.init(cardRef.current, {
      max: 15,
      speed: 600,
      glare: true,
      "max-glare": 0.8,
    });
  }, []);
  return (
    <>
      <div>
        <Appbar />
      </div>
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box
            marginTop="5%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={5}
            textAlign="center"
            sx={{ backgroundColor: "#F5DEB3", maxWidth: "100%" }}
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

            <img
              ref={cardRef}
              src={fone}
              alt="Fone"
              style={{
                display: "flex",
                maxWidth: "250px",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3%",
                marginBottom: "3%",
                transition: "transform 0.3s ease",
                transform: "perspective(500px) rotateY(0deg)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  "perspective(500px) rotateY(20deg) translateZ(20px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform =
                  "perspective(500px) rotateY(0deg) translateZ(0px)";
              }}
            ></img>
            {/* <Box style={{ marginTop: "6%", Width: "100%" }}> */}
            <Star />
            <Typography
              style={{
                display: "flex",
                fontFamily: "monospace",
                justifyContent: "start",
                textAlign: "center",
              }}
            >
              Nome: Airpos 2
            </Typography>
            <hr
              style={{
                borderTop: "1px solid  rgb(0,0,0, 0.3)",
                width: "30%",
                margin: "5px 0",
              }}
            />
            <Typography
              style={{
                display: "flex",

                fontFamily: "monospace",
                justifyContent: "start",
              }}
            >
              Data de Postagem: 21/10/2023
            </Typography>

            <hr
              style={{
                borderTop: "1px solid  rgb(0,0,0, 0.3)",
                width: "30%",
                margin: "5px 0",
              }}
            />
            <Typography
              style={{
                display: "flex",
                fontFamily: "monospace",
                justifyContent: "start",
              }}
            >
              Contato: (16) 99340-0039
            </Typography>
            <hr
              style={{
                borderTop: "1px solid  rgb(0,0,0, 0.3)",
                width: "30%",
                margin: "5px 0",
              }}
            />
            <Typography
              style={{
                display: "flex",
                fontFamily: "monospace",
                justifyContent: "start",
                maxWidth: "30%",
                flexDirection: "colum",
              }}
            >
              Descrição: Fone de ultima geração jbl blaster
            </Typography>
            <hr
              style={{
                borderTop: "1px solid  rgb(0,0,0, 0.3)",
                width: "30%",
                margin: "5px 0",
              }}
            />

            <Divider
              style={{
                fontFamily: "monospace",
                fontSize: "16px",
                marginTop: "7%",
              }}
            >
              Preferências para troca:
            </Divider>
            <hr
              style={{
                borderTop: "1px solid rgb(0,0,0, 0.3)",
                width: "100%",
              }}
            />
            <Box textAlign="center" marginTop="16px">
              <Chip
                label={"Iphone"}
                style={{
                  fontFamily: "serif",
                  padding: "10px",
                  alignItems: "center",
                }}
                sx={{
                  "&:hover": {
                    transition: "0.7s",

                    backgroundColor: "brown",
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              ></Chip>
              <Chip
                label={" Samsung S21"}
                style={{ fontFamily: "serif" }}
                sx={{
                  "&:hover": {
                    transition: "0.7s",

                    backgroundColor: "brown",
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              ></Chip>
              <Chip
                label={"JBL 510 BT Tune"}
                style={{ fontFamily: "serif" }}
                sx={{
                  "&:hover": {
                    transition: "0.7s",

                    backgroundColor: "brown",
                    color: "white",
                    cursor: "pointer",
                  },
                }}
              ></Chip>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Foot />
    </>
  );
};
