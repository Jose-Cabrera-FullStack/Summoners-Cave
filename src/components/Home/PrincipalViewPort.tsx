import * as React from "react";
import { Div, Text } from "./style";
// import Ekko from "../../static/img/Ekko.png";

const PrincipalViewPort = () => {
  return (
    <>
      <Div>
        <Text theme={{ color: "red" }}>Prueba de contingencia</Text>
        <img src={"Ekko"} alt="" />
      </Div>
    </>
  );
};

export default PrincipalViewPort;
