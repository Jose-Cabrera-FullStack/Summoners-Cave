import styled from "styled-components";
import {
  ColorStyleCSS,
  FontStyleCSS,
  MarginStyleCss,
} from "../../../Style/Variables";

const Div = styled.div`
  background: ${ColorStyleCSS.colorWhite};
`;
const H1 = styled.h1`
  color: ${ColorStyleCSS.colorBlack};
  font-family: ${FontStyleCSS.fontAnton};
  font-size: 4em;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 3px;
  text-align: left;
  padding: 0.5em 0px 0 1em;
`;

export { Div, H1 };
