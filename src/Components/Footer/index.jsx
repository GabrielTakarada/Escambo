import React from "react";
import * as C from "./styles";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whats from "../../assets/whats.png";
import Logo from "../../assets/Logo.png";
import Maps from "../../assets/Maps.png";

const Footer = () => {
  return (
    <C.Footer>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          width: "14%",
          marginTop: "2.2%",
        }}
      >
        <p
          style={{ fontFamily: "cursive", fontSize: "20px", marginLeft: "14%" }}
        >
          E-mail Addresses:
        </p>
      </div>
      <div style={{ width: "20%", textAlign: "center" }}>
        <h3
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            marginTop: "13%",
            fontWeight: "200",
          }}
        >
          gabrieltakarada@gmail.com
        </h3>
        <h3
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            marginTop: "6%",
            fontWeight: "200",
          }}
        >
          gabrieltakarada@gmail.com
        </h3>
        <h3
          style={{
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            marginTop: "6%",
            fontWeight: "200",
          }}
        >
          gabrieltakarada@gmail.com
        </h3>
      </div>
      <div style={{ width: "33%", alignItems: "center" }}>
        <div>
          <img src={Logo} alt="Logo" style={{ maxWidth: "195px" }}></img>
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
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "33%",
        }}
      >
        <img
          src={Maps}
          alt="img1"
          style={{
            alignItems: "end",
            width: "58%",
            marginTop: "3%",
            marginLeft: "33%",
          }}
        />
      </div>
    </C.Footer>
  );
};

export default Footer;
