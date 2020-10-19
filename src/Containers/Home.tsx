import * as React from "react";
import Principal from "../Components/Home/PrincipalViewPort";
import Header from "../Components/Layout/Header";
import { Div } from "./Style/Home";

const Home = () => {
  return (
    <Div>
      <Header />
      <Principal />
    </Div>
  );
};

export default Home;
