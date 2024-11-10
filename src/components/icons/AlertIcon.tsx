import { SVGProps } from "react";

export const AlertIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <rect
      width={26.667}
      height={26.667}
      x={6.667}
      y={6.667}
      fill="#C73E59"
      fillOpacity={0.9}
      rx={2}
    />
    <path
      fill="#fff"
      d="m21.542 12.5-.271 9.958h-2.542l-.277-9.958h3.09ZM20 28.569c-.458 0-.852-.162-1.18-.486a1.587 1.587 0 0 1-.486-1.18 1.556 1.556 0 0 1 .486-1.167A1.622 1.622 0 0 1 20 25.25c.44 0 .827.162 1.16.486a1.593 1.593 0 0 1 .264 2.007c-.153.25-.354.451-.604.604-.25.148-.523.222-.82.222Z"
    />
  </svg>
);
