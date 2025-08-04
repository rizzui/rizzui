import React from 'react';

export function ThreeDotScale({
  fill,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill ?? 'currentColor'}
      {...props}
    >
      <circle cx={4} cy={12} r={1.5}>
        <animate
          attributeName="r"
          dur="0.75s"
          repeatCount="indefinite"
          values="1.5;3;1.5"
        />
      </circle>
      <circle cx={12} cy={12} r={3}>
        <animate
          attributeName="r"
          dur="0.75s"
          repeatCount="indefinite"
          values="3;1.5;3"
        />
      </circle>
      <circle cx={20} cy={12} r={1.5}>
        <animate
          attributeName="r"
          dur="0.75s"
          repeatCount="indefinite"
          values="1.5;3;1.5"
        />
      </circle>
    </svg>
  );
}

ThreeDotScale.displayName = 'ThreeDotScale';
