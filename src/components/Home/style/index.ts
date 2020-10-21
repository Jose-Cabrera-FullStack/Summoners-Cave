import styled from "styled-components";
import { ColorStyleCSS, FontStyleCSS } from "../../../Style/Variables";

const Div = styled.div`
  display: flex;
  margin: 3em;
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
const Button = styled.button`
  width: 362px;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 #56fffb;
  border: solid 2px #56fffb;
  background-color: #56fffb;
  height: 70px;
  text-shadow: 0 0 2px #0d0e1a;
  font-family: Nunito;
  font-size: 35px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
  text-align: center;
  color: #0d0e1a;
`;

export { Div, Title, SubTitle, DivGrid, ImgName, DivInformation, Button };
