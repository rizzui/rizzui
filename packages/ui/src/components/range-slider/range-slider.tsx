import Slider from 'rc-slider';
import type { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { cn } from '../../lib/cn';

const classes = {
  base: '[&>.rc-slider-rail]:bg-gray-200 [&>.rc-slider-handle]:opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4',
  size: {
    sm: '[&>.rc-slider-rail]:h-0.5 [&>.rc-slider-track]:h-0.5 [&>.rc-slider-handle]:h-3 [&>.rc-slider-handle]:w-3 [&>.rc-slider-handle]:border-[3px]',
    DEFAULT:
      '[&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5',
    lg: '[&>.rc-slider-rail]:h-2 [&>.rc-slider-track]:h-2 [&>.rc-slider-handle]:h-5 [&>.rc-slider-handle]:w-5 [&>.rc-slider-handle]:border-[5px] [&>.rc-slider-handle]:-mt-1.5',
    xl: '[&>.rc-slider-rail]:h-3 [&>.rc-slider-track]:h-3 [&>.rc-slider-handle]:h-6 [&>.rc-slider-handle]:w-6 [&>.rc-slider-handle]:border-[6px] [&>.rc-slider-handle]:-mt-1.5',
  },
  color: {
    DEFAULT:
      '[&>.rc-slider-track]:bg-gray-900 [&>.rc-slider-handle]:border-gray-1000 [&>.rc-slider-handle]:hover:border-gray-1000 [&>.rc-slider-handle-dragging]:!border-gray-1000 [&>.rc-slider-handle-dragging]:ring-gray-400/60 [&>.rc-slider-step>.rc-slider-dot-active]:border-gray-1000',
    primary:
      '[&>.rc-slider-track]:bg-primary [&>.rc-slider-handle]:border-primary-dark [&>.rc-slider-handle]:hover:border-primary-dark [&>.rc-slider-handle-dragging]:!border-primary-dark [&>.rc-slider-handle-dragging]:ring-primary-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-primary-dark',
    secondary:
      '[&>.rc-slider-track]:bg-secondary [&>.rc-slider-handle]:border-secondary-dark [&>.rc-slider-handle]:hover:border-secondary-dark [&>.rc-slider-handle-dragging]:!border-secondary-dark [&>.rc-slider-handle-dragging]:ring-secondary-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-secondary-dark',
    danger:
      '[&>.rc-slider-track]:bg-red [&>.rc-slider-handle]:border-red-dark [&>.rc-slider-handle]:hover:border-red-dark [&>.rc-slider-handle-dragging]:!border-red-dark [&>.rc-slider-handle-dragging]:ring-red-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-red-dark',
    info: '[&>.rc-slider-track]:bg-blue [&>.rc-slider-handle]:border-blue-dark [&>.rc-slider-handle]:hover:border-blue-dark [&>.rc-slider-handle-dragging]:!border-blue-dark [&>.rc-slider-handle-dragging]:ring-blue-light/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-blue-dark',
    success:
      '[&>.rc-slider-track]:bg-green [&>.rc-slider-handle]:border-green-dark [&>.rc-slider-handle]:hover:border-green-dark [&>.rc-slider-handle-dragging]:!border-green-dark [&>.rc-slider-handle-dragging]:ring-green-light/50 [&>.rc-slider-step>.rc-slider-dot-active]:border-green-dark',
    warning:
      '[&>.rc-slider-track]:bg-orange [&>.rc-slider-handle]:border-orange-dark [&>.rc-slider-handle]:hover:border-orange-dark [&>.rc-slider-handle-dragging]:!border-orange-dark [&>.rc-slider-handle-dragging]:ring-orange-light/60 [&>.rc-slider-step>.rc-slider-dot-active]:border-orange-dark',
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
  size = 'DEFAULT',
  color = 'DEFAULT',
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

RangeSlider.displayName = 'RangeSlider';
