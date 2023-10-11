import React from 'react';
import { type StepProps } from './step';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const containerClasses = {
  base: 'flex-col space-y-2',
  line: '[&>.aegon-step-line]:hidden',
  verticalLine: {
    base: '[&>.aegon-step-line]:h-full [&>.aegon-step-line]:w-px min-h-[100px] last:min-h-0',
    left: {
      noDot: {
        sm: '[&>.aegon-step-line]:left-3 rtl:[&>.aegon-step-line]:right-3',
        DEFAULT:
          '[&>.aegon-step-line]:left-3.5 rtl:[&>.aegon-step-line]:right-3.5',
        lg: '[&>.aegon-step-line]:left-4 rtl:[&>.aegon-step-line]:right-4',
      },
      dot: {
        sm: '[&>.aegon-step-line]:left-[5px] rtl:[&>.aegon-step-line]:right-[5px]',
        DEFAULT: '[&>.aegon-step-line]:left-2 rtl:[&>.aegon-step-line]:right-2',
        lg: '[&>.aegon-step-line]:left-2.5 rtl:[&>.aegon-step-line]:right-2.5',
      },
    },
  },
};

const contentClasses = {
  base: '[&>.aegon-step-title]:justify-start [&>.aegon-step-title>span]:hidden',
  containerDesc:
    '[&>.aegon-step-description]:-translate-x-6 rtl:[&>.aegon-step-description]:translate-x-6 -ml-2 rtl:[&>.aegon-step-title>h2]:mr-0',
};

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Index of currently active step */
  currentIndex?: number;
  /** Direction of stepper */
  direction?: 'horizontal' | 'vertical';
  /** Whether to show dot */
  dot?: boolean;
  /** Pass Step Component as children */
  children: React.ReactNode;
  /** Pass dotClassName to design the rounded disc */
  dotClassName?: string;
  /** Pass contentClassName to design the content area */
  contentClassName?: string;
  /** Pass titleClassName to design the label or title */
  titleClassName?: string;
  /** Pass descriptionClassName to design the description */
  descriptionClassName?: string;
}

const calcStatus = (activeIndex: number, currentIndex: number) => {
  if (activeIndex === currentIndex) return 'in-progress';
  if (currentIndex < activeIndex) return 'completed';
  return 'waiting';
};

/**
 * Stepper tool is used to enlighten user regarding the progress of the task.
 * `Stepper` component displays the progress of the task in a sequence of numbered steps through `Step` component.
 */
export function Stepper({
  currentIndex = 0,
  children,
  direction = 'horizontal',
  dot = false,
  className,
  titleClassName,
  dotClassName,
  contentClassName,
  descriptionClassName,
}: StepperProps) {
  return (
    <div
      className={cn(
        makeClassName(`stepper-root`),
        'flex justify-between space-x-4 rtl:space-x-0',
        direction === 'vertical' && 'flex-col space-x-0',
        className,
      )}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<StepProps>(child)) {
          return child;
        }

        const { status, size = 'DEFAULT' } = child.props;

        return React.cloneElement(child, {
          index,
          dot,
          status: status || calcStatus(currentIndex, index),
          className: cn(
            direction === 'horizontal' && containerClasses.line,
            direction === 'vertical' && containerClasses.verticalLine.base,
            direction === 'vertical' &&
              (dot
                ? containerClasses.verticalLine.left.dot[size]
                : containerClasses.verticalLine.left.noDot[size]),
          ),
          circleClassName: cn(
            dot && direction === 'vertical' && 'mt-1.5',
            dotClassName,
          ),
          contentClassName: cn(
            direction === 'vertical' && contentClasses.base,
            contentClassName,
          ),
          titleClassName,
          descriptionClassName,
        });
      })}
    </div>
  );
}

Stepper.displayName = 'Stepper';
