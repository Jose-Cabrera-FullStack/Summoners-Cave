import styled from "styled-components";
import {
  ColorStyleCSS,
  FontStyleCSS,
  MarginStyleCss,
} from "../../../Style/Variables";

const Div = styled.div``;
const H1 = styled.h1`
  text-shadow: 0 0 3px ${ColorStyleCSS.colorPrimary};
  font-family: ${FontStyleCSS.fontAnton};
  font-size: ${FontStyleCSS.fontSizeRegular};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 3px;
  text-align: left;
  color: ${ColorStyleCSS.colorPrimary};
  margin: ${MarginStyleCss.standartMargin};
`;
const CartItem = styled.div`
  width: 212px;
  height: 423px;
  border-radius: 5px;
  border: solid 1px ${ColorStyleCSS.colorPrimary};
  background-color: ${ColorStyleCSS.colorAssistant};
  margin-right: 3em;
`;
const CartsList = styled.div`
  display: flex;
  margin: 3em;
  place-content: center;
`;
export { Div, CartItem, CartsList, H1 };
