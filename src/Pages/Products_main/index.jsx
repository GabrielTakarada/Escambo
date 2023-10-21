import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MediaCard from "../../Components/Cards";
import Loading from "../../Components/Loading";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

const Main = () => {
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
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
        </>
      )}
    </div>
  );
};

export default Main;
