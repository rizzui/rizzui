import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { BarsSpinner } from './bars-spinner';
import { PulseLoader } from './pulse-loader';
import { Spinner } from './spinner';
import { ThreeDotScale } from './three-dot-scale';

const loader = tv({
  base: 'h-auto',
  variants: {
    size: {
      sm: 'w-5',
      md: 'w-[22px]',
      lg: 'w-7',
      xl: 'w-9',
    },
    color: {
      current: 'text-current',
      primary: 'text-primary',
      secondary: 'text-secondary',
      danger: 'text-red',
      info: 'text-blue',
      success: 'text-green',
      warning: 'text-orange',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'current',
  },
});

const Components = {
  bars: BarsSpinner,
  pulse: PulseLoader,
  spinner: Spinner,
  threeDot: ThreeDotScale,
};

type LoaderVariant = VariantProps<typeof loader>;

export interface LoaderTypes extends React.SVGProps<SVGSVGElement> {
  size?: LoaderVariant['size'];
  variant?: keyof typeof Components;
  color?: LoaderVariant['color'];
  className?: string;
}

export function Loader({
  size = 'md',
  color = 'current',
  variant = 'bars',
  className,
  ...props
}: LoaderTypes) {
  const SVGComponent = Components[variant];

  return (
    <SVGComponent
      data-testid="loader"
      className={loader({
        size,
        color,
        className: cn(makeClassName(`loader-${variant}`), className),
      })}
      {...props}
    />
  );
}

Loader.displayName = 'Loader';
