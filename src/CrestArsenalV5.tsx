import React from "react";
import styled from "styled-components";

export interface IProps extends React.SVGProps<SVGSVGElement> {
  height?: string | number; // only svg props here
  width?: string | number;
}

const StyledSvg = styled.svg`
  vertical-align: middle;
`;
const CrestArsenal: React.FunctionComponent<IProps> = ({height, width}) => {
  return (
    <StyledSvg
      height={height}
      width={width}
      viewBox="0 0 322.793 379.84"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#9C824A"
        stroke="#9C824A"
        strokeWidth={0.793}
        strokeMiterlimit={282}
        d="M161.396.396C122.96.396 52.087 10.34 15.994 31.328c-47.52 168.475 17.107 283.042 145.402 348.068 128.296-65.026 192.923-180.16 145.402-348.067C270.669 10.34 199.831.396 161.396.396h0z"
      />
    </StyledSvg>
  );
}
CrestArsenal.defaultProps = {
  width: "100%",
  height: "1em",
};

export default CrestArsenal;
