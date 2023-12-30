import React from 'react';
import { Step, type StepProps } from './step';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const containerClasses = {
  base: 'flex-col space-y-2',
  line: '[&>.rizzui-step-line]:hidden',
  verticalLine: {
    base: '[&>.rizzui-step-line]:h-full [&>.rizzui-step-line]:w-px min-h-[100px] last:min-h-0',
    left: {
      noDot: {
        sm: '[&>.rizzui-step-line]:left-3 rtl:[&>.rizzui-step-line]:right-3',
        md: '[&>.rizzui-step-line]:left-3.5 rtl:[&>.rizzui-step-line]:right-3.5',
        lg: '[&>.rizzui-step-line]:left-4 rtl:[&>.rizzui-step-line]:right-4',
      },
      dot: {
        sm: '[&>.rizzui-step-line]:left-[5px] rtl:[&>.rizzui-step-line]:right-[5px]',
        md: '[&>.rizzui-step-line]:left-2 rtl:[&>.rizzui-step-line]:right-2',
        lg: '[&>.rizzui-step-line]:left-2.5 rtl:[&>.rizzui-step-line]:right-2.5',
      },
    },
  },
};

const contentClasses = {
  base: '[&>.rizzui-step-title]:justify-start [&>.rizzui-step-title>span]:hidden',
  containerDesc:
    '[&>.rizzui-step-description]:-translate-x-6 rtl:[&>.rizzui-step-description]:translate-x-6 -ml-2 rtl:[&>.rizzui-step-title>h2]:mr-0',
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
        className
      )}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<StepProps>(child)) {
          return child;
        }

        const { status, size = 'md' } = child.props;

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
                : containerClasses.verticalLine.left.noDot[size])
          ),
          circleClassName: cn(
            dot && direction === 'vertical' && 'mt-1.5',
            dotClassName
          ),
          contentClassName: cn(
            direction === 'vertical' && contentClasses.base,
            contentClassName
          ),
          titleClassName,
          descriptionClassName,
        });
      })}
    </div>
  );
}

Stepper.Step = Step;

Stepper.displayName = 'Stepper';
