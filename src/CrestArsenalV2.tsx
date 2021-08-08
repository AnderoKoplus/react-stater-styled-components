import React from "react";
import styled from "styled-components";

export interface IProps extends React.SVGProps<SVGSVGElement> {
  verticalAlign?: string; // introduce the variable here so we can remove it :P
}

const Svg = ({ verticalAlign, ...rest }: IProps) => (
  <svg
    viewBox="0 0 322.793 379.84"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      fill="#9C824A"
      stroke="#9C824A"
      strokeWidth={0.793}
      strokeMiterlimit={282}
      d="M161.396.396C122.96.396 52.087 10.34 15.994 31.328c-47.52 168.475 17.107 283.042 145.402 348.068 128.296-65.026 192.923-180.16 145.402-348.067C270.669 10.34 199.831.396 161.396.396h0z"
    />
  </svg>
);

type SvgProps = {
  color?: string;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};

const CrestArsenal = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign }) => ({
    ...(color && {
      color: "green",
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
CrestArsenal.defaultProps = {
  verticalAlign: "middle",
  width: "auto", // causes some issues, left here for original behaviour
  height: "1em",
};
export default CrestArsenal;
