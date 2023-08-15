import React, { forwardRef } from 'react';
import Loader from '../loader';
import cn from '../../lib/cn';

const buttonClasses = {
  base: 'inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200',
  size: {
    sm: 'px-2.5 py-1 text-xs h-8',
    DEFAULT: 'px-4 py-2 text-sm h-10',
    lg: 'px-5 py-2 text-base h-12',
    xl: 'px-8 py-2.5 text-base h-14',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
  variant: {
    solid: {
      base: 'border border-transparent focus-visible:ring-offset-2',
      color: {
        DEFAULT:
          'bg-gray-900 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0',
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

export type ButtonProps = {
  tag?: 'button' | 'span';
  /** Set the loading status of button */
  isLoading?: boolean;
  /** Set the original html type of button */
  type?: 'button' | 'submit' | 'reset';
  /** The variants of the component are: */
  variant?: keyof typeof buttonClasses.variant;
  /** The size of the component. `"sm"` is equivalent to the dense button styling. */
  size?: keyof typeof buttonClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof buttonClasses.rounded;
  /** Change button color */
  color?: keyof (typeof buttonClasses.variant)['solid']['color'];
  /** Disable state */
  disabled?: boolean;
  /** Add custom classes for extra style */
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLSpanElement>;

/**
 * Primary action button to trigger an operation. Here is the API documentation of the Button component.
 * And the rest of the props of Button are the same as the original html button.
 * You can use props like `id`, `title`, `onClick`, `onFocus`, `onBlur`, `children` etc.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      isLoading,
      tag = 'button',
      type = 'button',
      variant = 'solid',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      color = 'DEFAULT',
      disabled,
      ...buttonProps
    },
    ref,
  ) => {
    const Component = tag;
    const variantStyle = buttonClasses.variant[variant];
    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={cn(
          buttonClasses.base,
          buttonClasses.size[size],
          buttonClasses.rounded[rounded],
          variantStyle.base,
          variantStyle.color[color],
          isLoading && 'pointer-events-none relative',
          disabled &&
            'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400',
          className,
        )}
        {...(tag && tag !== 'span' && { type })}
        {...buttonProps}
      >
        {isLoading ? (
          <>
            {/* trick to have exact button width when button is loading */}
            <span className="invisible opacity-0">{children}</span>
            <span className="absolute inset-0 flex h-full w-full items-center justify-center">
              <Loader
                tag="span"
                color="current"
                size={size}
                animation="scaleUp"
              />
            </span>
          </>
        ) : (
          <>{children}</>
        )}
      </Component>
    );
  },
);

Button.displayName = 'Button';
export default Button;
