import type { HTMLAttributes } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { Text } from '../typography';

const progressTrack = tv({
  base: 'relative w-full bg-muted rounded-full overflow-hidden',
  variants: {
    size: {
      sm: 'h-1.5',
      md: 'h-2',
      lg: 'h-3',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const progressBar = tv({
  base: 'absolute top-0 bottom-0 left-0 h-full flex items-center justify-center rounded-full',
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      danger: 'bg-red',
      info: 'bg-blue',
      success: 'bg-green',
      warning: 'bg-orange',
    },
  },
  defaultVariants: {
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

type ProgressTrackVariant = VariantProps<typeof progressTrack>;
type ProgressBarVariant = VariantProps<typeof progressBar>;

export interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  label?: string;
  size?: ProgressTrackVariant['size'];
  color?: ProgressBarVariant['color'];
  labelPosition?: 'insideBar' | 'inlineLeft' | 'inlineRight';
  className?: string;
  trackClassName?: string;
  barClassName?: string;
  labelClassName?: string;
}

export function Progressbar({
  value = 0,
  label = '',
  size = 'md',
  color = 'primary',
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
          'rizzui-progressbar-track',
          progressTrack({ size, className: trackClassName })
        )}
      >
        <div
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-label={label}
          className={progressBar({
            color,
            className: barClassName,
          })}
          style={{ width: `${value}%` }}
          {...props}
        >
          {isInsideBar && (
            <ProgressbarLabel
              size={size}
              label={label}
              className={labelClassName}
            />
          )}
        </div>
      </div>
      {!isInsideBar && (
        <ProgressbarLabel
          size={size}
          label={label}
          className={cn(
            labelPosition === 'inlineLeft' && 'order-first',
            labelClassName
          )}
        />
      )}
    </div>
  );
}

function ProgressbarLabel({
  label,
  className,
  size = 'md',
}: {
  size: ProgressTrackVariant['size'];
  label: string;
  className?: string;
}) {
  return (
    <Text
      className={progressLabel({
        size,
        className: cn(`rizzui-progressbar-label`, className),
      })}
    >
      {label}
    </Text>
  );
}

Progressbar.displayName = 'Progressbar';
