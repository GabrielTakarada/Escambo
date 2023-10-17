import React, { useState, useEffect } from "react";
import Button from "../../Components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MediaCard from "../../Components/Cards";
import Loading from "../../Components/Loading";

const Main = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
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
      {loading ? ( // Renderize o componente Loading enquanto loading for true
        <Loading />
      ) : (
        <>
          <Navbar />
          <C.Container>
            <MediaCard />
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
              Sair
            </Button>
            <Footer />
          </C.Container>
        </>
      )}
    </div>
  );
};

export default Main;
