import * as React from "react";
import { Div } from "./style/PrincipalViewPort";

import Information from "./PrincipalViewPort/Information";
import GridCarts from "./PrincipalViewPort/GridCarts";

const PrincipalViewPort = () => {
  return (
    <>
      <Div>
        <Information />
        <GridCarts />
      </Div>
    </>
  );
};

export default PrincipalViewPort;
