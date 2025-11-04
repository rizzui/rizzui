import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
  type HTMLAttributes,
} from 'react';
import { Step } from './step';
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

type StepperContextType = {
  currentIndex: number;
  direction: 'horizontal' | 'vertical';
  dot: boolean;
  dotClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  registerStep: (id: string) => number;
  getStepClassName: (
    size: keyof typeof containerClasses.verticalLine.left.noDot
  ) => string;
  getCircleClassName: () => string;
  getContentClassName: () => string;
};

const StepperContext = createContext<StepperContextType | null>(null);

export function useStepper() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a Stepper component');
  }
  return context;
}

export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  currentIndex?: number;
  direction?: 'horizontal' | 'vertical';
  dot?: boolean;
  children: ReactNode;
  dotClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

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
  const stepRegistryRef = useRef<Map<string, number>>(new Map());
  const stepOrderRef = useRef<string[]>([]);

  // Clear registry on each render
  stepRegistryRef.current.clear();
  stepOrderRef.current = [];

  const registerStep = (id: string) => {
    // Check if this step is already registered in this render
    if (!stepRegistryRef.current.has(id)) {
      const index = stepOrderRef.current.length;
      stepOrderRef.current.push(id);
      stepRegistryRef.current.set(id, index);
      return index;
    }
    return stepRegistryRef.current.get(id)!;
  };

  const getStepClassName = (
    size: keyof typeof containerClasses.verticalLine.left.noDot
  ) => {
    return cn(
      direction === 'horizontal' && containerClasses.line,
      direction === 'vertical' && containerClasses.verticalLine.base,
      direction === 'vertical' &&
        (dot
          ? containerClasses.verticalLine.left.dot[size]
          : containerClasses.verticalLine.left.noDot[size])
    );
  };

  const getCircleClassName = () => {
    return cn(dot && direction === 'vertical' && 'mt-1.5', dotClassName);
  };

  const getContentClassName = () => {
    return cn(
      direction === 'vertical' && contentClasses.base,
      contentClassName
    );
  };

  return (
    <StepperContext.Provider
      value={{
        currentIndex,
        direction,
        dot,
        dotClassName,
        contentClassName,
        titleClassName,
        descriptionClassName,
        registerStep,
        getStepClassName,
        getCircleClassName,
        getContentClassName,
      }}
    >
      <div
        className={cn(
          makeClassName(`stepper-root`),
          'flex justify-between space-x-4 rtl:space-x-0',
          direction === 'vertical' && 'flex-col space-x-0',
          className
        )}
      >
        {children}
      </div>
    </StepperContext.Provider>
  );
}

Stepper.Step = Step;

Stepper.displayName = 'Stepper';
