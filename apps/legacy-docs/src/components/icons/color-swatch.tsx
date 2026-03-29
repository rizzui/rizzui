import React from "react";

export default function ColorSwatchIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <g fill="none">
        <path fill="#2F88FF" d="M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6Z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 44a6 6 0 0 0 6-6V23.515M10 44a6 6 0 0 1-6-6V4h12v19.515M10 44h34V32H24.485M5.757 42.243a6 6 0 0 0 8.486 0L24.485 32M16 23.515 35.015 4.5l.47-.5 8.5 8.5-19.5 19.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14.243 42.243 43.985 12.5l-8.5-8.5L16 23.515"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24.485 32H44v12H12.5"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24.485 32H44v12H12.5"
        />
        <path
          fill="#2F88FF"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M10 44a6 6 0 0 0 6-6V4H4v34a6 6 0 0 0 6 6Z"
        />
      </g>
    </svg>
  );
}
