import { SVGProps } from "react";

export const AccountLightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="url(#paint0_linear_804_109)"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    ></path>
    <path
      fill="#191D20"
      fillOpacity="0.05"
      fillRule="evenodd"
      d="M10 19.333A9.333 9.333 0 1 0 .667 10 9.333 9.333 0 0 0 10 19.333M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10"
      clipRule="evenodd"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_804_109"
        x1="10"
        x2="10"
        y1="2"
        y2="18"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A3C3FF"></stop>
        <stop offset="1" stopColor="#2470FF"></stop>
      </linearGradient>
    </defs>
  </svg>
);
