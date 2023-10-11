import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';

export interface AdvancedRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Add className to style the container */
  className?: string;
  /** Add inputClassName to style the input */
  inputClassName?: string;
  /** Pass content as children */
  children: React.ReactNode;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
}

/**
 * A basic widget for getting the user input of radio with advanced design.
 * Here is the API documentation of the AdvancedRadio component.
 * And the rest of the props of AdvancedRadio are the same as the original html input field.
 * You can use props like `value`, `name`, `disabled` etc.
 */

export const AdvancedRadio = forwardRef<HTMLInputElement, AdvancedRadioProps>(
  (
    {
      children,
      className,
      inputClassName,
      error,
      helperText,
      helperClassName,
      errorClassName,
      ...props
    },
    ref,
  ) => (
    <div className={cn(makeClassName(`advanced-radio-root`))}>
      <label>
        <input
          type="radio"
          ref={ref}
          className={cn('peer hidden', inputClassName)}
          {...props}
        />
        <span
          className={cn('block', makeClassName(`advanced-radio`), className)}
        >
          {children}
        </span>
      </label>

      {!error && helperText && (
        <FieldHelperText
          tag="div"
          size="DEFAULT"
          className={cn(
            makeClassName(`advanced-radio-helper-text`),
            helperClassName,
          )}
        >
          {helperText}
        </FieldHelperText>
      )}

      {error && (
        <FieldError
          size="DEFAULT"
          error={error}
          className={cn(
            makeClassName(`advanced-radio-error-text`),
            errorClassName,
          )}
        />
      )}
    </div>
  ),
);

AdvancedRadio.displayName = 'AdvancedRadio';
