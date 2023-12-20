import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { SpinnerIcon } from '../../icons/spinner';
import { buttonVariantStyles } from '../../lib/button-variant';

const actionIconStyles = {
  base: 'inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200',
  disabled:
    'dark:hover:bg-muted/70 cursor-not-allowed border-muted bg-muted/70 text-muted-foreground backdrop-blur-xl hover:border-muted hover:bg-muted/70',
  size: {
    sm: 'p-0.5 w-7 h-7',
    md: 'p-1 w-9 h-9',
    lg: 'p-2 w-11 h-11',
    xl: 'p-2 w-12 h-12',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-md',
    full: 'rounded-full',
  },
  spinnerSize: {
    sm: 'w-3.5',
    md: 'w-4',
    lg: 'w-5',
    xl: 'w-6',
  },
  variant: buttonVariantStyles,
};

export type ActionIconProps = {
  as?: 'button' | 'span';
  /** Set the original html type of button */
  type?: 'button' | 'submit' | 'reset';
  /** Use SVG icon as a children */
  children: React.ReactNode;
  /** Set the loading status of button */
  isLoading?: boolean;
  /** The variants of the component are: */
  variant?: keyof typeof actionIconStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense button styling. */
  size?: keyof typeof actionIconStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof actionIconStyles.rounded;
  /** Change button color */
  color?: keyof (typeof actionIconStyles.variant)['solid']['color'];
  /** Add custom actionIconStyles for extra style */
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLSpanElement>;

/**
 * Primary action icon button to trigger an operation. Here is the API documentation of the ActionIcon component.
 * And the rest of the props are the same as the original html button.
 * You can use props like `id`, `title`, `onClick`, `onFocus`, `onBlur` etc.
 */
export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(
  (
    {
      as = 'button',
      type = 'button',
      children,
      className,
      isLoading,
      variant = 'solid',
      size = 'md',
      rounded = 'md',
      color = 'primary',
      disabled,
      ...actionIconProps
    },
    ref
  ) => {
    const Component = as;
    const variantStyle = actionIconStyles.variant[variant];
    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={cn(
          makeClassName(`action-icon-root`),
          actionIconStyles.base,
          actionIconStyles.size[size],
          actionIconStyles.rounded[rounded],
          variantStyle.base,
          variantStyle.color[color],
          isLoading && 'pointer-events-none relative',
          disabled && actionIconStyles.disabled,
          className
        )}
        {...(as && as !== 'span' && { type })}
        {...actionIconProps}
      >
        {isLoading ? (
          <SpinnerIcon
            className={cn(
              makeClassName(`action-icon-spinner`),
              'h-auto animate-spin',
              actionIconStyles.spinnerSize[size]
            )}
          />
        ) : (
          <>{children}</>
        )}
      </Component>
    );
  }
);

ActionIcon.displayName = 'ActionIcon';
