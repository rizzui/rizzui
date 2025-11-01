import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { SpinnerIcon } from '../../icons/spinner';
import { cn } from '../../lib/cn';

const actionIcon = tv({
  base: 'inline-flex items-center cursor-pointer justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200',
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
      sm: 'p-0.5 size-8',
      md: 'p-1 size-10',
      lg: 'p-2 size-12',
      xl: 'p-2 size-14',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded',
      lg: 'rounded-md',
      full: 'rounded-full',
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

const spinnerStyles = tv({
  base: 'h-auto animate-spin',
  variants: {
    size: {
      sm: 'w-3.5',
      md: 'w-4',
      lg: 'w-5',
      xl: 'w-6',
    },
  },
});

export type ActionIconProps = Omit<
  VariantProps<typeof actionIcon>,
  'disabled' | 'isLoading'
> &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> &
  React.HTMLAttributes<HTMLSpanElement> & {
    as?: 'button' | 'span';
    /** Set the original html type of button */
    type?: 'button' | 'submit' | 'reset';
    /** Use SVG icon as a children */
    children: React.ReactNode;
    /** Set the loading status of button */
    isLoading?: boolean;
    /** Disabled state */
    disabled?: boolean;
  };

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
      variant,
      size,
      rounded,
      disabled,
      ...actionIconProps
    },
    ref
  ) => {
    const Component = as;
    
    return (
      <Component
        ref={ref}
        disabled={disabled}
        className={actionIcon({
          variant,
          size,
          rounded,
          disabled,
          isLoading,
          className,
        })}
        {...(as && as !== 'span' && { type })}
        {...actionIconProps}
      >
        {isLoading ? (
          <SpinnerIcon className={spinnerStyles({ size })} />
        ) : (
          <>{children}</>
        )}
      </Component>
    );
  }
);

ActionIcon.displayName = 'ActionIcon';
