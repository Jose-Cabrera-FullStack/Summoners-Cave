import * as React from "react";
import { Title, SubTitle, DivInformation } from "./../style";

import Button from "../../Utils/Button/Button";

const Information = () => {
  return (
    <>
      <DivInformation>
        <Title theme={{ color: "red" }}>Se el Mejor Player</Title>
        <SubTitle>Queremos impulsar el E-Sport en Latinoamérica </SubTitle>
        <Button>Call to Actions</Button>
      </DivInformation>
    </>
  );
};

export default Information;
