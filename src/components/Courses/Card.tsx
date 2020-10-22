import * as React from "react";

import { Flex } from "../../Style/Global";
import { Div, H4, H5, ImgCourse, ImgTeacher } from "./style/CardsList";
const Arcadia: string = require("../../static/Home/Arcadia.png");
const Teacher: string = require("../../static/Home/Teacher.png");

const Card = () => {
  return (
    <Div>
      <ImgCourse src={Arcadia} alt="Imagen del curso" />
      <Flex>
        <div>
          <H4>Farmear Mejor</H4>
          <Flex theme={{ margin: "0" }}>
            <ImgTeacher src={Teacher} alt="Foto del Profesor" />
            <H5>Mauricio López</H5>
          </Flex>
        </div>
        <div>
          <div>
            <p>Free</p>
          </div>
          <div>
            <p>Easy</p>
          </div>
        </div>
      </Flex>
    </Div>
  );
};

export default Card;
