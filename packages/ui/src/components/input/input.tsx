import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';
import { labelStyles } from '../../lib/label-size';
import { useInteractiveEvent } from '../../lib/use-interactive-event';

const inputStyles = {
  base: 'flex items-center peer w-full transition duration-200 border [&.is-focus]:ring-[0.8px] ring-[0.6px] [&.is-hover]:border-primary [&.is-focus]:border-primary [&.is-focus]:ring-primary [&_input::placeholder]:opacity-60',
  disabled: '!bg-muted/70 cursor-not-allowed !border-muted',
  error:
    '!border-red [&.is-hover]:!border-red [&.is-focus]:!border-red [&.is-focus]:!ring-red !bg-transparent',
  size: {
    sm: 'px-2 py-1 text-xs h-8 leading-[32px]',
    md: 'px-3.5 py-2 text-sm h-10 leading-[40px]',
    lg: 'px-4 py-2 text-base h-12 leading-[48px]',
    xl: 'px-5 py-2.5 text-base h-14 leading-[56px]',
  },
  rounded: roundedStyles,
  variant: {
    text: 'border-transparent ring-transparent bg-transparent',
    flat: 'border-0 ring-muted/70 [&.is-focus]:ring-[1.8px] [&.is-focus]:bg-transparent bg-muted/70',
    outline: 'border border-muted ring-muted bg-transparent',
  },
};

// actual input field styles
const inputFieldStyles = {
  base: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
  reset:
    '[&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
  disabled: 'cursor-not-allowed placeholder:text-muted-foreground',
  clearable:
    '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
  prefix: {
    size: {
      sm: 'ps-1.5',
      md: 'ps-2.5',
      lg: 'ps-3.5',
      xl: 'ps-4',
    },
  },
  suffix: {
    size: {
      sm: 'pe-1.5',
      md: 'pe-2.5',
      lg: 'pe-3.5',
      xl: 'pe-4',
    },
  },
};

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'prefix' | 'suffix'
  > {
  /** This Input component only support these types */
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'tel'
    | 'search'
    | 'url'
    | 'time'
    | 'date'
    | 'week'
    | 'month'
    | 'datetime-local';
  /** The variants of the component are: */
  variant?: keyof typeof inputStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof inputStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputStyles.rounded;
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
  /** The prefix is design for adding any icon or text on the Input field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** The suffix is design for adding any icon or text on the Input field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
  suffix?: React.ReactNode;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Override default CSS style of label */
  labelClassName?: string;
  /** Override default CSS style of input */
  inputClassName?: string;
  /** Override default CSS style of prefix */
  prefixClassName?: string;
  /** Override default CSS style of suffix */
  suffixClassName?: string;
  /** Override default CSS style of helperText */
  helperClassName?: string;
  /** Override default CSS style of error message */
  errorClassName?: string;
  /** Add custom classes to the root of the component */
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
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
      prefix,
      suffix,
      readOnly,
      helperText,
      labelClassName,
      inputClassName,
      errorClassName,
      helperClassName,
      prefixClassName,
      suffixClassName,
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

    return (
      <div
        className={cn(makeClassName(`input-root`), 'flex flex-col', className)}
      >
        <label className="block">
          {label ? (
            <span
              className={cn(
                makeClassName(`input-label`),
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
              makeClassName(`input-container`),
              inputStyles.base,
              inputStyles.size[size],
              inputStyles.rounded[rounded],
              inputStyles.variant[variant],
              isHover && 'is-hover', // must have is-hover class based on mouse enter
              isFocus && 'is-focus', // must have is-focus class based on onFocus event
              disabled && inputStyles.disabled,
              error && inputStyles.error,
              inputClassName
            )}
            data-focus={isFocus}
            data-hover={isHover}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            {prefix ? (
              <span
                className={cn(
                  makeClassName(`input-prefix`),
                  'whitespace-nowrap leading-normal',
                  prefixClassName
                )}
              >
                {prefix}
              </span>
            ) : null}

            <input
              ref={ref}
              type={type}
              disabled={disabled}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              readOnly={readOnly}
              spellCheck="false"
              // placeholder is a required prop for the clearable input component even if the user does not set any
              placeholder={placeholder || 'Screen reader only'}
              className={cn(
                makeClassName(`input-field`),
                inputFieldStyles.base,
                inputFieldStyles.reset,
                // it's important we are using placeholder-shown pseudo class to control input clear icon btn
                !placeholder && 'placeholder:opacity-0',
                disabled && inputFieldStyles.disabled,
                clearable && inputFieldStyles.clearable,
                prefix && inputFieldStyles.prefix.size[size],
                suffix && inputFieldStyles.suffix.size[size]
              )}
              style={{ fontSize: 'inherit' }}
              {...inputProps}
            />

            {clearable ? (
              <FieldClearButton
                size={size}
                onClick={onClear}
                hasSuffix={Boolean(suffix)}
              />
            ) : null}

            {suffix ? (
              <span
                className={cn(
                  makeClassName(`input-suffix`),
                  'whitespace-nowrap leading-normal',
                  suffixClassName
                )}
              >
                {suffix}
              </span>
            ) : null}
          </span>
        </label>

        {!error && helperText ? (
          <FieldHelperText
            size={size}
            className={cn(
              makeClassName(`input-helper-text`),
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
            className={cn(makeClassName(`input-error-text`), errorClassName)}
          />
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
