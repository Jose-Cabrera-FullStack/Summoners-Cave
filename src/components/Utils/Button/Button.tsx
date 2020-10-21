import * as React from "react";
import { Button } from "./style";

const PrincipalViewPort: React.FC<{ children: string }> = ({ children }) => {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default PrincipalViewPort;
