import * as React from "react";
import { Div, Text } from "./style";

const Ekko = require("../../static/img/Ekko.png");

const PrincipalViewPort = () => {
  return (
    <>
      <Div>
        <Text theme={{ color: "red" }}>Prueba de contingencia</Text>
        <img src={Ekko} alt="" />
      </Div>
    </>
  );
};

export default PrincipalViewPort;
