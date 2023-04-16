'use client';

import React, { forwardRef } from 'react';
import cn from '../../lib/cn';
import { SpinnerIcon } from '../../icons/spinner';

const spinnerSize = {
  sm: 'w-3.5',
  DEFAULT: 'w-4',
  lg: 'w-5',
  xl: 'w-6',
};

const classes = {
  base: 'inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200',
  size: {
    sm: 'p-0.5 w-7 h-7',
    DEFAULT: 'p-1 w-9 h-9',
    lg: 'p-2 w-11 h-11',
    xl: 'p-2 w-12 h-12',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  variant: {
    solid: {
      base: 'border border-transparent focus-visible:ring-offset-2',
      color: {
        DEFAULT:
          'bg-gray-900 hover:enabled:bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0',
        primary:
          'bg-primary hover:enabled:bg-primary-dark focus-visible:ring-primary/30 text-white',
        secondary:
          'bg-secondary hover:enabled:bg-secondary-dark focus-visible:ring-secondary/30 text-white',
        danger:
          'bg-red hover:enabled:bg-red-dark focus-visible:ring-red/30 text-white',
        info: 'bg-blue hover:enabled:bg-blue-dark focus-visible:ring-blue/30 text-white',
        success:
          'bg-green hover:enabled:bg-green-dark focus-visible:ring-green/30 text-white',
        warning:
          'bg-orange hover:enabled:bg-orange-dark focus-visible:ring-orange/30 text-white',
      },
    },
    flat: {
      base: 'border-transparent focus-visible:ring-offset-2',
      color: {
        DEFAULT:
          'bg-gray-200 hover:enabled:bg-gray-300 focus-visible:ring-gray-900/30 text-gray-1000',
        primary:
          'bg-primary-lighter hover:enabled:bg-primary-dark/20 focus-visible:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter hover:enabled:bg-secondary-dark/20 focus-visible:ring-secondary/30 text-secondary-dark',
        danger:
          'bg-red-lighter hover:enabled:bg-red-dark/20 focus-visible:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter hover:enabled:bg-blue-dark/20 focus-visible:ring-blue/30 text-blue-dark',
        success:
          'bg-green-lighter hover:enabled:bg-green/30 focus-visible:ring-green/30 text-green-dark',
        warning:
          'bg-orange-lighter hover:enabled:bg-orange-dark/20 focus-visible:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent border focus-visible:ring-offset-2',
      color: {
        DEFAULT:
          'border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30',
        primary:
          'hover:enabled:bg-primary-lighter/40 focus-visible:ring-primary/30 text-primary-dark border-primary hover:enabled:border-primary-dark',
        secondary:
          'hover:enabled:bg-secondary-lighter/40 focus-visible:ring-secondary/30 text-secondary-dark border-secondary hover:enabled:border-secondary-dark',
        danger:
          'hover:enabled:bg-red-lighter/40 focus-visible:ring-red/30 text-red-dark border-red hover:enabled:border-red-dark ',
        info: 'hover:enabled:bg-blue-lighter/40 focus-visible:ring-blue/30 text-blue-dark border-blue hover:enabled:border-blue-dark',
        success:
          'hover:enabled:bg-green-lighter/40 focus-visible:ring-green/30 text-green-dark border-green hover:enabled:border-green-dark',
        warning:
          'hover:enabled:bg-orange-lighter/40 focus-visible:ring-orange/30 text-orange-dark border-orange hover:enabled:border-orange-dark',
      },
    },
    text: {
      base: '',
      color: {
        DEFAULT: 'hover:enabled:text-gray-1000 focus-visible:ring-gray-900/30',
        primary:
          'hover:enabled:text-primary-dark focus-visible:ring-primary/30 text-primary',
        secondary:
          'hover:enabled:text-secondary-dark focus-visible:ring-secondary/30 text-secondary',
        danger: 'hover:enabled:text-red-600 focus-visible:ring-red/30 text-red',
        info: 'hover:enabled:text-blue-dark focus-visible:ring-blue/30 text-blue',
        success:
          'hover:enabled:text-green-dark focus-visible:ring-green/30 text-green',
        warning:
          'hover:enabled:text-orange-dark focus-visible:ring-orange/30 text-orange',
      },
    },
  },
};

export interface ActionIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Use SVG icon as a children */
  children: React.ReactNode;
  /** Set the loading status of button */
  isLoading?: boolean;
  /** The variants of the component are: */
  variant?: keyof typeof classes.variant;
  /** The size of the component. `"sm"` is equivalent to the dense button styling. */
  size?: keyof typeof classes.size;
  /** The rounded variants are: */
  rounded?: keyof typeof classes.rounded;
  /** Change button color */
  color?: keyof typeof classes.variant['solid']['color'];
  /** Add custom classes for extra style */
  className?: string;
}

/**
 * Primary action icon button to trigger an operation. Here is the API documentation of the ActionIcon component.
 * And the rest of the props are the same as the original html button.
 * You can use props like `id`, `title`, `onClick`, `onFocus`, `onBlur` etc.
 */
const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  (
    {
      children,
      className,
      isLoading,
      variant = 'solid',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      color = 'DEFAULT',
      disabled,
      ...buttonProps
    },
    ref
  ) => {
    const variantStyle = classes.variant[variant];
    return (
      <button
        ref={ref}
        type={'button'}
        disabled={disabled}
        className={cn(
          classes.base,
          classes.size[size],
          classes.rounded[rounded],
          variantStyle.base,
          variantStyle.color[color],
          isLoading && 'pointer-events-none relative',
          disabled &&
            'cursor-not-allowed !border-gray-200 !bg-gray-100 !text-gray-400',
          className
        )}
        {...buttonProps}
      >
        {isLoading ? (
          <SpinnerIcon
            className={cn('h-auto animate-spin', spinnerSize[size])}
          />
        ) : (
          <>{children}</>
        )}
      </button>
    );
  }
);

ActionIcon.displayName = 'ActionIcon';
export default ActionIcon;
