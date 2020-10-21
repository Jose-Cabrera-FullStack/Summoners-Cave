import styled from "styled-components";

const Div = styled.nav`
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  filter: none;
`;

const Blurry = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  overflow: hidden;
  position: fixed;
  filter: blur(4px);
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

export { Div, UL, H1, LI, Blurry };
