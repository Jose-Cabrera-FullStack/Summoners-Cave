import * as React from "react";
import ListCourses from "../Courses/CardsList";
import { Div, H1 } from "./style/LastCourses";

const LastCourses = () => {
  return (
    <Div>
      <H1>Últimos cursos lanzados</H1>
      <hr />
      <ListCourses />
    </Div>
  );
};

export default LastCourses;
