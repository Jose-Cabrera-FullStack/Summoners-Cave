import { createGlobalStyle } from "styled-components";
import { ColorStyleCSS } from "./Variables";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${ColorStyleCSS.colorBlack};
  }
`;

export { GlobalStyle };
