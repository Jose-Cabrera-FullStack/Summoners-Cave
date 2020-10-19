import styled from "styled-components";

const Div = styled.div`
  background: black;
`;
const Text = styled.p`
  color: ${(props) => props.theme.color};
`;

export { Div, Text };
