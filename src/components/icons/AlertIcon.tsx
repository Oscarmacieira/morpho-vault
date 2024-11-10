import { SVGProps } from "react";

export const AlertIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect
      width="26.667"
      height="26.667"
      x="6.667"
      y="6.667"
      fill="#C73E59"
      fillOpacity="0.9"
      rx="2"
    ></rect>
    <path
      fill="#fff"
      d="m21.542 12.5-.271 9.958h-2.542l-.277-9.958zM20 28.569q-.687 0-1.18-.486a1.59 1.59 0 0 1-.486-1.18 1.56 1.56 0 0 1 .486-1.167A1.62 1.62 0 0 1 20 25.25q.66 0 1.16.486a1.59 1.59 0 0 1 .264 2.007q-.23.375-.604.604-.375.222-.82.222"
    ></path>
  </svg>
);
