import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { Text } from '../typography';
import { makeClassName } from '../../lib/make-class-name';

const progressBar = tv({
  base: 'absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full',
  variants: {
    size: {
      sm: 'h-1.5',
      md: 'h-2',
      lg: 'h-3',
    },
    variant: {
      solid: 'text-background',
      flat: '',
    },
    color: {
      primary: '',
      secondary: '',
      danger: '',
      info: '',
      success: '',
      warning: '',
    },
  },
  compoundVariants: [
    // Solid variants
    { variant: 'solid', color: 'primary', class: 'bg-primary' },
    { variant: 'solid', color: 'secondary', class: 'bg-secondary' },
    { variant: 'solid', color: 'danger', class: 'bg-red' },
    { variant: 'solid', color: 'info', class: 'bg-blue' },
    { variant: 'solid', color: 'success', class: 'bg-green' },
    { variant: 'solid', color: 'warning', class: 'bg-orange' },
    // Flat variants
    { variant: 'flat', color: 'primary', class: 'bg-primary/40 text-primary-dark' },
    { variant: 'flat', color: 'secondary', class: 'bg-secondary/40 text-secondary-dark' },
    { variant: 'flat', color: 'danger', class: 'bg-red/40 text-red-dark' },
    { variant: 'flat', color: 'info', class: 'bg-blue/40 text-blue-dark' },
    { variant: 'flat', color: 'success', class: 'bg-green/40 text-green-dark' },
    { variant: 'flat', color: 'warning', class: 'bg-orange/40 text-orange-dark' },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'solid',
    color: 'primary',
  },
});

const progressLabel = tv({
  base: 'font-bold',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
    },
  },
});

type ProgressBarVariant = VariantProps<typeof progressBar>;

export interface ProgressbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Percentage of filled bar */
  value?: number;
  /** Pass label to show percentage inside bar */
  label?: string;
  /** Size of the components are: */
  size?: ProgressBarVariant['size'];
  /** The rounded variants are: */
  rounded?: ProgressBarVariant['rounded'];
  /** Pass color variations */
  color?: ProgressBarVariant['color'];
  /** The variants of the components are: */
  variant?: ProgressBarVariant['variant'];
  /** Defines the label position of progressbar component */
  labelPosition?: 'insideBar' | 'inlineLeft' | 'inlineRight';
  /** To style the root of the component */
  className?: string;
  /** To style progressbar track of the component */
  trackClassName?: string;
  /** To style bar of the component */
  barClassName?: string;
  /** To style label */
  labelClassName?: string;
}

export function Progressbar({
  value,
  label = '',
  size = 'md',
  color = 'primary',
  variant = 'solid',
  labelPosition = 'inlineRight',
  className,
  barClassName,
  trackClassName,
  labelClassName,
  ...props
}: ProgressbarProps) {
  const isInsideBar = false;
  return (
    <div className={cn('flex w-full items-center gap-4', className)}>
      <div
        className={cn(
          makeClassName(`progressbar-root`),
          'relative w-full bg-muted rounded-full',
          progressBar({ size }),
          trackClassName
        )}
      >
        <div
          role={'progressbar'}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-label={label}
          className={progressBar({
            size,
            variant,
            color,
            className: barClassName,
          })}
          style={{ width: `${value}%` }}
          {...props}
        >
          {isInsideBar ? (
            <ProgressbarLabel
              size={size}
              label={label}
              className={labelClassName}
            />
          ) : null}
        </div>
      </div>
      {!isInsideBar ? (
        <ProgressbarLabel
          size={size}
          label={label}
          className={cn(
            labelPosition === 'inlineLeft' && 'order-first',
            labelClassName
          )}
        />
      ) : null}
    </div>
  );
}

function ProgressbarLabel({
  label,
  className,
  size = 'md',
}: {
  size: ProgressBarVariant['size'];
  label: string;
  className?: string;
}) {
  return (
    <Text
      className={progressLabel({
        size,
        className: cn(makeClassName(`progressbar-label`), className),
      })}
    >
      {label}
    </Text>
  );
}

Progressbar.displayName = 'Progressbar';
