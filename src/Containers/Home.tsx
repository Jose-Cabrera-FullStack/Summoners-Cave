import * as React from "react";
import { Div } from "./Style/Home";
import { GlobalStyle } from "../Style/Global";
import Header from "../Components/Layout/Header";
import Principal from "../Components/Home/PrincipalViewPort";
import WayOfTeaching from "../Components/Home/WayOfTeaching";
import Anuncio from "../Components/Layout/Anuncio";
import WhatIsSummonersCave from "../Components/Home/WhatIsSummonersCave";

const Home = () => {
  return (
    <Div>
      <GlobalStyle />
      <Header />
      <Principal />
      <WayOfTeaching />
      <Anuncio />
      <WhatIsSummonersCave />
    </Div>
  );
};

export default Home;
