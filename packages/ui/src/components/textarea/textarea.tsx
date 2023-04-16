'use client';

import React, { forwardRef, useState, useCallback } from 'react';

import { cn } from '../../lib/cn';
import HelperText from '../field-helper-text';
import ErrorText from '../field-error-text';
import ClearButton from '../field-clear-button';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const textareaClasses = {
  base: 'block focus:outline-none bg-transparent transition duration-200',
  disabled:
    '!bg-gray-100 cursor-not-allowed !border-gray-200 placeholder:text-gray-400',
  clearable:
    '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
  error: '!border-red hover:!border-red focus:!border-red focus:!ring-red',
  size: {
    sm: 'px-2.5 py-1 text-xs',
    DEFAULT: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2 text-base',
    xl: 'px-6 py-2.5 text-base',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  variant: {
    active: {
      base: 'border bg-gray-0 [&.is-focus]:ring-[0.6px] placeholder:opacity-70',
      color: {
        DEFAULT:
          'border-gray-900 [&.is-focus]:border-gray-1000 [&.is-focus]:ring-gray-1000 text-gray-1000',
        primary:
          'border-primary [&.is-focus]:border-primary [&.is-focus]:ring-primary text-primary-dark',
        secondary:
          'border-secondary [&.is-focus]:border-secondary [&.is-focus]:ring-secondary text-secondary-dark',
        danger:
          'border-red [&.is-focus]:border-red [&.is-focus]:ring-red text-red-dark',
        info: 'border-blue [&.is-focus]:border-blue [&.is-focus]:ring-blue text-blue-dark',
        success:
          'border-green [&.is-focus]:border-green [&.is-focus]:ring-green text-green-dark',
        warning:
          'border-orange [&.is-focus]:border-orange-dark [&.is-focus]:ring-orange-dark text-orange-dark',
      },
    },
    flat: {
      base: '[&.is-focus]:ring-2 [&.is-focus]:bg-transparent border-0 placeholder:opacity-80',
      color: {
        DEFAULT:
          'bg-gray-200/70 [&.is-focus]:ring-gray-900/20 text-gray-1000 placeholder:text-gray-600',
        primary:
          'bg-primary-lighter/70 [&.is-focus]:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter/70 [&.is-focus]:ring-secondary/30 text-secondary-dark',
        danger: 'bg-red-lighter/70 [&.is-focus]:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter/70 [&.is-focus]:ring-blue/30 text-blue-dark',
        success:
          'bg-green-lighter/70 [&.is-focus]:ring-green/30 text-green-dark',
        warning:
          'bg-orange-lighter/80 [&.is-focus]:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent [&.is-focus]:ring-[0.6px] border border-gray-300 placeholder:text-gray-500',
      color: {
        DEFAULT:
          'hover:border-gray-1000 [&.is-focus]:border-gray-1000 [&.is-focus]:ring-gray-1000',
        primary:
          'hover:border-primary [&.is-focus]:border-primary [&.is-focus]:ring-primary',
        secondary:
          'hover:border-secondary [&.is-focus]:border-secondary [&.is-focus]:ring-secondary',
        danger:
          'hover:border-red [&.is-focus]:border-red [&.is-focus]:ring-red',
        info: 'hover:border-blue [&.is-focus]:border-blue [&.is-focus]:ring-blue',
        success:
          'hover:border-green [&.is-focus]:border-green [&.is-focus]:ring-green',
        warning:
          'hover:border-orange [&.is-focus]:border-orange [&.is-focus]:ring-orange',
      },
    },
    text: {
      base: 'border-0 [&.is-focus]:ring-2 bg-transparent placeholder:opacity-70',
      color: {
        DEFAULT:
          'hover:text-gray-1000 [&.is-focus]:ring-gray-900/20 placeholder:text-gray-500',
        primary:
          'hover:text-primary-dark [&.is-focus]:ring-primary/30 text-primary',
        secondary:
          'hover:text-secondary-dark [&.is-focus]:ring-secondary/30 text-secondary',
        danger: 'hover:text-red-600 [&.is-focus]:ring-red/30 text-red',
        info: 'hover:text-blue-dark [&.is-focus]:ring-blue/30 text-blue',
        success: 'hover:text-green-dark [&.is-focus]:ring-green/30 text-green',
        warning:
          'hover:text-orange-dark [&.is-focus]:ring-orange/30 text-orange',
      },
    },
  },
};

// clear button spacing based on size
const clearButtonSpacing = {
  base: 'absolute rtl:right-[inherit]',
  size: {
    sm: 'right-2.5 top-1',
    DEFAULT: 'right-4 top-2',
    lg: 'right-5 top-2',
    xl: 'right-6 top-2.5',
  },
};

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  /** Set custom rows */
  rows?: number;
  /** Set custom cols */
  cols?: number;
  /** Set custom max length of character */
  maxLength?: number;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Default value in textarea */
  children?: React.ReactNode;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof labelClasses.size;
  /** The variants of the component are: */
  variant?: keyof typeof textareaClasses.variant;
  /** Change textarea color */
  color?: keyof typeof textareaClasses.variant['active']['color'];
  /** Set field label */
  label?: React.ReactNode;
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** The rounded variants are: */
  rounded?: keyof typeof textareaClasses.rounded;
  /** It is the password visibility toggle icon.  */
  renderCharacterCount?({
    characterCount,
    maxLength,
  }: {
    characterCount?: number;
    maxLength?: number;
  }): React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input filed extra style */
  textareaClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
}

/**
 * A basic widget for getting the user textarea. Here is the API documentation of the Textarea component.
 * And the rest of the props are the same as the original html textarea field.
 * You can use props like `disabled`, `placeholder`, `rows`, `cols`, `maxLength` etc.
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outline',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      color = 'DEFAULT',
      cols,
      rows = 5,
      label,
      error,
      clearable,
      onClear,
      readOnly,
      disabled,
      className,
      labelClassName,
      textareaClassName,
      helperClassName,
      errorClassName,
      helperText,
      onFocus,
      onBlur,
      maxLength,
      placeholder,
      renderCharacterCount,
      ...textareaProps
    },
    ref
  ) => {
    const variantStyle = textareaClasses.variant[variant];
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (readOnly === true) return false;
        setIsFocus((prevState) => !prevState);
        onFocus && onFocus(e);
      },
      [readOnly, onFocus]
    );

    const handleOnBlur = useCallback(
      (e: React.FocusEvent<HTMLTextAreaElement>) => {
        if (readOnly === true) return false;
        setIsFocus(() => false);
        onBlur && onBlur(e);
      },
      [readOnly, onBlur]
    );

    return (
      <div className={cn('flex flex-col', className)}>
        <label className="block">
          {label && (
            <span
              className={cn('block', labelClasses.size[size], labelClassName)}
            >
              {label}
            </span>
          )}

          <div className="relative">
            <textarea
              ref={ref}
              rows={rows}
              disabled={disabled}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              readOnly={readOnly}
              maxLength={maxLength}
              {...(cols && { cols })}
              // placeholder is a required prop for the clearable input component even if the user does not set any
              placeholder={placeholder || 'Screen reader only'}
              className={cn(
                textareaClasses.base,
                textareaClasses.size[size],
                textareaClasses.rounded[rounded],
                variantStyle.base,
                variantStyle.color[color],
                clearable && textareaClasses.clearable,
                // it's important we are using placeholder-shown pseudo class to control input clear icon btn
                !placeholder && 'placeholder:opacity-0',
                isFocus && 'is-focus', // must have is-focus class based on onFocus event
                !cols && 'w-full',
                readOnly && 'focus:ring-0',
                disabled && textareaClasses.disabled,
                error && textareaClasses.error,
                textareaClassName
              )}
              {...textareaProps}
            />
            {clearable && (
              <ClearButton
                size={size}
                onClick={onClear}
                className={cn(
                  clearButtonSpacing.base,
                  clearButtonSpacing.size[size]
                )}
              />
            )}
            {renderCharacterCount &&
              renderCharacterCount({
                characterCount: String(textareaProps?.value).length,
                maxLength,
              })}
          </div>
        </label>

        {!error && helperText && (
          <HelperText size={size} className={helperClassName}>
            {helperText}
          </HelperText>
        )}

        {error && (
          <ErrorText size={size} error={error} className={errorClassName} />
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
