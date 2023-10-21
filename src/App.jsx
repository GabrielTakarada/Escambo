import React from "react";
import GlobalStyle from "./Components/Login/global";
import RoutesApp from "./Router";
import { AuthProvider } from "./contexts/auth";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
