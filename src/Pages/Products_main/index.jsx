import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import Button from "../../Components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MediaCard from "../../Components/Cards";
import Loading from "../../Components/Loading";
<<<<<<< HEAD
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Main = () => {
=======

const Main = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simule uma solicitação de carregamento de recurso (substitua pela sua URL real)
        const response = await fetch(
          "https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif"
        );
        if (response.ok) {
          // Recurso carregado com sucesso
          setLoading(false);
        }
      } catch (error) {
        // Trate erros, como falha no carregamento
        console.error("Erro ao carregar recursos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
<<<<<<< HEAD
      {loading ? (
=======
      {loading ? ( // Renderize o componente Loading enquanto loading for true
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
        <Loading />
      ) : (
        <>
          <Navbar />
<<<<<<< HEAD
          <div className="content-container" style={{ marginBottom: "3%" }}>
            <Container maxWhidth="false">
              <Grid container spacing={6} marginTop="2px">
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
                <Grid item xs={4}>
                  <MediaCard />
                </Grid>
              </Grid>
            </Container>
          </div>
          <Footer />
=======
          <C.Container>
            <MediaCard />
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
              Sair
            </Button>
            <Footer />
          </C.Container>
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
        </>
      )}
    </div>
  );
};

export default Main;
