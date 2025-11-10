import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from 'rizzui/cn';
import Slider from 'rc-slider';
import type { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';

const rangeSlider = tv({
  slots: {
    container:
      '[&>.rc-slider-rail]:!bg-gray-200 [&>.rc-slider-handle]:!opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:!ring-4 [&>.rc-slider-track]:!bg-primary [&>.rc-slider-handle]:!border-primary-dark [&>.rc-slider-handle]:hover:!border-primary-dark [&>.rc-slider-handle-dragging]:!border-primary-dark [&>.rc-slider-handle-dragging]:!ring-primary/40 [&>.rc-slider-step>.rc-slider-dot-active]:!border-primary-dark',
  },
  variants: {
    size: {
      sm: {
        container:
          '[&>.rc-slider-rail]:!h-0.5 [&>.rc-slider-track]:!h-0.5 [&>.rc-slider-handle]:!h-3 [&>.rc-slider-handle]:!w-3 [&>.rc-slider-handle]:!border-[3px]',
      },
      md: {
        container:
          '[&>.rc-slider-rail]:!h-1 [&>.rc-slider-track]:!h-1 [&>.rc-slider-handle]:!h-4 [&>.rc-slider-handle]:!w-4 [&>.rc-slider-handle]:!border-4 [&>.rc-slider-handle]:!-mt-1.5',
      },
      lg: {
        container:
          '[&>.rc-slider-rail]:!h-2 [&>.rc-slider-track]:!h-2 [&>.rc-slider-handle]:!h-5 [&>.rc-slider-handle]:!w-5 [&>.rc-slider-handle]:!border-[5px] [&>.rc-slider-handle]:!-mt-1.5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface RangeSliderProps extends SliderProps {
  /** The size of the component */
  size?: VariantProps<typeof rangeSlider>['size'];
}

export default function RangeSlider({
  size = 'md',
  className,
  ...props
}: RangeSliderProps) {
  const { container: containerClass } = rangeSlider({ size });

  return (
    <Slider
      className={cn(containerClass(), className)}
      {...props}
    />
  );
}

RangeSlider.displayName = 'RangeSlider';

export function RangeSliderCounter() {
  const [state, setState] = React.useState({
    min: 200,
    max: 600,
  });

  function handleRangeChange(value: any) {
    setState({
      min: value[0],
      max: value[1],
    });
  }
  function handleMaxChange(max: number) {
    setState({
      ...state,
      max: max || state.min,
    });
  }
  function handleMinChange(min: number) {
    setState({
      ...state,
      min: min || 0,
    });
  }

  return (
    <div>
      <RangeSlider
        range
        min={0}
        max={1000}
        value={[state.min, state.max]}
        onChange={(value: any) => handleRangeChange(value)}
        className={cn('[&>.rc-slider-step]:hidden')}
      />
      <div className="mt-5 flex items-center justify-between gap-5 text-sm font-bold">
        <div className="overflow-hidden rounded-lg max-w-[200px] w-full border border-gray-200 py-2">
          <p className="px-3 pt-1 text-gray-400">Min</p>
          <input
            type="number"
            value={state.min}
            onChange={(e) => handleMinChange(parseInt(e.target.value))}
            className="w-full border-none !bg-gray-lightest p-3 pb-1  text-sm outline-none focus:shadow-none focus:ring-0"
            min={0}
            max={state.max}
            readOnly
          />
        </div>
        <div className="overflow-hidden rounded-lg max-w-[200px] w-full border border-gray-200 py-2">
          <p className="px-3 pt-1 text-gray-400">Max</p>
          <input
            type="number"
            value={state.max}
            onChange={(e) => handleMaxChange(parseInt(e.target.value))}
            className="w-full border-none !bg-gray-lightest p-3 pb-1  text-sm outline-none focus:shadow-none focus:ring-0"
            min={state.min}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
