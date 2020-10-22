import styled from "styled-components";
import {
  ColorStyleCSS,
  FontStyleCSS,
  MarginStyleCss,
} from "../../../Style/Variables";

const Div = styled.div``;
const ImgCourse = styled.img``;

const ImgTeacher = styled.img`
  width: 17px;
  height: 15px;
  border-radius: 5px;
`;

const H4 = styled.h4`
  font-family: ${FontStyleCSS.fontNunito};
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.26px;
  text-align: left;
  color: ${ColorStyleCSS.colorBlack};
  margin: 4px 0 8px 0;
`;
const H5 = styled.h5`
  font-family: ${FontStyleCSS.fontNunito};
  font-weight: ${FontStyleCSS.fontWeightLight};
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: 0.13px;
  text-align: left;
  color: ${ColorStyleCSS.colorBlack};
`;

export { Div, H4, H5, ImgCourse, ImgTeacher };
