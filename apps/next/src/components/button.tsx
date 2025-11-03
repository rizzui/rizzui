import React, { type ElementType } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
// import { Loader } from "../loader";

const button = tv({
  base: 'font-medium inline-flex items-center justify-center cursor-pointer active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200 rounded-[var(--border-radius)]',
  variants: {
    variant: {
      solid:
        'bg-primary hover:bg-primary-dark dark:hover:bg-primary/90 focus-visible:ring-muted text-primary-foreground border-[length:var(--border-width)] border-transparent dark:backdrop-blur',
      outline:
        'bg-transparent border-[length:var(--border-width)] border-border hover:border-primary focus-visible:ring-muted hover:text-primary dark:backdrop-blur',
      flat: 'bg-muted hover:bg-primary-lighter focus-visible:ring-primary-lighter hover:text-primary-dark border-[length:var(--border-width)] border-transparent backdrop-blur',
      text: 'hover:text-primary focus-visible:ring-primary-lighter border-[length:var(--border-width)] border-transparent',
      danger:
        'bg-red hover:bg-red-dark dark:hover:bg-red/80 focus-visible:ring-red/30 text-white border-[length:var(--border-width)] border-transparent dark:backdrop-blur',
    },
    size: {
      sm: 'px-2.5 py-1 text-xs h-8',
      md: 'px-4 py-2 text-sm h-10',
      lg: 'px-5 py-2 text-base h-12',
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
  },
});

export type ButtonProps<T extends ElementType = 'button'> = VariantProps<
  typeof button
> & {
  as?: T;
  ref?: React.Ref<any>;
  isLoading?: boolean;
  loader?: React.ReactNode;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithRef<T>, 'as' | 'className' | 'ref'> & {
    className?: string;
  };

export function Button<T extends ElementType = 'button'>({
  as,
  ref,
  children,
  className,
  isLoading,
  type = 'button',
  variant,
  size,
  disabled,
  loader,
  ...props
}: ButtonProps<T>) {
  const Component = (as || 'button') as ElementType;

  return (
    <Component
      ref={ref}
      type={Component === 'button' ? type : undefined}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={isLoading}
      className={button({
        variant,
        size,
        disabled,
        isLoading,
        className,
      })}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="invisible opacity-0">{children}</span>
          <span className="absolute inset-0 flex h-full w-full items-center justify-center">
            {loader ?? 'Loading...'}
          </span>
        </>
      ) : (
        children
      )}
    </Component>
  );
}
