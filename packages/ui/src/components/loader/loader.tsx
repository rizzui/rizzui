import React from 'react';
import cn from '../../lib/cn';

const animations = {
  blink: 'animate-blink',
  scaleUp: 'animate-scale-up',
};

const sizes = {
  sm: 'w-1 h-1',
  DEFAULT: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
  xl: 'w-2.5 h-2.5',
};

const gapBasedOnSize = {
  sm: 'gap-1',
  DEFAULT: 'gap-1.5',
  lg: 'gap-1.5',
  xl: 'gap-2',
};

const colors = {
  DEFAULT: 'bg-gray-1000',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  danger: 'bg-red',
  info: 'bg-blue',
  success: 'bg-green',
  warning: 'bg-orange',
  current: 'bg-current',
};

export type LoaderSizeTypes = keyof typeof sizes;
export type LoaderColorTypes = keyof typeof colors;
export type LoaderAnimationTypes = keyof typeof animations;
export interface LoaderTypes
  extends React.HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /** HTML tag supports */
  tag?: 'div' | 'span';
  /** Set loader size */
  size?: LoaderSizeTypes;
  /** Change loader color */
  color?: LoaderColorTypes;
  /** Animation variants are */
  animation?: LoaderAnimationTypes;
  /** Add custom classes for extra style */
  className?: string;
}

/**
 * A loader for displaying loading state of a page or a section.
 */
export default function Loader({
  tag = 'div',
  size = 'DEFAULT',
  color = 'DEFAULT',
  animation = 'blink',
  className,
}: LoaderTypes) {
  let Component = tag;
  return (
    <Component
      data-testid="loader"
      className={cn('flex items-center', gapBasedOnSize[size], className)}
    >
      <span
        data-testid="first-dot"
        className={cn(
          'rounded-full',
          sizes[size],
          colors[color],
          animations[animation]
        )}
      />
      <span
        data-testid="second-dot"
        className={cn(
          'animation-delay-200 rounded-full',
          sizes[size],
          colors[color],
          animations[animation]
        )}
      />
      <span
        data-testid="third-dot"
        className={cn(
          'animation-delay-500 rounded-full',
          sizes[size],
          colors[color],
          animations[animation]
        )}
      />
    </Component>
  );
}

Loader.displayName = 'Loader';
