import styled, { createGlobalStyle } from "styled-components";
import { ColorStyleCSS } from "./Variables";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${ColorStyleCSS.colorBlack};
  }
`;
const Flex = styled.div`
  display: flex;
  width: ${(props) => (props.theme.width ? props.theme.width : "auto")};
`;

export { GlobalStyle, Flex };
