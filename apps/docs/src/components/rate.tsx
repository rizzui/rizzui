import React from 'react';
import RcRate from 'rc-rate';
import type { RateProps as RcRateProps } from 'rc-rate/lib/Rate';
import type { StarProps as RcStarProps } from 'rc-rate/lib/Star';
import { StarIcon } from '@heroicons/react/24/outline';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from 'rizzui/cn';
import { FieldError } from 'rizzui/field-error-text';
import { FieldHelperText } from 'rizzui/field-helper-text';
import { Tooltip } from 'rizzui/tooltip';

const labelStyles = {
  size: {
    sm: 'text-xs mb-1',
    md: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
  },
} as const;

const rate = tv({
  slots: {
    container:
      'flex items-center [&>li]:cursor-pointer [&.rc-rate-disabled>li]:cursor-default [&>li]:relative [&>li]:mr-0.5 rtl:[&>li]:ml-0.5 [&>li]:inline-block text-gray-200 [&>.rc-rate-star-half>div>.rc-rate-star-first]:text-orange [&>.rc-rate-star-full>div]:text-orange',
    character: '[&>svg]:fill-current',
    firstStar:
      '[&>li>div>.rc-rate-star-first]:absolute [&>li>div>.rc-rate-star-first]:left-0 rtl:[&>li>div>.rc-rate-star-first]:right-0 [&>li>div>.rc-rate-star-first]:top-0 [&>li>div>.rc-rate-star-first]:w-1/2 [&>li>div>.rc-rate-star-first]:h-full [&>li>div>.rc-rate-star-first]:overflow-hidden',
    label: '',
  },
  variants: {
    size: {
      sm: {
        container: '',
        character: 'h-5 w-5',
        label: labelStyles.size.sm,
      },
      md: {
        container: '',
        character: 'h-6 w-6',
        label: labelStyles.size.md,
      },
      lg: {
        container: '',
        character: 'h-7 w-7',
        label: labelStyles.size.lg,
      },
    },
    disabled: {
      true: {
        container: '',
      },
      false: {
        container:
          '[&>li>div]:transition-all [&>li>div]:duration-300 [&>.rc-rate-star:hover]:scale-110',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    disabled: false,
  },
});

export interface RateProps
  extends Omit<RcRateProps, 'character' | 'className'> {
  /** Set field label */
  label?: React.ReactNode;
  /** The size of the component */
  size?: VariantProps<typeof rate>['size'];
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
  /** Ref for the rate component */
  ref?: React.Ref<any>;
}

const Rate = ({
  size = 'md',
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
  ref,
  ...props
}: RateProps) => {
  const {
    container: containerClass,
    character: characterClass,
    firstStar: firstStarClass,
    label: labelClass,
  } = rate({
    size,
    disabled,
  });

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
    <div className={cn('rizzui-rate', className)}>
      {label && (
        <label
          className={cn(
            'block font-medium',
            labelClass(),
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <RcRate
        ref={ref}
        disabled={disabled}
        characterRender={characterRender}
        character={({ index }: RcStarProps) => (
          <div
            className={cn(
              characterClass(),
              characterClassName
            )}
          >
            {Array.isArray(character)
              ? character[index as number]
              : character}
          </div>
        )}
        className={cn(
          containerClass(),
          firstStarClass(),
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
};

Rate.displayName = 'Rate';
export default Rate;
