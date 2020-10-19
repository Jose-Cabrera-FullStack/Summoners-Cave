import styled from "styled-components";

const Div = styled.div`
  background: pink;
`;
const Text = styled.p`
  color: ${(props) => props.theme.color};
`;

export { Div, Text };
