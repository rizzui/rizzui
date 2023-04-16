'use client';

import React, { forwardRef } from 'react';
import cn from '../../lib/cn';
import FieldError from '../field-error-text';
import FieldHelperText from '../field-helper-text';

export interface AdvancedCheckboxProps
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
 * A basic widget for getting the user input of checkbox with advanced design.
 * Here is the API documentation of the AdvancedCheckbox component.
 * And the rest of the props of AdvancedCheckbox are the same as the original html input field.
 * You can use props like `value`, `name`, `disabled` etc.
 */
const AdvancedCheckbox = forwardRef<HTMLInputElement, AdvancedCheckboxProps>(
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
    ref
  ) => (
    <div className="aegon-advanced-checkbox">
      <label className="relative flex items-center">
        <input
          type="checkbox"
          ref={ref}
          className={cn('peer absolute -z-[1] opacity-0', inputClassName)}
          {...props}
        />
        <span className={cn('block', className)}>{children}</span>
      </label>
      {!error && helperText && (
        <FieldHelperText tag="div" size="DEFAULT" className={helperClassName}>
          {helperText}
        </FieldHelperText>
      )}
      {error && (
        <FieldError size="DEFAULT" error={error} className={errorClassName} />
      )}
    </div>
  )
);

AdvancedCheckbox.displayName = 'AdvancedCheckbox';
export default AdvancedCheckbox;
