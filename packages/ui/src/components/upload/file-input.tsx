'use client';

import React, { forwardRef, useState, useCallback } from 'react';

import { cn } from '../../lib/cn';
import ErrorText from '../field-error-text';
import HelperText from '../field-helper-text';
import ClearButton from '../field-clear-button';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const fileInputClasses = {
  base: 'flex items-center peer w-full transition duration-200',
  disabled: '!bg-gray-100 cursor-not-allowed !border-gray-200',
  error: '!border-red hover:!border-red focus:!border-red focus:!ring-red',
  size: {
    sm: 'pr-2 py-1 text-xs h-8 leading-[32px] pl-[1px]',
    DEFAULT: 'pr-3.5 py-2 text-sm h-10 leading-[40px] pl-[1px]',
    lg: 'pr-4 py-2 text-base h-12 leading-[48px] pl-[1px]',
    xl: 'pr-5 py-2.5 text-base h-14 leading-[56px] pl-0.5',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
  variant: {
    active: {
      base: 'border bg-gray-0 [&.is-focus]:ring-[0.6px] [&_input::placeholder]:opacity-70',
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
      base: '[&.is-focus]:ring-2 [&.is-focus]:bg-transparent border-0 [&_input::placeholder]:opacity-80',
      color: {
        DEFAULT:
          'bg-gray-200/70 [&.is-focus]:ring-gray-900/20 text-gray-1000 [&_input::placeholder]:text-gray-600',
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
      base: 'bg-transparent [&.is-focus]:ring-[0.6px] border border-gray-300 [&_input::placeholder]:text-gray-500',
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
      base: 'border-0 [&.is-focus]:ring-2 bg-transparent [&_input::placeholder]:opacity-70',
      color: {
        DEFAULT:
          'hover:text-gray-1000 [&.is-focus]:ring-gray-900/20 [&_input::placeholder]:text-gray-500',
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

const fileButtonClasses = {
  base: '[&::file-selector-button]:inline-flex [&::file-selector-button]:font-medium [&::file-selector-button]:leading-none [&::file-selector-button]:items-center [&::file-selector-button]:justify-center [&::file-selector-button]:border-0 [&::file-selector-button]:focus-visible:ring-2 [&::file-selector-button]:focus-visible:ring-opacity-50',
  size: {
    sm: '[&::file-selector-button]:h-7 [&::file-selector-button]:px-2.5',
    DEFAULT: '[&::file-selector-button]:h-9 [&::file-selector-button]:px-3.5',
    lg: '[&::file-selector-button]:h-11 [&::file-selector-button]:px-4',
    xl: '[&::file-selector-button]:h-12 [&::file-selector-button]:px-5',
  },
  rounded: {
    none: '',
    sm: '[&::file-selector-button]:rounded-sm',
    DEFAULT: '[&::file-selector-button]:rounded',
    lg: '[&::file-selector-button]:rounded-md',
    pill: '[&::file-selector-button]:rounded-full',
  },
  color: {
    DEFAULT:
      '[&::file-selector-button]:bg-gray-900 [&::file-selector-button]:hover:bg-gray-800 [&::file-selector-button]:active:enabled:bg-gray-1000 [&::file-selector-button]:focus-visible:ring-gray-900/30 [&::file-selector-button]:text-gray-0',
    primary:
      '[&::file-selector-button]:bg-primary [&::file-selector-button]:hover:enabled:bg-primary-dark [&::file-selector-button]:focus-visible:ring-primary/30 [&::file-selector-button]:text-white',
    secondary:
      '[&::file-selector-button]:bg-secondary [&::file-selector-button]:hover:enabled:bg-secondary-dark [&::file-selector-button]:focus-visible:ring-secondary/30 [&::file-selector-button]:text-white',
    danger:
      '[&::file-selector-button]:bg-red [&::file-selector-button]:hover:enabled:bg-red-dark [&::file-selector-button]:focus-visible:ring-red/30 [&::file-selector-button]:text-white',
    info: '[&::file-selector-button]:bg-blue [&::file-selector-button]:hover:enabled:bg-blue-dark [&::file-selector-button]:focus-visible:ring-blue/30 [&::file-selector-button]:text-white',
    success:
      '[&::file-selector-button]:bg-green [&::file-selector-button]:hover:enabled:bg-green-dark [&::file-selector-button]:focus-visible:ring-green/30 [&::file-selector-button]:text-white',
    warning:
      '[&::file-selector-button]:bg-orange [&::file-selector-button]:hover:enabled:bg-orange-dark [&::file-selector-button]:focus-visible:ring-orange/30 [&::file-selector-button]:text-white',
  },
};

// actual input field styles
const inputFieldClasses = {
  base: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
  disabled: 'cursor-not-allowed placeholder:text-gray-400',
  clearable:
    '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
};

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** The variants of the component are: */
  variant?: keyof typeof fileInputClasses.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof fileInputClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof fileInputClasses.rounded;
  /** Change input color */
  color?: keyof (typeof fileInputClasses.variant)['active']['color'];
  /** Set input placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Override default CSS style of label */
  labelClassName?: string;
  /** Override default CSS style of input */
  inputClassName?: string;
  /** Override default CSS style of helperText */
  helperClassName?: string;
  /** Override default CSS style of error message */
  errorClassName?: string;
}

/**
 * A basic widget for getting the user input. Here is the API documentation of the Input component.
 * And the rest of the props are the same as the original html input field.
 * You can use props like `value`, `disabled`, `placeholder`, `onChange`, `onFocus`, `onBlur` etc.
 */
const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      color = 'DEFAULT',
      disabled,
      placeholder,
      label,
      error,
      clearable,
      onClear,
      readOnly,
      helperText,
      labelClassName,
      inputClassName,
      errorClassName,
      helperClassName,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const variantStyle = fileInputClasses.variant[variant];
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (readOnly === true) return false;
        setIsFocus((prevState) => !prevState);
        onFocus && onFocus(e);
      },
      [readOnly, onFocus]
    );

    const handleOnBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (readOnly === true) return false;
        setIsFocus(() => false);
        onBlur && onBlur(e);
      },
      [readOnly, onBlur]
    );

    const handleOnClear = useCallback(
      (e: any) => {
        e.preventDefault();
        onClear && onClear(e);
      },
      [onClear]
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

          <div
            className={cn(
              fileInputClasses.base,
              fileInputClasses.size[size],
              fileInputClasses.rounded[rounded],
              variantStyle.base,
              variantStyle.color[color],
              isFocus && 'is-focus', // must have is-focus class based on onFocus event
              disabled && fileInputClasses.disabled,
              error && fileInputClasses.error,
              inputClassName
            )}
          >
            <input
              ref={ref}
              type="file"
              disabled={disabled}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              readOnly={readOnly}
              spellCheck="false"
              className={cn(
                inputFieldClasses.base,
                fileButtonClasses.base,
                fileButtonClasses.size[size],
                fileButtonClasses.color[color],
                fileButtonClasses.rounded[rounded],
                disabled && inputFieldClasses.disabled,
                clearable && inputFieldClasses.clearable
              )}
              style={{ fontSize: 'inherit' }}
              {...inputProps}
            />
            {clearable && <ClearButton size={size} onClick={handleOnClear} />}
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

FileInput.displayName = 'FileInput';
export default FileInput;
