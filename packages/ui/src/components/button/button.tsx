import React, { forwardRef } from 'react';
import { Loader } from '../loader';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { buttonVariantStyles } from '../../lib/button-variant';
import { roundedStyles } from '../../lib/rounded';

const buttonStyles = {
  base: 'inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200',
  disabled:
    'dark:hover:bg-muted/70 cursor-not-allowed border-muted bg-muted/70 text-muted-foreground backdrop-blur-xl hover:border-muted hover:bg-muted/70',
  size: {
    sm: 'px-2.5 py-1 text-xs h-8',
    md: 'px-4 py-2 text-sm h-10',
    lg: 'px-5 py-2 text-base h-12',
    xl: 'px-8 py-2.5 text-base h-14',
  },
  rounded: roundedStyles,
  variant: buttonVariantStyles,
};

export type ButtonProps = {
  as?: 'button' | 'span';
  /** Set the loading status of button */
  isLoading?: boolean;
  /** Set the original html type of button */
  type?: 'button' | 'submit' | 'reset';
  /** The variants of the component are: */
  variant?: keyof typeof buttonStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense button styling. */
  size?: keyof typeof buttonStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof buttonStyles.rounded;
  /** Change button color */
  color?: keyof (typeof buttonStyles.variant)['solid']['color'];
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
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      isLoading,
      as = 'button',
      type = 'button',
      variant = 'solid',
      size = 'md',
      rounded = 'md',
      color = 'primary',
      disabled,
      ...buttonProps
    },
    ref
  ) => {
    const Component = as;
    const variantStyle = buttonStyles.variant[variant];
    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={cn(
          makeClassName(`button`),
          buttonStyles.base,
          buttonStyles.size[size],
          buttonStyles.rounded[rounded],
          variantStyle.base,
          variantStyle.color[color],
          isLoading && 'pointer-events-none relative',
          disabled && buttonStyles.disabled,
          className
        )}
        {...(as && as !== 'span' && { type })}
        {...buttonProps}
      >
        {isLoading ? (
          <>
            {/* trick to have exact button width when button is loading */}
            <span className="invisible opacity-0">{children}</span>
            <span
              className={cn(
                makeClassName(`button-loader`),
                'absolute inset-0 flex h-full w-full items-center justify-center'
              )}
            >
              <Loader size={size} className="scale-95" />
            </span>
          </>
        ) : (
          <>{children}</>
        )}
      </Component>
    );
  }
);

Button.displayName = 'Button';
