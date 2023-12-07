import React from 'react';
import { cn } from '../../lib/cn';
import { Text } from '../typography';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';

const progressBarStyles = {
  base: 'absolute top-0 bottom-0 left-0 h-full flex items-center justify-center',
  size: {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  },
  rounded: roundedStyles,
  variant: {
    solid: {
      base: 'text-background',
      color: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        danger: 'bg-red',
        info: 'bg-blue',
        success: 'bg-green',
        warning: 'bg-orange',
      },
    },
    flat: {
      base: '',
      color: {
        primary: 'bg-primary/40 text-primary-dark',
        secondary: 'bg-secondary/40 text-secondary-dark',
        danger: 'bg-red/40 text-red-dark',
        info: 'bg-blue/40 text-blue-dark',
        success: 'bg-green/40 text-green-dark',
        warning: 'bg-orange/40 text-orange-dark',
      },
    },
  },
};

export interface ProgressbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Percentage of filled bar */
  value?: number;
  /** Pass label to show percentage inside bar */
  label?: string;
  /** Size of the compoents are: */
  size?: keyof typeof progressBarStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof progressBarStyles.rounded;
  /** Pass color variations */
  color?: keyof typeof progressBarStyles.variant.flat.color;
  /** The variants of the components are: */
  variant?: keyof typeof progressBarStyles.variant;
  /** To style entire progressbar component */
  className?: string;
  /** To style bar of the component */
  barClassName?: string;
  /** To style label */
  labelClassName?: string;
}

export function Progressbar({
  value,
  label = '',
  size = 'md',
  rounded = 'pill',
  color = 'primary',
  variant = 'solid',
  className,
  barClassName,
  labelClassName,
  ...props
}: ProgressbarProps) {
  return (
    <div
      className={cn(
        makeClassName(`progressbar-root`),
        'relative w-full bg-muted',
        progressBarStyles.size[size],
        progressBarStyles.rounded[rounded],
        className
      )}
    >
      <div
        role={'progressbar'}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-label={label}
        className={cn(
          makeClassName(`progressbar`),
          progressBarStyles.base,
          progressBarStyles.variant[variant].base,
          progressBarStyles.variant[variant].color[color],
          progressBarStyles.rounded[rounded],
          barClassName
        )}
        style={{ width: `${value}%` }}
        {...props}
      >
        {label && size === 'xl' && (
          <Text
            className={cn(
              makeClassName(`progressbar-label`),
              'text-xs font-bold',
              labelClassName
            )}
          >
            {label}
          </Text>
        )}
      </div>
    </div>
  );
}

Progressbar.displayName = 'Progressbar';
