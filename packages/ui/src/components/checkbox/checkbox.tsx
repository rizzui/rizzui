import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { CheckmarkIcon } from '../../icons/checkmark';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const checkbox = tv({
  base: 'peer checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out',
  variants: {
    variant: {
      outline:
        'bg-transparent border border-muted ring-[0.6px] ring-muted focus:ring-muted checked:!bg-primary checked:!border-primary hover:enabled:border-primary',
      flat: 'border-0 bg-muted/70 backdrop-blur hover:enabled:bg-muted focus:ring-muted checked:!bg-primary',
    },
    size: {
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-7 w-7',
      xl: 'h-8 w-8',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded',
      lg: 'rounded-md',
      full: 'rounded-full',
    },
    disabled: {
      true: 'disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
    rounded: 'md',
  },
});

const checkboxLabel = tv({
  base: 'mb-0',
  variants: {
    size: labelStyles.size,
    labelWeight: labelStyles.weight,
    labelPlacement: {
      left: '',
      right: '',
    },
    disabled: {
      true: 'text-muted-foreground',
    },
  },
  compoundVariants: [
    { labelPlacement: 'left', class: 'order-first' },
    { labelPlacement: 'left', size: 'sm', class: 'me-1.5' },
    { labelPlacement: 'left', size: 'md', class: 'me-2' },
    { labelPlacement: 'left', size: 'lg', class: 'me-2.5' },
    { labelPlacement: 'left', size: 'xl', class: 'me-3' },
    { labelPlacement: 'right', size: 'sm', class: 'ms-1.5' },
    { labelPlacement: 'right', size: 'md', class: 'ms-2' },
    { labelPlacement: 'right', size: 'lg', class: 'ms-2.5' },
    { labelPlacement: 'right', size: 'xl', class: 'ms-3' },
  ],
});

const indeterminateIcon = tv({
  base: 'rounded bg-primary-foreground',
  variants: {
    size: {
      sm: 'h-0.5 w-2.5',
      md: 'h-0.5 w-3',
      lg: 'h-[3px] w-3.5',
      xl: 'h-[3px] w-4',
    },
  },
});

type CheckboxVariant = VariantProps<typeof checkbox>;

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The variants of the component are: */
  variant?: CheckboxVariant['variant'];
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: CheckboxVariant['size'];
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** The rounded variants are: */
  rounded?: CheckboxVariant['rounded'];
  /** Available directions of the label are: */
  labelPlacement?: 'left' | 'right';
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Use iconClassName prop to apply some additional style for check mark icon */
  iconClassName?: string;
  /** Use labelClassName prop to apply some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input filed extra style */
  inputClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** Add custom classes to the root of the component */
  className?: string;
  /** This prop is used to determine whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      rounded = 'md',
      labelPlacement = 'right',
      labelWeight = 'medium',
      label,
      disabled,
      error,
      helperText,
      iconClassName,
      labelClassName,
      inputClassName,
      errorClassName,
      helperClassName,
      indeterminate,
      className,
      ...checkboxProps
    },
    ref
  ) => (
    <div
      className={cn(makeClassName(`checkbox-root`), 'flex flex-col', className)}
    >
      <label
        className={cn(
          makeClassName(`checkbox-container`),
          'flex cursor-pointer flex-row items-center',
          disabled && 'cursor-not-allowed'
        )}
      >
        <span className="relative leading-none">
          <input
            type="checkbox"
            ref={ref}
            disabled={disabled}
            className={checkbox({
              variant,
              size,
              rounded,
              disabled,
              className: inputClassName,
            })}
            {...checkboxProps}
          />

          {indeterminate && (
            <span
              className={cn(
                'absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-black peer-checked:hidden',
                checkbox({ rounded })
              )}
            >
              <span className={indeterminateIcon({ size })} />
            </span>
          )}

          <CheckmarkIcon
            className={cn(
              makeClassName(`checkbox-icon`),
              'peer-checked:opacity-100 absolute opacity-0 top-0 left-0 text-primary-foreground',
              checkbox({ size }),
              size === 'sm' && 'top-0',
              iconClassName
            )}
          />
        </span>

        {label ? (
          <span
            className={checkboxLabel({
              size,
              labelWeight,
              labelPlacement,
              disabled,
              className: labelClassName,
            })}
          >
            {label}
          </span>
        ) : null}
      </label>

      {!error && helperText ? (
        <FieldHelperText
          size={size}
          className={cn(
            makeClassName(`checkbox-helper-text`),
            disabled && 'text-muted-foreground',
            helperClassName
          )}
        >
          {helperText}
        </FieldHelperText>
      ) : null}

      {error ? (
        <FieldError
          size={size}
          error={error}
          className={cn(makeClassName(`checkbox-error-text`), errorClassName)}
        />
      ) : null}
    </div>
  )
);

Checkbox.displayName = 'Checkbox';
