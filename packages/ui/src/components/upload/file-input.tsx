import React, { forwardRef, useCallback } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';
import { labelStyles } from '../../lib/label-size';
import { useInteractiveEvent } from '../../lib/use-interactive-event';

const fileInputStyles = {
  base: 'flex items-center peer w-full transition duration-200',
  disabled:
    '!bg-muted/70 cursor-not-allowed !border-muted !text-muted-foreground',
  error: '!border-red hover:!border-red focus:!border-red focus:!ring-red',
  size: {
    sm: 'pr-2 py-1 text-xs h-8 leading-[32px] pl-[1px]',
    md: 'pr-3.5 py-2 text-sm h-10 leading-[40px] pl-[1px]',
    lg: 'pr-4 py-2 text-base h-12 leading-[48px] pl-[1px]',
    xl: 'pr-5 py-2.5 text-base h-14 leading-[56px] pl-0.5',
  },
  rounded: roundedStyles,
  variant: {
    flat: '[&.is-focus]:ring-2 [&.is-focus]:bg-transparent border-0 [&_input::placeholder]:opacity-80 bg-primary-lighter/70 [&.is-focus]:ring-primary/30 text-primary-dark',
    outline:
      'bg-transparent [&.is-focus]:ring-[0.8px] ring-[0.6px] ring-muted border border-muted [&_input::placeholder]:text-gray-500 hover:border-primary [&.is-focus]:border-primary [&.is-focus]:ring-primary',
    text: 'border-0 [&.is-focus]:ring-2 bg-transparent [&_input::placeholder]:opacity-70 hover:text-primary-dark [&.is-focus]:ring-primary/30 text-primary',
  },
};

const fileButtonStyles = {
  base: '[&::file-selector-button]:inline-flex [&::file-selector-button]:font-medium [&::file-selector-button]:leading-none [&::file-selector-button]:items-center [&::file-selector-button]:justify-center [&::file-selector-button]:border-0 [&::file-selector-button]:focus-visible:ring-2 [&::file-selector-button]:focus-visible:ring-opacity-50',
  disabled:
    '[&::file-selector-button]:bg-muted-foreground [&::file-selector-button]:text-foreground [&::file-selector-button]:dark:text-muted',
  size: {
    sm: '[&::file-selector-button]:h-7 [&::file-selector-button]:px-2.5',
    md: '[&::file-selector-button]:h-9 [&::file-selector-button]:px-3.5',
    lg: '[&::file-selector-button]:h-11 [&::file-selector-button]:px-4',
    xl: '[&::file-selector-button]:h-12 [&::file-selector-button]:px-5',
  },
  rounded: {
    none: '',
    sm: '[&::file-selector-button]:rounded-sm',
    md: '[&::file-selector-button]:rounded',
    lg: '[&::file-selector-button]:rounded-md',
    pill: '[&::file-selector-button]:rounded-full',
  },
  color:
    '[&::file-selector-button]:bg-primary [&::file-selector-button]:hover:enabled:bg-primary-dark [&::file-selector-button]:focus-visible:ring-primary/30 [&::file-selector-button]:text-primary-foreground',
};

// actual input field styles
const inputFieldStyles = {
  base: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
  disabled: 'cursor-not-allowed placeholder:text-muted-foreground',
  clearable:
    '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
};

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** The variants of the component are: */
  variant?: keyof typeof fileInputStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof fileInputStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof fileInputStyles.rounded;
  /** Set input placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
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

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      rounded = 'md',
      disabled,
      placeholder,
      label,
      labelWeight = 'medium',
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
    const {
      isFocus,
      isHover,
      handleOnBlur,
      handleOnFocus,
      handleOnMouseEnter,
      handleOnMouseLeave,
    } = useInteractiveEvent({
      readOnly,
      onBlur,
      onFocus,
    });

    const handleOnClear = useCallback(
      (e: any) => {
        e.preventDefault();
        onClear && onClear(e);
      },
      [onClear]
    );

    return (
      <div
        className={cn(
          makeClassName(`file-input-root`),
          'flex flex-col',
          className
        )}
      >
        <label className="block">
          {label ? (
            <span
              className={cn(
                makeClassName(`file-input-label`),
                'block',
                labelStyles.size[size],
                labelStyles.weight[labelWeight],
                disabled && 'text-muted-foreground',
                labelClassName
              )}
            >
              {label}
            </span>
          ) : null}

          <span
            className={cn(
              makeClassName(`file-input-container`),
              fileInputStyles.base,
              fileInputStyles.size[size],
              fileInputStyles.rounded[rounded],
              fileInputStyles.variant[variant],
              isFocus && 'is-focus', // must have is-focus class based on onFocus event
              disabled && fileInputStyles.disabled,
              error && fileInputStyles.error,
              inputClassName
            )}
            data-focus={isFocus}
            data-hover={isHover}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
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
                makeClassName(`file-input-field`),
                inputFieldStyles.base,
                fileButtonStyles.base,
                fileButtonStyles.color,
                fileButtonStyles.size[size],
                fileButtonStyles.rounded[rounded],
                disabled && [
                  fileButtonStyles.disabled,
                  inputFieldStyles.disabled,
                ],
                clearable && inputFieldStyles.clearable
              )}
              style={{ fontSize: 'inherit' }}
              {...inputProps}
            />

            {clearable && (
              <FieldClearButton size={size} onClick={handleOnClear} />
            )}
          </span>
        </label>

        {!error && helperText ? (
          <FieldHelperText
            size={size}
            className={cn(
              makeClassName(`file-input-helper-text`),
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
            className={cn(
              makeClassName(`file-input-error-text`),
              errorClassName
            )}
          />
        ) : null}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
