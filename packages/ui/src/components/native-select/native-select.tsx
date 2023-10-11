import React, { forwardRef, useState, useCallback } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { ChevronUpDownIcon } from '../../icons/chevron-up-down';
import { makeClassName } from '../../lib/make-class-name';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const selectClasses = {
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
      base: 'border bg-gray-0 [&.is-focus]:ring-[0.6px]',
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
      base: '[&.is-focus]:ring-2 [&.is-focus]:bg-transparent border-0',
      color: {
        DEFAULT: 'bg-gray-200/70 [&.is-focus]:ring-gray-900/20 text-gray-1000',
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
      base: 'bg-transparent [&.is-focus]:ring-[0.6px] border border-gray-300',
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
      base: 'border-0 [&.is-focus]:ring-2 bg-transparent',
      color: {
        DEFAULT: 'hover:text-gray-1000 [&.is-focus]:ring-gray-900/20',
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

// actual select field styles
const selectFieldClasses = {
  base: 'w-full text-inherit border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
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

export type OptionType = {
  value: string;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  [key: string]: any;
};

export interface NativeSelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'multiple' | 'prefix' | 'suffix'
  > {
  /** Options for select */
  options: (string | OptionType)[];
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set select placeholder text */
  placeholder?: string;
  /** The size of the component. `"sm"` is equivalent to the dense select styling. */
  size?: keyof typeof labelClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof selectClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof selectClasses.variant;
  /** Change select color */
  color?: keyof (typeof selectClasses.variant)['outline']['color'];
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
  suffix?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Add custom classes for container */
  className?: string;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for select */
  selectClassName?: string;
  /** Override default CSS style of prefix */
  prefixClassName?: string;
  /** Override default CSS style of suffix */
  suffixClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper text message style */
  helperClassName?: string;
}

/**
 * A basic widget for user selection of the options. Here is the API documentation of the Native Select component.
 * And the rest of the props of Native Select are the same as the original html select tag.
 * You can use props like `disabled`, `name` etc.
 */
export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      options,
      disabled = false,
      label,
      placeholder = 'Select...',
      size = 'DEFAULT',
      rounded = 'DEFAULT',
      variant = 'outline',
      color = 'DEFAULT',
      error,
      clearable,
      onClear,
      prefix,
      suffix = <ChevronUpDownIcon className="h-5 w-5" />,
      helperText,
      labelClassName,
      selectClassName,
      errorClassName,
      helperClassName,
      prefixClassName,
      suffixClassName,
      className,
      onFocus,
      onBlur,
      ...selectProps
    },
    ref,
  ) => {
    const variantStyle = selectClasses.variant[variant];
    const [isFocus, setIsFocus] = useState(false);

    const handleOnFocus = useCallback(
      (e: React.FocusEvent<HTMLSelectElement>) => {
        setIsFocus((prevState) => !prevState);
        onFocus && onFocus(e);
      },
      [onFocus],
    );

    const handleOnBlur = useCallback(
      (e: React.FocusEvent<HTMLSelectElement>) => {
        setIsFocus(() => false);
        onBlur && onBlur(e);
      },
      [onBlur],
    );

    const formattedOptions = options.map((item) =>
      typeof item === 'string' ? { label: item, value: item } : item,
    );

    return (
      <div
        className={cn(
          makeClassName(`native-select-root`),
          'flex flex-col',
          className,
        )}
      >
        <label className="block">
          {label && (
            <span
              className={cn(
                makeClassName(`native-select-label`),
                'block',
                labelClasses.size[size],
                labelClassName,
              )}
            >
              {label}
            </span>
          )}

          <div
            className={cn(
              makeClassName(`native-select-container`),
              selectClasses.base,
              selectClasses.size[size],
              selectClasses.rounded[rounded],
              variantStyle.base,
              variantStyle.color[color],
              isFocus && 'is-focus', // must have is-focus class based on onFocus event
              disabled && selectClasses.disabled,
              error && selectClasses.error,
              selectClassName,
            )}
          >
            {prefix && (
              <div
                className={cn(
                  makeClassName(`native-select-prefix`),
                  'whitespace-nowrap leading-normal',
                  prefixClassName,
                )}
              >
                {prefix}
              </div>
            )}

            <select
              ref={ref}
              multiple={false}
              disabled={disabled}
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              className={cn(
                makeClassName(`native-select-field`),
                selectFieldClasses.base,
                disabled && selectFieldClasses.disabled,
                clearable && selectFieldClasses.clearable,
                prefix && selectFieldClasses.prefixStartPadding.size[size],
                suffix && selectFieldClasses.suffixEndPadding.size[size],
              )}
              style={{ fontSize: 'inherit' }}
              {...selectProps}
            >
              <option value="" disabled hidden>
                {placeholder}
              </option>
              {formattedOptions.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  {...(item?.disabled && { disabled: item?.disabled })}
                >
                  {item.label}
                </option>
              ))}
            </select>

            {clearable && (
              <FieldClearButton
                size={size}
                onClick={onClear}
                hasSuffix={Boolean(suffix)}
              />
            )}

            {suffix && (
              <div
                className={cn(
                  makeClassName(`native-select-suffix`),
                  'whitespace-nowrap leading-normal',
                  suffixClassName,
                )}
              >
                {suffix}
              </div>
            )}
          </div>
        </label>

        {!error && helperText && (
          <FieldHelperText
            size={size}
            className={cn(
              makeClassName(`native-select-helper-text`),
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
            className={cn(
              makeClassName(`native-select-error-text`),
              errorClassName,
            )}
          />
        )}
      </div>
    );
  },
);

NativeSelect.displayName = 'NativeSelect';
