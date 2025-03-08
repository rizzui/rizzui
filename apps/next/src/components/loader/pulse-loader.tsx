import React from 'react';

export function PulseLoader({ fill, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill ?? 'currentColor'}
      {...props}
    >
      <circle cx={12} cy={12} r={0}>
        <animate
          attributeName="r"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
          values="0;11"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="1.2s"
          keySplines=".52,.6,.25,.99"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </svg>
  );
}

PulseLoader.displayName = 'PulseLoader';
