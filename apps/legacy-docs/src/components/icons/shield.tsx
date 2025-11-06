import React from "react";

export default function ShieldIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <g fill="none" strokeLinejoin="round" strokeWidth={4}>
        <path
          fill="#2F88FF"
          stroke="currentColor"
          d="M6 9.256 24.009 4 42 9.256v10.778A26.316 26.316 0 0 1 24.003 45 26.32 26.32 0 0 1 6 20.029V9.256Z"
        />
        <path stroke="#fff" strokeLinecap="round" d="m15 23 7 7 12-12" />
      </g>
    </svg>
  );
}
