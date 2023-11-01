import React, { forwardRef, useState, useCallback } from 'react';
import { PasswordToggleIcon } from './password-toggle-icon';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { makeClassName } from '../../lib/make-class-name';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const inputClasses = {
  base: 'flex items-center peer w-full transition duration-200',
  disabled: '!bg-gray-100 cursor-not-allowed !border-gray-200',
  error: '!border-red hover:!border-red focus:!border-red focus:!ring-red',
  size: {
    sm: 'px-2 py-1 text-xs h-8 leading-[32px]',
    DEFAULT: 'px-3.5 py-2 text-sm h-10 leading-[40px]',
    lg: 'px-4 py-2 text-base h-12 leading-[48px]',
    xl: 'px-5 py-2.5 text-base h-14 leading-[56px]',
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
      base: 'border bg-gray-50 [&.is-focus]:ring-[0.6px] [&_input::placeholder]:opacity-70',
      color: {
        DEFAULT:
          'border-gray-900 [&.is-focus]:border-gray-950 [&.is-focus]:ring-gray-950 text-gray-950',
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
          'bg-gray-200/70 [&.is-focus]:ring-gray-900/20 text-gray-950 [&_input::placeholder]:text-gray-600',
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
          'hover:border-gray-950 [&.is-focus]:border-gray-950 [&.is-focus]:ring-gray-950',
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
          'hover:text-gray-950 [&.is-focus]:ring-gray-900/20 [&_input::placeholder]:text-gray-500',
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

// actual input field styles
const inputFieldClasses = {
  base: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden',
  disabled: 'cursor-not-allowed placeholder:text-gray-400',
  clearable:
    '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
  prefixStartPadding: {
    base: 'rtl:pl-[inherit]',
    size: {
      sm: 'pl-1.5 rtl:pr-1.5',
      DEFAULT: 'pl-2.5 rtl:pr-2.5',
      lg: 'pl-3.5 rtl:pr-3.5',
      xl: 'pl-4 rtl:pr-4',
    },
  },
  suffixEndPadding: {
    base: 'rtl:pr-[inherit]',
    size: {
      sm: 'pr-1.5 rtl:pl-1.5',
      DEFAULT: 'pr-2.5 rtl:pl-2.5',
      lg: 'pr-3.5 rtl:pl-3.5',
      xl: 'pr-4 rtl:pl-4',
    },
  },
};

export interface PasswordProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'prefix'
  > {
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof inputClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputClasses.rounded;
  /** Change input color */
  color?: keyof (typeof inputClasses.variant)['active']['color'];
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
  /** The prefix is design for adding any icon or text on the Input field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** It is the password visibility toggle icon.  */
  visibilityToggleIcon?(visible: boolean): React.ReactNode;
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
  /** Override default CSS style of password show/hide toggle icon */
  visibilityToggleIconClassName?: string;
  /** Override default CSS style of helperText */
  helperClassName?: string;
  /** Override default CSS style of error message */
  errorClassName?: string;
}

/**
 * A basic widget for getting the user input. Here is the API documentation of the Password component.
 * And the rest of the props are the same as the original html input field type password.
 * You can use props like `value`, `disabled`, `placeholder`, `onChange`, `onFocus`, `onBlur` etc.
 */
export const Password = forwardRef<HTMLInputElement, PasswordProps>(
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
      prefix,
      readOnly,
      helperText,
      labelClassName,
      inputClassName,
      errorClassName,
      helperClassName,
      prefixClassName,
      visibilityToggleIcon,
      visibilityToggleIconClassName,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref,
  ) => {
    const variantStyle = inputClasses.variant[variant];
    const [isFocus, setIsFocus] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleOnFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (readOnly === true) return false;
        setIsFocus((prevState) => !prevState);
        onFocus && onFocus(e);
      },
      [readOnly, onFocus],
    );

    const handleOnBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (readOnly === true) return false;
        setIsFocus(() => false);
        onBlur && onBlur(e);
      },
      [readOnly, onBlur],
    );

    return (
      <div
        className={cn(
          makeClassName(`password-root`),
          'flex flex-col',
          className,
        )}
      >
        <label className="block">
          {label && (
            <span
              className={cn(
                makeClassName(`password-label`),
                'block',
                labelClasses.size[size],
                labelClassName,
              )}
            >
              {label}
            </span>
          )}

          <span
            className={cn(
              makeClassName(`password-container`),
              inputClasses.base,
              inputClasses.size[size],
              inputClasses.rounded[rounded],
              variantStyle.base,
              variantStyle.color[color],
              isFocus && 'is-focus', // must have is-focus class based on onFocus event
              disabled && inputClasses.disabled,
              error && inputClasses.error,
              inputClassName,
            )}
          >
            {prefix && (
              <span
                className={cn(
                  makeClassName(`password-prefix`),
                  'whitespace-nowrap leading-normal',
                  prefixClassName,
                )}
              >
                {prefix}
              </span>
            )}
            <input
              ref={ref}
              type={visible ? 'text' : 'password'}
              disabled={disabled}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              readOnly={readOnly}
              spellCheck="false"
              // placeholder is a required prop for the clearable input component even if the user does not set any
              placeholder={placeholder || 'Screen reader only'}
              className={cn(
                makeClassName(`password-field`),
                inputFieldClasses.base,
                // it's important we are using placeholder-shown pseudo class to control input clear icon btn
                !placeholder && 'placeholder:opacity-0',
                disabled && inputFieldClasses.disabled,
                clearable && inputFieldClasses.clearable,
                prefix && inputFieldClasses.prefixStartPadding.size[size],
                visibilityToggleIcon &&
                  inputFieldClasses.suffixEndPadding.size[size],
              )}
              style={{ fontSize: 'inherit' }}
              {...inputProps}
            />

            {clearable && (
              <FieldClearButton size={size} onClick={onClear} hasSuffix />
            )}

            <span
              role="button"
              tabIndex={0}
              className={cn(
                makeClassName(`password-toggle-icon`),
                'whitespace-nowrap leading-normal',
                disabled && 'text-gray-400',
                visibilityToggleIconClassName,
              )}
              onClick={() => {
                if (disabled) return false;
                setVisible((prevState) => !prevState);
              }}
            >
              {visibilityToggleIcon ? (
                visibilityToggleIcon(visible)
              ) : (
                <PasswordToggleIcon isVisible={visible} iconSize={size} />
              )}
            </span>
          </span>
        </label>

        {!error && helperText && (
          <FieldHelperText
            size={size}
            className={cn(
              makeClassName(`password-helper-text`),
              helperClassName,
            )}
          >
            {helperText}
          </FieldHelperText>
        )}

        {error && (
          <FieldError
            size={size}
            error={error}
            className={cn(makeClassName(`password-error-text`), errorClassName)}
          />
        )}
      </div>
    );
  },
);

Password.displayName = 'Password';
