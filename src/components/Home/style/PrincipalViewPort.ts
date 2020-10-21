import styled from "styled-components";
import { ColorStyleCSS, FontStyleCSS } from "../../../Style/Variables";

const Div = styled.div`
  display: flex;
  margin: 7em 3em 0px 3em;
  place-content: space-between;
`;

const DivInformation = styled.div`
  margin: auto 1em;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color};
  font-family: ${FontStyleCSS.fontAnton};
  text-shadow: 0 0 4px #f8f8fc;
  font-size: 72px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 1.15px;
  text-align: left;
  color: #ffffff;
`;

const SubTitle = styled.h4`
  color: white;
  font-family: ${FontStyleCSS.fontNunito};
  font-size: ${FontStyleCSS.fontSizeMedium};
  margin: 1em 0px 1em 0px;
`;

const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 8px 8px;
  grid-template-areas:
    "Ekko Karma"
    "Zac Karma"
    "Zac Riven";
`;

const ImgName = styled.img`
  grid-area: ${(props) => props.theme.name};
`;

export { Div, Title, SubTitle, DivGrid, ImgName, DivInformation };
