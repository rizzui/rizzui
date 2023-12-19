import React from 'react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';

const badgeStyles = {
  base: 'inline-flex items-center justify-center font-semibold leading-none',
  outlineRing: 'ring-2 ring-background',
  size: {
    sm: 'px-1.5 py-1 text-[10px] leading-[1.1]',
    md: 'px-2.5 py-1.5 text-xs',
    lg: 'px-3 py-2 text-sm',
    xl: 'px-3 py-2 text-base',
  },
  dot: {
    size: {
      sm: 'w-1.5 h-1.5',
      md: 'w-2 h-2',
      lg: 'w-3 h-3',
      xl: 'w-3.5 h-3.5',
    },
  },
  rounded: roundedStyles,
  variant: {
    solid: {
      base: '',
      color: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        success: 'bg-green text-white',
        warning: 'bg-orange text-white',
        danger: 'bg-red text-white',
        info: 'bg-blue text-white',
      },
    },
    flat: {
      base: '',
      color: {
        primary: 'bg-primary-lighter text-primary-dark',
        secondary: 'bg-secondary-lighter text-secondary-dark',
        success: 'bg-green-lighter text-green-dark',
        warning: 'bg-orange-lighter text-orange-dark',
        danger: 'bg-red-lighter text-red-dark',
        info: 'bg-blue-lighter text-blue-dark',
      },
    },
    outline: {
      base: 'bg-transparent border',
      color: {
        primary: 'border-primary text-primary-dark',
        secondary: 'border-secondary text-secondary-dark',
        success: 'border-green text-green-dark',
        warning: 'border-orange text-orange-dark',
        danger: 'border-red text-red-dark',
        info: 'border-blue text-blue-dark',
      },
    },
  },
};

export type BadgeProps = {
  /** Change badge color */
  color?: keyof (typeof badgeStyles.variant)['solid']['color'];
  /** The variants of the component are: */
  variant?: keyof typeof badgeStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense badge styling. */
  size?: keyof typeof badgeStyles.size;
  /** Render badge as a dot */
  renderAsDot?: boolean;
  /** Set a outline ring. It is useful for the overlapping UI. */
  enableOutlineRing?: boolean;
  /** The rounded variants are: */
  rounded?: keyof typeof badgeStyles.rounded;
  /** Add custom classes for extra style */
  className?: string;
};

/**
 * Badge is a small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.
 */
export function Badge({
  renderAsDot = false,
  size = 'md',
  color = 'primary',
  variant = 'solid',
  rounded = 'pill',
  enableOutlineRing,
  children,
  className,
  ...props
}: React.PropsWithChildren<BadgeProps>) {
  const styles = badgeStyles.variant[variant];

  return (
    <span
      className={cn(
        makeClassName(`badge`),
        badgeStyles.base,
        badgeStyles.variant[variant],
        renderAsDot ? badgeStyles.dot.size[size] : badgeStyles.size[size],
        styles.color[color],
        styles.base,
        badgeStyles.rounded[rounded],
        enableOutlineRing && badgeStyles.outlineRing,
        className,
        { ...props }
      )}
    >
      {!renderAsDot ? children : null}
    </span>
  );
}

Badge.displayName = 'Badge';
