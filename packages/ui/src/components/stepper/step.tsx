import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { XIcon } from '../../icons/x-mark';
import { CheckmarkIcon } from '../../icons/checkmark';
import { makeClassName } from '../../lib/make-class-name';
import { useStepper } from './stepper';

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
  waiting: 'border border-border bg-white dark:bg-gray-50 text-gray-500',
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
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  index?: number;
  status?: 'waiting' | 'in-progress' | 'completed' | 'error';
  size?: keyof typeof circleClasses.size;
  variant?: keyof typeof circleClasses.variant;
  color?: keyof typeof lineClasses.color;
  dot?: boolean;
  className?: string;
  circleClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

function renderIconText(
  index: number,
  status: StepProps['status'],
  dot: StepProps['dot']
) {
  if (!dot && status === 'error') return <XIcon className="h-5 w-5" />;
  if (!dot && status === 'completed')
    return <CheckmarkIcon className="h-5 w-5" />;
  return index + 1;
}

export function Step({
  title,
  description,
  icon,
  index: propsIndex,
  status: propsStatus,
  size = 'md',
  variant = 'solid',
  color = 'primary',
  dot: propsDot,
  className: propsClassName,
  circleClassName: propsCircleClassName,
  contentClassName: propsContentClassName,
  titleClassName: propsTitleClassName,
  descriptionClassName: propsDescriptionClassName,
}: StepProps) {
  const stepId = useId();

  // Try to get stepper context (optional)
  let stepperContext;
  try {
    stepperContext = useStepper();
  } catch {
    // Not in a stepper, use standalone mode
    stepperContext = null;
  }

  // Use context values if available, otherwise use props
  const index = stepperContext
    ? stepperContext.registerStep(stepId)
    : (propsIndex ?? 0);
  const dot = stepperContext ? stepperContext.dot : propsDot;

  // Calculate status
  const calcStatus = (currentIndex: number, stepIndex: number) => {
    if (stepIndex === currentIndex) return 'in-progress';
    if (stepIndex < currentIndex) return 'completed';
    return 'waiting';
  };

  const status =
    propsStatus ||
    (stepperContext
      ? calcStatus(stepperContext.currentIndex, index)
      : 'waiting');

  // Get classNames from context or props
  const className = stepperContext
    ? cn(stepperContext.getStepClassName(size), propsClassName)
    : propsClassName;

  const circleClassName = stepperContext
    ? cn(stepperContext.getCircleClassName(), propsCircleClassName)
    : propsCircleClassName;

  const contentClassName = stepperContext
    ? cn(stepperContext.getContentClassName(), propsContentClassName)
    : propsContentClassName;

  const titleClassName = stepperContext?.titleClassName || propsTitleClassName;
  const descriptionClassName =
    stepperContext?.descriptionClassName || propsDescriptionClassName;

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
          'mt-0.5 ml-3 flex flex-1 flex-col',
          contentClassName
        )}
      >
        <span className="rizzui-step-title flex items-center justify-center group-last:inline-block">
          <h2
            className={cn(
              makeClassName(`step-title`),
              'mr-2 mb-0! text-base font-medium rtl:ml-2',
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
