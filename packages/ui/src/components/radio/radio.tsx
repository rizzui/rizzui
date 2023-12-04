import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const radioLabelStyles = {
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

const radioStyles = {
  base: 'disabled:bg-gray-50 disabled:border-gray-200 ring-[0.6px] focus:ring-gray-200 focus:ring-offset-background text-primary dark:text-primary-foreground',
  size: {
    sm: 'h-5 w-5',
    md: 'h-6 w-6',
    lg: 'h-7 w-7',
    xl: 'h-8 w-8',
  },
  variant: {
    outline:
      'bg-transparent border border-gray-200 ring-gray-200 checked:!bg-gray-primary checked:!border-primary hover:enabled:border-primary',
    flat: 'border-0 bg-gray-200/70 ring-gray-200/70 hover:enabled:bg-gray-200/90 checked:!bg-primary',
  },
};

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The variants of the component are: */
  variant?: keyof typeof radioStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof radioStyles.size;
  /** Available directions of the label are: */
  labelPlacement?: keyof typeof radioLabelStyles.margin;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Use className prop to apply style for entire component */
  className?: string;
  /** Use labelClassName prop to apply some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input filed extra style */
  inputClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
}

/**
 * A basic widget for getting the user input of radio. Here is the API documentation of the Radio component.
 * And the rest of the props of Checkbox are the same as the original html input field.
 * You can use props like `value`, `disabled`, `onChange`, `onFocus`, `onBlur` etc.
 */

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      labelPlacement = 'right',
      labelWeight = 'medium',
      label,
      disabled,
      error,
      helperText,
      className,
      labelClassName,
      inputClassName,
      errorClassName,
      helperClassName,
      ...radioProps
    },
    ref,
  ) => (
    <div
      className={cn(makeClassName(`radio-root`), 'flex flex-col', className)}
    >
      <label
        className={cn(
          makeClassName(`radio-container`),
          'flex flex-row items-center cursor-pointer',
          disabled && 'cursor-not-allowed',
        )}
      >
        <input
          type="radio"
          ref={ref}
          disabled={disabled}
          className={cn(
            makeClassName(`radio-field`),
            radioStyles.base,
            radioStyles.size[size],
            radioStyles.variant[variant],
            inputClassName,
          )}
          {...radioProps}
        />

        {label ? (
          <span
            className={cn(
              makeClassName(`radio-label`),
              radioLabelStyles.size[size],
              radioLabelStyles.weight[labelWeight],
              radioLabelStyles.margin[labelPlacement][size],
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
          className={cn(makeClassName(`radio-helper-text`), helperClassName)}
        >
          {helperText}
        </FieldHelperText>
      ) : null}

      {error ? (
        <FieldError
          size={size}
          error={error}
          className={cn(makeClassName(`radio-error-text`), errorClassName)}
        />
      ) : null}
    </div>
  ),
);

Radio.displayName = 'Radio';
