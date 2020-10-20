import styled from "styled-components";

const Div = styled.div`
  display: flex;
  margin: 3em;
`;
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    "Ekko Karma"
    "Zac Karma"
    "Zac Riven";
`;

const ImgName = styled.img`
  grid-area: ${(props) => props.theme.name};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;
const SubTitle = styled.h4`
  color: white;
  font-family: Nunito;
`;

export { Div, Title, SubTitle, DivGrid, ImgName };
