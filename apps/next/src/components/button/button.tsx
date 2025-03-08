import React from "react";
import { Loader } from "../loader";
import { cn } from "../lib/cn";
import { variantStyles, colorStyle, sizeStyles } from "../lib/button-variant";
import { roundedStyles } from "../lib/rounded";

const styles = {
  base: "font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-[1.8px] focus-visible:ring-offset-2 ring-offset-background transition-colors duration-200",
  disabled:
    "dark:disabled:hover:bg-muted/70 disabled:cursor-not-allowed disabled:border-muted disabled:bg-muted/70 disabled:text-muted-foreground disabled:backdrop-blur-xl disabled:hover:border-muted disabled:hover:bg-muted/70",
};

export type ButtonProps = {
  as?: "button" | "span";
  /** Set the loading status of button */
  isLoading?: boolean;
  /** Set the original html type of button */
  // type?: "button" | "submit" | "reset";
  /** The variants of the component are: */
  variant?: keyof typeof variantStyles;
  /** The size of the component. `"sm"` is equivalent to the dense button styling. */
  size?: keyof typeof sizeStyles;
  /** The rounded variants are: */
  rounded?: keyof typeof roundedStyles;
  /** Change button color */
  // color?: keyof typeof colorStyle;
  /** Disable state */
  // disabled?: boolean;
  /** Add custom classes for extra style */
  // className?: string;
  /** Custom Loader component to show when button is in loading state */
  loader?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLSpanElement>;

/**
 * Primary action button to trigger an operation. Here is the API documentation of the Button component.
 * And the rest of the props of Button are the same as the original html button.
 * You can use props like `id`, `title`, `onClick`, `onFocus`, `onBlur`, `children` etc.
 */
export const Button = ({
  children,
  className,
  isLoading,
  as = "button",
  variant = "solid",
  size = "md",
  rounded = "md",
  color = "primary",
  loader,
  ...props
}: ButtonProps) => {
  const Component = as;
  return (
    <Component
      className={cn(
        styles.base,
        styles.disabled,
        sizeStyles[size],
        // colorStyle[color],
        roundedStyles[rounded],
        variantStyles[variant],
        isLoading && "pointer-events-none relative",
        className
      )}
      {...props}
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
};

Button.displayName = "Button";
