import React from "react";
import Addcard from "../../Components/Info";
import Rodape from "../../Components/Rodape/index";
import Appbar from "../../Components/Cabecalho";

const Cardpage = () => {
  return (
    <div>
      <Appbar />
      <Addcard />
      <Rodape />
    </div>
  );
};

export default Cardpage;
