'use client';

import React from 'react';

import { cn } from '../../lib/cn';
import FieldError from '../field-error-text';
import FieldHelperText from '../field-helper-text';
import { ChevronUpDownIcon } from '../../icons/chevron-up-down';
import { XCircleIcon } from '../../icons/x-circle';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const selectClasses = {
  base: 'block peer w-full bg-transparent focus:outline-none transition duration-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200',
  error:
    'border-red hover:enabled:!border-red focus:enabled:!border-red focus:!ring-red',
  size: {
    sm: 'px-2.5 py-1 text-xs h-8',
    DEFAULT: 'px-4 py-2 text-sm h-10',
    lg: 'px-5 py-2 text-base h-12',
    xl: 'px-6 py-2.5 text-base h-14',
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
      base: 'border focus:ring-[0.6px] bg-gray-0',
      color: {
        DEFAULT:
          'border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-1000 text-gray-1000',
        primary:
          'border-primary focus:enabled:border-primary focus:ring-primary text-primary-dark',
        secondary:
          'border-secondary focus:enabled:border-secondary focus:ring-secondary text-secondary-dark',
        danger:
          'border-red focus:enabled:border-red focus:ring-red text-red-dark',
        info: 'border-blue focus:enabled:border-blue focus:ring-blue text-blue-dark',
        success:
          'border-green focus:enabled:border-green focus:ring-green text-green-dark',
        warning:
          'border-orange focus:enabled:border-orange-dark/70 focus:ring-orange text-orange-dark',
      },
    },
    flat: {
      base: 'border focus:ring-2 border-0',
      color: {
        DEFAULT:
          'bg-gray-200/70 hover:enabled:bg-gray-200/90 focus:ring-gray-1000/30 text-gray-900',
        primary:
          'bg-primary-lighter/70 hover:enabled:bg-primary-lighter/90 focus:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter/70 hover:enabled:bg-secondary-lighter/90 focus:ring-secondary/30 text-secondary-dark',
        danger:
          'bg-red-lighter/70 hover:enabled:bg-red-lighter/90 focus:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter/70 hover:enabled:bg-blue-lighter/90 focus:ring-blue/30 text-blue-dark',
        success:
          'bg-green-lighter/70 hover:enabled:bg-green-lighter/90 focus:ring-green/30 text-green-dark',
        warning:
          'bg-orange-lighter/80 hover:enabled:bg-orange-lighter/90 focus:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent focus:ring-[0.6px] border border-gray-300',
      color: {
        DEFAULT:
          'hover:enabled:border-gray-1000 focus:enabled:border-gray-1000 focus:ring-gray-1000',
        primary:
          'hover:enabled:border-primary focus:enabled:border-primary focus:ring-primary',
        secondary:
          'hover:enabled:border-secondary focus:enabled:border-secondary focus:ring-secondary',
        danger:
          'hover:enabled:border-red focus:enabled:border-red focus:ring-red',
        info: 'hover:enabled:border-blue focus:enabled:border-blue focus:ring-blue',
        success:
          'hover:enabled:border-green focus:enabled:border-green focus:ring-green',
        warning:
          'hover:enabled:border-orange focus:enabled:border-orange focus:ring-orange',
      },
    },
    text: {
      base: 'focus:ring-2 border-0',
      color: {
        DEFAULT: 'hover:text-gray-1000 focus:ring-gray-1000/30',
        primary: 'hover:text-primary-dark focus:ring-primary/30 text-primary',
        secondary:
          'hover:text-secondary-dark focus:ring-secondary/30 text-secondary',
        danger: 'hover:text-red-600 focus:ring-red/30 text-red',
        info: 'hover:text-blue-dark focus:ring-blue/30 text-blue',
        success: 'hover:text-green-dark focus:ring-green/30 text-green',
        warning: 'hover:text-orange-dark focus:ring-orange/30 text-orange',
      },
    },
  },
};

const multiSelectClasses = {
  size: {
    sm: 'px-2.5 py-1 text-xs h-16',
    DEFAULT: 'px-4 py-2 text-sm h-24',
    lg: 'px-5 py-2 text-base h-32',
    xl: 'px-6 py-2.5 text-base h-36',
  },
};

const selectClassesWithIcon = {
  disabled: 'text-gray-400 cursor-not-allowed hover:text-gray-400',
  size: {
    sm: 'w-5 h-5',
    DEFAULT: 'w-6 h-6',
    lg: 'w-7 h-7',
    xl: 'w-8 h-8',
  },
  padding: {
    base: 'rtl:pr-[inherit]',
    size: {
      sm: 'pr-8 rtl:pl-8',
      DEFAULT: 'pr-10 rtl:pl-10',
      lg: 'pr-12 rtl:pl-12',
      xl: 'pr-14 rtl:pl-14',
    },
  },
  color: {
    DEFAULT: 'hover:text-gray-1000 text-gray-500',
    primary: 'hover:text-primary-dark text-primary',
    secondary: 'hover:text-secondary-dark text-secondary',
    danger: 'hover:text-red-600 text-red',
    info: 'hover:text-blue-dark text-blue',
    success: 'hover:text-green-dark text-green',
    warning: 'hover:text-orange-dark text-orange',
  },
};

export type OptionsType = {
  id: string | number;
  name: string;
  value: string;
  disabled?: boolean;
  [key: string]: any;
};

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Options for select */
  options: OptionsType[];
  /** Currently selected value */
  selectedValue: OptionsType[];
  /** Set newly selected value on change */
  setSelectedValue: React.Dispatch<React.SetStateAction<OptionsType[]>>;
  /** Set multiple values */
  multiple?: boolean;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set input placeholder text */
  placeholder?: string;
  /** The size of the component. `"sm"` is equivalent to the dense select styling. */
  size?: keyof typeof labelClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof selectClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof selectClasses.variant;
  /** Change input color */
  color?: keyof typeof selectClasses.variant['outline']['color'];
  /** add clearable option */
  clearable?: boolean;
  /** The dropDownIcon is design for adding any icon on the Input field's end (it's left icon for the `ltr` and right icon for the `rtl`) */
  dropDownIcon?: React.ReactNode;
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
  /** This prop allows you to customize the icon style */
  iconClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper text message style */
  helperTextClassName?: string;
}

/**
 * A basic widget for user selection of the options. Here is the API documentation of the Native Select component.
 * And the rest of the props of Native Select are the same as the original html select tag.
 * You can use props like `disabled`, `name` etc.
 */

export default function NativeSelect({
  options,
  selectedValue,
  setSelectedValue,
  multiple = false,
  disabled = false,
  label,
  placeholder = 'Select option from below',
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'outline',
  color = 'DEFAULT',
  clearable = false,
  dropDownIcon,
  error,
  helperText,
  className,
  labelClassName,
  selectClassName,
  iconClassName,
  errorClassName,
  helperTextClassName,
  ...props
}: NativeSelectProps) {
  const variantStyle = selectClasses.variant[variant];

  function getSelectedValue() {
    const values = selectedValue.map((v) => v.value);
    return values.length === 0 ? '' : values;
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { selectedOptions } = e.target;
    setSelectedValue(
      options.filter((option) => {
        for (let i = 0; i < selectedOptions.length; i += 1) {
          if (selectedOptions[i].id == option.id) return option; // eslint-disable-line eqeqeq
        }
        return false;
      })
    );
  }

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
          <select
            value={getSelectedValue()}
            onChange={handleChange}
            multiple={multiple}
            disabled={disabled}
            className={cn(
              selectClasses.base,
              multiple
                ? multiSelectClasses.size[size]
                : selectClasses.size[size],
              multiple && rounded === 'pill'
                ? selectClasses.rounded.none
                : selectClasses.rounded[rounded],
              variantStyle.base,
              variantStyle.color[color],
              !multiple && selectClassesWithIcon.padding.size[size],
              error && selectClasses.error,
              selectClassName
            )}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option
                key={option.id}
                id={option.id.toString()}
                value={option.value}
                disabled={option.disabled}
              >
                {option.name}
              </option>
            ))}
          </select>

          {!multiple && (
            <div
              className={cn(
                'absolute top-0 right-0 flex h-full cursor-pointer items-center justify-center bg-transparent p-1 leading-normal rtl:left-0 rtl:right-auto',
                variant !== 'outline' && selectClassesWithIcon.color[color],
                disabled && selectClassesWithIcon.disabled
              )}
            >
              {clearable &&
                !disabled &&
                !multiple &&
                selectedValue.length !== 0 && (
                  <XCircleIcon
                    className={cn(
                      selectClassesWithIcon.size[size],
                      iconClassName
                    )}
                    onClick={() => setSelectedValue([])}
                  />
                )}
              {dropDownIcon || (
                <ChevronUpDownIcon
                  className={cn(
                    selectClassesWithIcon.size[size],
                    iconClassName
                  )}
                />
              )}
            </div>
          )}
        </div>
      </label>

      {!error && helperText && (
        <FieldHelperText size={size} className={helperTextClassName}>
          {helperText}
        </FieldHelperText>
      )}
      {error && (
        <FieldError size={size} error={error} className={errorClassName} />
      )}
    </div>
  );
}

NativeSelect.displayName = 'NativeSelect';
