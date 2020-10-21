import * as React from "react";
import Principal from "../Components/Home/PrincipalViewPort";
import Header from "../Components/Layout/Header";
import { Div } from "./Style/Home";
import { GlobalStyle } from "../Style/Global";

const Home = () => {
  return (
    <Div>
      <GlobalStyle />
      <Header />
      <Principal />
    </Div>
  );
};

export default Home;
