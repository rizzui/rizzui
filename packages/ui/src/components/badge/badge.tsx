import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const badge = tv({
  base: 'inline-flex items-center justify-center font-semibold leading-none',
  variants: {
    variant: {
      solid: '',
      flat: '',
      outline: 'bg-transparent border',
    },
    color: {
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
      info: '',
    },
    size: {
      sm: 'px-1.5 py-1 text-[10px] leading-[1.1]',
      md: 'px-2.5 py-1.5 text-xs',
      lg: 'px-3 py-2 text-sm',
      xl: 'px-3 py-2 text-base',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      pill: 'rounded-full',
    },
    renderAsDot: {
      true: '',
    },
    enableOutlineRing: {
      true: 'ring-2 ring-background',
    },
  },
  compoundVariants: [
    // Solid variants with colors
    {
      variant: 'solid',
      color: 'primary',
      class: 'bg-primary text-primary-foreground',
    },
    {
      variant: 'solid',
      color: 'secondary',
      class: 'bg-secondary text-secondary-foreground',
    },
    { variant: 'solid', color: 'success', class: 'bg-green text-white' },
    { variant: 'solid', color: 'warning', class: 'bg-orange text-white' },
    { variant: 'solid', color: 'danger', class: 'bg-red text-white' },
    { variant: 'solid', color: 'info', class: 'bg-blue text-white' },
    // Flat variants with colors
    {
      variant: 'flat',
      color: 'primary',
      class: 'bg-primary-lighter text-primary-dark',
    },
    {
      variant: 'flat',
      color: 'secondary',
      class: 'bg-secondary-lighter text-secondary-dark',
    },
    {
      variant: 'flat',
      color: 'success',
      class: 'bg-green-lighter text-green-dark',
    },
    {
      variant: 'flat',
      color: 'warning',
      class: 'bg-orange-lighter text-orange-dark',
    },
    { variant: 'flat', color: 'danger', class: 'bg-red-lighter text-red-dark' },
    { variant: 'flat', color: 'info', class: 'bg-blue-lighter text-blue-dark' },
    // Outline variants with colors
    {
      variant: 'outline',
      color: 'primary',
      class: 'border-primary text-primary-dark',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'border-secondary text-secondary-dark',
    },
    {
      variant: 'outline',
      color: 'success',
      class: 'border-green text-green-dark',
    },
    {
      variant: 'outline',
      color: 'warning',
      class: 'border-orange text-orange-dark',
    },
    { variant: 'outline', color: 'danger', class: 'border-red text-red-dark' },
    { variant: 'outline', color: 'info', class: 'border-blue text-blue-dark' },
    // Dot sizes
    { renderAsDot: true, size: 'sm', class: 'w-1.5 h-1.5 px-0 py-0' },
    { renderAsDot: true, size: 'md', class: 'w-2 h-2 px-0 py-0' },
    { renderAsDot: true, size: 'lg', class: 'w-3 h-3 px-0 py-0' },
    { renderAsDot: true, size: 'xl', class: 'w-3.5 h-3.5 px-0 py-0' },
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    rounded: 'pill',
  },
});

export type BadgeProps = Omit<
  VariantProps<typeof badge>,
  'renderAsDot' | 'enableOutlineRing'
> &
  React.HTMLAttributes<HTMLSpanElement> & {
    /** Render badge as a dot */
    renderAsDot?: boolean;
    /** Set a outline ring. It is useful for the overlapping UI. */
    enableOutlineRing?: boolean;
  };

/**
 * Badge is a small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.
 */
export function Badge({
  renderAsDot = false,
  size,
  color,
  variant,
  rounded,
  enableOutlineRing,
  children,
  className,
  ...props
}: React.PropsWithChildren<BadgeProps>) {
  return (
    <span
      className={badge({
        variant,
        color,
        size,
        rounded,
        renderAsDot,
        enableOutlineRing,
        className,
      })}
      {...props}
    >
      {!renderAsDot ? children : null}
    </span>
  );
}

Badge.displayName = 'Badge';
