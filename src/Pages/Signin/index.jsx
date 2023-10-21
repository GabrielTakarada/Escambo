import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import * as C from "./style";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preecha todos os campos");
      return;
    }
    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }
<<<<<<< HEAD
=======

    alert("Aproveite o site de trocas Escambo");
>>>>>>> d6d11574103e7ac30d2f8d5e2b46b1ae6a23d47a
    navigate("/main");
  };

  return (
    <C.Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <C.Label>ESCAMBOﾠ-ﾠLogin</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.Strong style={{ marginLeft: "8%" }}>
          Não tem conta?
          <Link to="/signup" style={{ marginLeft: "6%" }}>
            &nbsp;Registre-se
          </Link>
        </C.Strong>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
