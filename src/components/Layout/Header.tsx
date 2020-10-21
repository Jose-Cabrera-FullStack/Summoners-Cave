import * as React from "react";
import { Div, UL, H1, LI } from "./style/Header";

const Header = () => {
  return (
    <>
      <Div>
        <UL>
          <LI>cursos</LI>
          <LI>¿Quiénes Somos?</LI>
        </UL>
        <H1>SUMMONER'S-CAVE</H1>
        <UL>
          <LI>Iniciar Sesión</LI>
          <LI>Registro</LI>
        </UL>
      </Div>
    </>
  );
};

export default Header;
