import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Products_main";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import useAuth from "../hooks/useAuth";
import Main from "../Pages/Products_main";
import Cardpage from "../Pages/Adiciona_card";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/card" element={<Cardpage />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
