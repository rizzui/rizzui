import React, { forwardRef } from "react";
import RcRate from "rc-rate";
import type { RateProps as RcRateProps } from "rc-rate/lib/Rate";
import type { StarProps as RcStarProps } from "rc-rate/lib/Star";
import { StarIcon } from "@heroicons/react/24/outline";
import { cn, FieldError, FieldHelperText, Tooltip } from "rizzui";

const labelClasses = {
  size: {
    sm: "text-xs mb-1",
    DEFAULT: "text-sm mb-1.5",
    lg: "text-sm mb-1.5",
    xl: "text-base mb-2",
  },
};

const rateClasses = {
  base: "flex items-center [&>li]:cursor-pointer [&.rc-rate-disabled>li]:cursor-default [&>li]:relative [&>li]:mr-0.5 rtl:[&>li]:ml-0.5 [&>li]:inline-block text-gray-200",
  size: {
    sm: "h-5 w-5",
    DEFAULT: "h-6 w-6",
    lg: "h-7 w-7",
    xl: "h-8 w-8",
  },
  firstStar:
    "[&>li>div>.rc-rate-star-first]:absolute [&>li>div>.rc-rate-star-first]:left-0 rtl:[&>li>div>.rc-rate-star-first]:right-0 [&>li>div>.rc-rate-star-first]:top-0 [&>li>div>.rc-rate-star-first]:w-1/2 [&>li>div>.rc-rate-star-first]:h-full [&>li>div>.rc-rate-star-first]:overflow-hidden",
  color:
    "[&>.rc-rate-star-half>div>.rc-rate-star-first]:text-orange [&>.rc-rate-star-full>div]:text-orange",
  transition:
    "[&>li>div]:transition-all [&>li>div]:duration-300 [&>.rc-rate-star:hover]:scale-110",
};

export interface RateProps
  extends Omit<RcRateProps, "character" | "className"> {
  /** Set field label */
  label?: React.ReactNode;
  /** The size of the component */
  size?: keyof typeof rateClasses.size;
  /** Pass single custom character or an array of custom characters */
  character?: React.ReactNode | Array<React.ReactNode>;
  /** Custom className for custom character */
  characterClassName?: string;
  /** Provide tooltip texts for each character */
  tooltips?: Array<string>;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Use rateClassName prop to do some addition style for the rate field */
  rateClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** Add custom classes into the component wrapper for extra style like spacing */
  className?: string;
}

/** A basic input based rate component for getting user feedback. Here is the API documentation of the Rate component */
/** We are using `rc-rate` package to build Rate component. See their [documentation](https://www.npmjs.com/package/rc-rate) for any query. */
const Rate = forwardRef<any, RateProps>(
  (
    {
      size = "DEFAULT",
      disabled = false,
      character = <StarIcon />,
      label,
      tooltips,
      error,
      helperText,
      labelClassName,
      characterClassName,
      errorClassName,
      helperClassName,
      rateClassName,
      className,
      ...props
    },
    ref
  ) => {
    const characterRender = (
      node: React.ReactElement,
      { index }: RcStarProps
    ) => {
      if (!tooltips) {
        return node;
      }
      return (
        <Tooltip content={tooltips[index as number]} placement="top">
          {node}
        </Tooltip>
      );
    };
    return (
      <div className={cn("aegon-rate", className)}>
        {label && (
          <div className={cn("block", labelClasses.size[size], labelClassName)}>
            {label}
          </div>
        )}
        <RcRate
          ref={ref}
          disabled={disabled}
          characterRender={characterRender}
          character={({ index }: RcStarProps) => (
            <div
              className={cn(
                "[&>svg]:fill-current",
                rateClasses.size[size],
                characterClassName
              )}
            >
              {Array.isArray(character)
                ? character[index as number]
                : character}
            </div>
          )}
          className={cn(
            rateClasses.base,
            rateClasses.firstStar,
            rateClasses.color,
            !disabled && rateClasses.transition,
            rateClassName
          )}
          {...props}
        />
        {!error && helperText && (
          <FieldHelperText tag="div" size={size} className={helperClassName}>
            {helperText}
          </FieldHelperText>
        )}
        {error && (
          <FieldError size={size} error={error} className={errorClassName} />
        )}
      </div>
    );
  }
);

Rate.displayName = "Rate";
export default Rate;
