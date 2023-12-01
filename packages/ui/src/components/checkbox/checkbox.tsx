import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { CheckmarkIcon } from '../../icons/checkmark';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const checkboxLabelStyles = {
  weight: labelStyles.weight,
  size: labelStyles.size,
  margin: {
    left: {
      sm: 'me-1.5',
      md: 'me-2',
      lg: 'me-2.5',
      xl: 'me-3',
    },
    right: {
      sm: 'ms-1.5',
      md: 'ms-2',
      lg: 'ms-2.5',
      xl: 'ms-3',
    },
  },
};

const checkboxStyles = {
  base: 'peer checked:bg-none transition duration-200 ease-in-out',
  disabled: 'disabled:bg-gray-100 disabled:border-gray-200',
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
  activeIcon:
    'peer-checked:opacity-100 absolute opacity-0 top-0 left-0 text-white',
  variant: {
    outline:
      'bg-transparent border border-gray-200 ring-[0.6px] ring-gray-200 focus:ring-gray-200 checked:!bg-primary checked:!border-primary hover:enabled:border-primary',
    flat: 'border-0 bg-gray-200/70 hover:enabled:bg-gray-200 focus:ring-gray-200 checked:!bg-primary',
  },
};

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The variants of the component are: */
  variant?: keyof typeof checkboxStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof checkboxStyles.size;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** The rounded variants are: */
  rounded?: keyof typeof checkboxStyles.rounded;
  /** Available directions of the label are: */
  labelPlacement?: keyof typeof checkboxLabelStyles.margin;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Use iconClassName prop to apply some additonal style for check mark icon */
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
}

/**
 * A basic widget for getting the user input of checkbox. Here is the API documentation of the Checkbox component.
 * And the rest of the props of Checkbox are the same as the original html input field.
 * You can use props like `value`, `disabled`, `onChange`, `onFocus`, `onBlur` etc.
 */
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
      className,
      ...checkboxProps
    },
    ref,
  ) => (
    <div
      className={cn(makeClassName(`checkbox-root`), 'flex flex-col', className)}
    >
      <label
        className={cn(
          makeClassName(`checkbox-container`),
          'flex flex-row items-center cursor-pointer',
          disabled && 'cursor-not-allowed',
        )}
      >
        <span className="relative leading-none">
          <input
            type="checkbox"
            ref={ref}
            disabled={disabled}
            className={cn(
              makeClassName(`checkbox-input`),
              checkboxStyles.base,
              checkboxStyles.disabled,
              checkboxStyles.size[size],
              checkboxStyles.rounded[rounded],
              checkboxStyles.variant[variant],
              inputClassName,
            )}
            {...checkboxProps}
          />
          <CheckmarkIcon
            className={cn(
              makeClassName(`checkbox-icon`),
              checkboxStyles.activeIcon,
              checkboxStyles.size[size],
              size === 'sm' && 'top-0.5',
              iconClassName,
            )}
          />
        </span>

        {label ? (
          <span
            className={cn(
              makeClassName(`checkbox-label`),
              checkboxLabelStyles.size[size],
              checkboxLabelStyles.weight[labelWeight],
              checkboxLabelStyles.margin[labelPlacement][size],
              labelPlacement === 'left' && 'order-first',
              'mb-0',
              labelClassName,
            )}
          >
            {label}
          </span>
        ) : null}
      </label>

      {!error && helperText ? (
        <FieldHelperText
          size={size}
          className={cn(makeClassName(`checkbox-helper-text`), helperClassName)}
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
  ),
);

Checkbox.displayName = 'Checkbox';
