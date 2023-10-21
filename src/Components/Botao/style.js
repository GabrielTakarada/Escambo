import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #fb7810;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  box-shadow: 1.1px 2.2px 3.4px 4.6px rgb(0, 0, 0, 0.7);

  &:active {
    box-shadow: 4px 3px 1px 1px rgb(0, 0, 0, 0.7);
    background-color: #e66400; /* Altere a cor de fundo quando o botão estiver ativo */
    transform: translateY(1px); /* Movimenta ligeiramente o botão para baixo */
  }
`;
