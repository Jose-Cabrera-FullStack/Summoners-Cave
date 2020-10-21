import * as React from "react";
import {
  Div,
  Title,
  SubTitle,
  DivGrid,
  ImgName,
  DivInformation,
  Button,
} from "./style";

const Ekko: string = require("../../static/Home/Ekko.png");
const Zac: string = require("../../static/Home/Zac-Nami-Jhin.png");
const Karma: string = require("../../static/Home/Karma.png");
const Riven: string = require("../../static/Home/Riven.png");

const PrincipalViewPort = () => {
  return (
    <>
      <Div>
        <DivInformation>
          <Title theme={{ color: "red" }}>Se el Mejor Player</Title>
          <SubTitle>Queremos impulsar el E-Sport en Latinoamérica </SubTitle>
          <Button>Call to action</Button>
        </DivInformation>
        <DivGrid>
          <ImgName
            theme={{ name: "Ekko" }}
            src={Ekko}
            alt="Video sobre Summoner's Cave"
          />
          <ImgName
            theme={{ name: "Zac" }}
            src={Zac}
            alt="Video sobre Summoner's Cave"
          />
          <ImgName
            theme={{ name: "Karma" }}
            src={Karma}
            alt="Video sobre Summoner's Cave"
          />
          <ImgName
            theme={{ name: "Riven" }}
            src={Riven}
            alt="Video sobre Summoner's Cave"
          />
        </DivGrid>
      </Div>
    </>
  );
};

export default PrincipalViewPort;
