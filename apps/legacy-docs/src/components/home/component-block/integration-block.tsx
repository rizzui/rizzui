import React from "react";

export default function IntegrationBlock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className="text-gray-400 w-32 h-auto"
    >
      <g fill="none" strokeWidth={2.8}>
        <rect
          width={24}
          height={24}
          x={12}
          y={12}
          stroke="currentColor"
          rx={3}
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M24 36v5a3 3 0 0 1-3 3H8M20 12V4M28 12V4"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 24h4"
          className="opacity-0 group-hover/card:opacity-100 transition-all"
        />
      </g>
    </svg>
  );
}
