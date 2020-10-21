import styled from "styled-components";

const Div = styled.nav`
  background: linear-gradient(#040303, #0e0c0a00);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  filter: none;
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  color: white;
  font-family: Nunito;
  font-weight: 400;
  place-items: center;
  margin: inherit;
}
`;
const LI = styled.li`
  margin: 1em;
}
`;
const H1 = styled.h1`
  color: white;
  font-weight: 400;
  margin: 0.5em;
  font-family: "Montserrat Subrayada", sans-serif;
`;

export { Div, UL, H1, LI };
