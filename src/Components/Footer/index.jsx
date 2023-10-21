import React from "react";
import * as C from "./styles";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whats from "../../assets/whats.png";

const Footer = () => {
  return (
    <C.Footer>
      {/* <div
        style={{ display: "flex", justifyContent: "start", alingItem: "start" }}
      >
        <p>Teste</p>
      </div> */}
      <div>
        <div>
          <h3>ESCAMBO</h3>
        </div>
        <div style={{ marginTop: "0.8%", marginBottom: "1%" }}>
          <p>Contact us: 55+ (16) 99340 - 0039 </p>
          <p>País da Cede: Brasil (BR)</p>
          <p>Copyright © 2023 Escambo</p>
        </div>
        <div style={{ width: "100%" }}>
          <img
            src={instagram}
            alt="img1"
            style={{ width: "20px", height: "20px", marginRight: "8%" }}
          />
          <img
            src={facebook}
            alt="img1"
            style={{ width: "20px", height: "20px" }}
          />
          <img
            src={whats}
            alt="img1"
            style={{ width: "20px", height: "20px", marginLeft: "8%" }}
          />
        </div>
      </div>
    </C.Footer>
  );
};

export default Footer;
