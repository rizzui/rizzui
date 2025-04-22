import React from 'react';
import { cn } from '../../lib/cn';
import { XIcon } from '../../icons/x-mark';
import { CheckmarkIcon } from '../../icons/checkmark';
import { makeClassName } from '../../lib/make-class-name';

const lineClasses = {
  base: 'rizzui-step-line absolute w-full group-last:hidden block h-px',
  top: {
    noDot: {
      sm: 'top-[22px]',
      md: 'top-6',
      lg: 'top-[26px]',
    },
    dot: {
      sm: 'top-[14px]',
      md: 'top-4',
      lg: 'top-[18px]',
    },
  },
  titleLine: 'block h-px flex-auto group-last:hidden',
  color: {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    danger: 'bg-red',
    info: 'bg-blue',
    success: 'bg-green',
    warning: 'bg-orange',
  },
};

const circleClasses = {
  base: 'z-10 inline-flex items-center justify-center rounded-full text-sm font-medium',
  size: {
    sm: 'h-7 w-7 mt-0.5',
    md: 'h-8 w-8',
    lg: 'h-9 w-9',
  },
  waiting: 'border border-muted bg-white dark:bg-gray-50 text-gray-500',
  variant: {
    solid: {
      base: 'text-gray-50 shadow-lg',
      color: {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        danger: 'bg-red',
        info: 'bg-blue',
        success: 'bg-green',
        warning: 'bg-orange',
      },
    },
    outline: {
      base: 'border dark:bg-gray-50 bg-white shadow-lg',
      color: {
        primary: 'text-primary border-primary',
        secondary: 'text-secondary border-secondary',
        danger: 'text-red border-red',
        info: 'text-blue border-blue',
        success: 'text-green border-green',
        warning: 'text-orange border-orange',
      },
    },
  },
};

const dotClasses = {
  base: 'indent-[-9999px] overflow-hidden mt-1.5',
  waiting: 'bg-gray-300',
  size: {
    sm: 'h-3 w-3 !mt-2',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  },
};

export interface StepProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Give a title for the step */
  title: React.ReactNode;
  /** Give a description for the step */
  description?: React.ReactNode;
  /** Pass custom icon */
  icon?: React.ReactNode;
  /** Index number for each component. Handled underneath by `Stepper` component */
  index?: number;
  /** Status of each step */
  status?: 'waiting' | 'in-progress' | 'completed' | 'error';
  /** The size of each Step */
  size?: keyof typeof circleClasses.size;
  /** The variants of the component are: */
  variant?: keyof typeof circleClasses.variant;
  /** Change Step Color */
  color?: keyof typeof lineClasses.color;
  /** Whether to show dot. Handled from `Stepper` component */
  dot?: boolean;
  /** Pass className to design the container */
  className?: string;
  /** Pass circleClassName to design the rounded disc */
  circleClassName?: string;
  /** Pass contentClassName to design the content area */
  contentClassName?: string;
  /** Pass titleClassName to design the label or title */
  titleClassName?: string;
  /** Pass descriptionClassName to design the description */
  descriptionClassName?: string;
}

const renderIconText = (
  index: number,
  status: StepProps['status'],
  dot: StepProps['dot']
) => {
  if (!dot && status === 'error') return <XIcon className="h-5 w-5" />;
  if (!dot && status === 'completed')
    return <CheckmarkIcon className="h-5 w-5" />;
  return index + 1;
};

export function Step({
  title,
  description,
  icon,
  index = 0,
  status,
  size = 'md',
  variant = 'solid',
  color = 'primary',
  dot,
  className,
  circleClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: StepProps) {
  return (
    <div
      className={cn(
        makeClassName(`step-root`),
        'group relative flex flex-1 last:flex-none',
        className
      )}
    >
      <div
        className={cn(
          makeClassName(`step-line`),
          lineClasses.base,
          dot ? lineClasses.top.dot[size] : lineClasses.top.noDot[size],
          status === 'completed' ? lineClasses.color[color] : 'bg-muted'
        )}
      />

      <div
        className={cn(
          makeClassName(`step-circle`),
          circleClasses.base,
          dot && dotClasses.base,
          dot ? dotClasses.size[size] : circleClasses.size[size],
          status === 'waiting'
            ? circleClasses.waiting
            : cn(
                circleClasses.variant[variant].base,
                circleClasses.variant[variant].color[color]
              ),
          dot && status === 'waiting' && dotClasses.waiting,
          circleClassName
        )}
      >
        {(!dot && icon) || renderIconText(index, status, dot)}
      </div>

      <div
        className={cn(
          makeClassName(`step-container`),
          'ml-3 mt-0.5 flex flex-1 flex-col',
          contentClassName
        )}
      >
        <span className="rizzui-step-title flex items-center justify-center group-last:inline-block">
          <h2
            className={cn(
              makeClassName(`step-title`),
              '!mb-0 mr-2 text-base font-medium rtl:ml-2',
              status === 'waiting' ? 'text-gray-500' : 'text-gray-900',
              titleClassName
            )}
          >
            {title}
          </h2>
          <span
            className={cn(
              lineClasses.titleLine,
              status === 'completed' ? lineClasses.color[color] : 'bg-muted'
            )}
          />
        </span>

        {description && (
          <span
            className={cn(
              makeClassName(`step-description`),
              'rizzui-step-description',
              status === 'in-progress' ? 'text-gray-900' : 'text-gray-500',
              descriptionClassName
            )}
          >
            {description}
          </span>
        )}
      </div>
    </div>
  );
}

Step.displayName = 'Step';
