import React from "react";
import * as C from "./styles";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whats from "../../assets/whats.png";

const Footer = () => {
  return (
    <C.Footer>
      <div>
        <h3>ESCAMBO</h3>
      </div>
      <div style={{ marginTop: "0.8%", marginBottom: "1%" }}>
        <p>Contact us: 55+ (16) 99340 - 0039 </p>
        <p>Copyright © 2023 Escambo</p>
        <p>País da Cede: Brasil (BR)</p>
      </div>
      <div style={{ width: "100%" }}>
        <img
          src={instagram}
          alt="img1"
          style={{ width: "32px", height: "32px", marginRight: "1.7%" }}
        />
        <img
          src={facebook}
          alt="img1"
          style={{ width: "32px", height: "32px" }}
        />
        <img
          src={whats}
          alt="img1"
          style={{ width: "32px", height: "32px", marginLeft: "1.7%" }}
        />
      </div>
    </C.Footer>
  );
};

export default Footer;
