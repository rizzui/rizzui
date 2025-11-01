import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Loader } from '../loader';

const button = tv({
  base: 'font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200',
  variants: {
    variant: {
      solid:
        'bg-primary-dark hover:bg-primary-dark dark:hover:bg-primary/90 focus-visible:ring-muted text-primary-foreground border border-transparent dark:backdrop-blur',
      outline:
        'bg-transparent border border-muted hover:border-primary focus-visible:ring-muted hover:text-primary dark:backdrop-blur',
      flat: 'bg-muted hover:bg-primary-lighter focus-visible:ring-primary-lighter hover:text-primary-dark border-transparent backdrop-blur',
      text: 'hover:text-primary focus-visible:ring-primary-lighter',
      danger:
        'bg-red hover:bg-red-dark dark:hover:bg-red/80 focus-visible:ring-red/30 text-white border border-transparent dark:backdrop-blur',
    },
    size: {
      sm: 'px-2.5 py-1 text-xs h-8',
      md: 'px-4 py-2 text-sm h-10',
      lg: 'px-5 py-2 text-base h-12',
      xl: 'px-8 py-2.5 text-base h-14',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      pill: 'rounded-full',
    },
    disabled: {
      true: 'dark:hover:bg-muted/70 cursor-not-allowed border-muted bg-muted/70 text-muted-foreground hover:text-muted-foreground backdrop-blur-xl hover:border-muted hover:bg-muted/70',
    },
    isLoading: {
      true: 'pointer-events-none relative',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    rounded: 'md',
  },
});

export type ButtonProps = Omit<
  VariantProps<typeof button>,
  'disabled' | 'isLoading'
> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> &
  React.HTMLAttributes<HTMLSpanElement> & {
    as?: 'button' | 'span';
    /** Set the loading status of button */
    isLoading?: boolean;
    /** Set the original html type of button */
    type?: 'button' | 'submit' | 'reset';
    /** Disable state */
    disabled?: boolean;
    /** Custom Loader component to show when button is in loading state */
    loader?: React.ReactNode;
  };

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
      variant,
      size,
      rounded,
      disabled,
      loader,
      ...buttonProps
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={button({
          variant,
          size,
          rounded,
          disabled,
          isLoading,
          className,
        })}
        {...(as && as !== 'span' && { type })}
        {...buttonProps}
      >
        {isLoading ? (
          <>
            {/* trick to have exact button width when button is loading */}
            <span className="invisible opacity-0">{children}</span>
            <span className="absolute inset-0 flex h-full w-full items-center justify-center">
              {loader ?? <Loader size={size} className="scale-95" />}
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
