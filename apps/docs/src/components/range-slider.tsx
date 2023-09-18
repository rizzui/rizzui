import React from "react";
import { cn } from "rizzui";
import Slider from "rc-slider";
import type { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

const classes = {
  base: "[&>.rc-slider-rail]:bg-gray-200 [&>.rc-slider-handle]:opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4",
  size: {
    sm: "[&>.rc-slider-rail]:h-0.5 [&>.rc-slider-track]:h-0.5 [&>.rc-slider-handle]:h-3 [&>.rc-slider-handle]:w-3 [&>.rc-slider-handle]:border-[3px]",
    DEFAULT:
      "[&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5",
    lg: "[&>.rc-slider-rail]:h-2 [&>.rc-slider-track]:h-2 [&>.rc-slider-handle]:h-5 [&>.rc-slider-handle]:w-5 [&>.rc-slider-handle]:border-[5px] [&>.rc-slider-handle]:-mt-1.5",
    xl: "[&>.rc-slider-rail]:h-3 [&>.rc-slider-track]:h-3 [&>.rc-slider-handle]:h-6 [&>.rc-slider-handle]:w-6 [&>.rc-slider-handle]:border-[6px] [&>.rc-slider-handle]:-mt-1.5",
  },
  color: {
    DEFAULT:
      "[&>.rc-slider-track]:bg-gray-900 [&>.rc-slider-handle]:border-gray-1000 [&>.rc-slider-handle]:hover:border-gray-1000 [&>.rc-slider-handle-dragging]:!border-gray-1000 [&>.rc-slider-handle-dragging]:ring-gray-400/60 [&>.rc-slider-step>.rc-slider-dot-active]:border-gray-1000",
    primary:
      "[&>.rc-slider-track]:bg-primary [&>.rc-slider-handle]:border-primary-dark [&>.rc-slider-handle]:hover:border-primary-dark [&>.rc-slider-handle-dragging]:!border-primary-dark [&>.rc-slider-handle-dragging]:ring-primary-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-primary-dark",
    secondary:
      "[&>.rc-slider-track]:bg-secondary [&>.rc-slider-handle]:border-secondary-dark [&>.rc-slider-handle]:hover:border-secondary-dark [&>.rc-slider-handle-dragging]:!border-secondary-dark [&>.rc-slider-handle-dragging]:ring-secondary-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-secondary-dark",
    danger:
      "[&>.rc-slider-track]:bg-red [&>.rc-slider-handle]:border-red-dark [&>.rc-slider-handle]:hover:border-red-dark [&>.rc-slider-handle-dragging]:!border-red-dark [&>.rc-slider-handle-dragging]:ring-red-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-red-dark",
    info: "[&>.rc-slider-track]:bg-blue [&>.rc-slider-handle]:border-blue-dark [&>.rc-slider-handle]:hover:border-blue-dark [&>.rc-slider-handle-dragging]:!border-blue-dark [&>.rc-slider-handle-dragging]:ring-blue-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-blue-dark",
    success:
      "[&>.rc-slider-track]:bg-green [&>.rc-slider-handle]:border-green-dark [&>.rc-slider-handle]:hover:border-green-dark [&>.rc-slider-handle-dragging]:!border-green-dark [&>.rc-slider-handle-dragging]:ring-green-light/50 [&>.rc-slider-step>.rc-slider-dot-active]:border-green-dark",
    warning:
      "[&>.rc-slider-track]:bg-orange [&>.rc-slider-handle]:border-orange-dark [&>.rc-slider-handle]:hover:border-orange-dark [&>.rc-slider-handle-dragging]:!border-orange-dark [&>.rc-slider-handle-dragging]:ring-orange-light/60 [&>.rc-slider-step>.rc-slider-dot-active]:border-orange-dark",
  },
};

export interface RangeSliderProps extends SliderProps {
  /** Sizes of the component are: */
  size?: keyof typeof classes.size;
  /** Change slider color */
  color?: keyof typeof classes.color;
}

/**
 * A slider component enables user to pick any value from a range. We used `rc-slider` package to create Slider component.
 * See their [documentation](https://slider-react-component.vercel.app/) for more info.
 */
export default function RangeSlider({
  size = "DEFAULT",
  color = "DEFAULT",
  className,
  ...props
}: RangeSliderProps) {
  return (
    <Slider
      className={cn(
        classes.base,
        classes.size[size],
        classes.color[color],
        className
      )}
      {...props}
    />
  );
}

RangeSlider.displayName = "RangeSlider";

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
        className={cn("[&>.rc-slider-step]:hidden")}
      />
      <div className="mt-5 flex items-center justify-between gap-5 text-sm font-bold">
        <div className="overflow-hidden rounded-lg max-w-[200px] w-full border border-gray-lighter bg-gray-lightest py-2">
          <p className="px-3 pt-1 text-gray-400">Min</p>
          <input
            type="number"
            value={state.min}
            onChange={(e) => handleMinChange(parseInt(e.target.value))}
            className="w-full border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
            min={0}
            max={state.max}
            readOnly
          />
        </div>
        <div className="overflow-hidden rounded-lg max-w-[200px] w-full border border-gray-lighter bg-gray-lightest py-2">
          <p className="px-3 pt-1 text-gray-400">Max</p>
          <input
            type="number"
            value={state.max}
            onChange={(e) => handleMaxChange(parseInt(e.target.value))}
            className="w-full border-none bg-gray-lightest p-3 pb-1 pt-0 text-sm outline-none focus:shadow-none focus:ring-0"
            min={state.min}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
