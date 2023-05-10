import React, { forwardRef } from 'react';

import { cn } from '../../lib/cn';
import FieldError from '../field-error-text';
import FieldHelperText from '../field-helper-text';

const labelClasses = {
  size: {
    sm: 'text-xs',
    DEFAULT: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  margin: {
    left: {
      sm: 'mr-1.5 rtl:mr-0 rtl:ml-1.5',
      DEFAULT: 'mr-2 rtl:mr-0 rtl:ml-2',
      lg: 'mr-2.5 rtl:mr-0 rtl:ml-2.5',
      xl: 'mr-3 rtl:mr-0 rtl:ml-3',
    },
    right: {
      sm: 'ml-1.5 rtl:ml-0 rtl:mr-1.5',
      DEFAULT: 'ml-2 rtl:ml-0 rtl:mr-2',
      lg: 'ml-2.5 rtl:ml-0 rtl:mr-2.5',
      xl: 'ml-3 rtl:ml-0 rtl:mr-3',
    },
  },
};

const switchClasses = {
  base: 'flex items-center cursor-pointer transition duration-200 ease-in-out ring-[1.5px] peer-focus/switch:ring-offset-2 peer-focus/switch:ring-gray-900/20 ring-transparent',
  disabled:
    'cursor-not-allowed peer-disabled/switch:border-gray-200 peer-disabled/switch:bg-gray-100',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
  size: {
    sm: 'w-8 h-5',
    DEFAULT: 'w-10 h-6',
    lg: 'w-12 h-7',
    xl: 'w-14 h-8',
  },
  variant: {
    active: {
      base: 'border',
      color: {
        DEFAULT: 'border-gray-900',
        primary: 'border-primary',
        secondary: 'border-secondary',
        danger: 'border-red',
        info: 'border-blue',
        success: 'border-green',
        warning: 'border-orange',
      },
    },
    flat: {
      base: 'border border-transparent',
      color: {
        DEFAULT: 'bg-gray-200 group-hover/switch:bg-gray-400/40',
        primary: 'bg-primary-light/40 group-hover/switch:bg-primary-light/50',
        secondary:
          'bg-secondary-light/40 group-hover/switch:bg-secondary-light/50',
        danger: 'bg-red-light/40 group-hover/switch:bg-red-light/50',
        info: 'bg-blue-light/40 group-hover/switch:bg-blue-light/50',
        success: 'bg-green-light/50 group-hover/switch:bg-green-light/70',
        warning: 'bg-orange-light/50 group-hover/switch:bg-orange-light/60',
      },
    },
    outline: {
      base: 'border border-gray-300',
      color: {
        DEFAULT: 'group-hover/switch:border-gray-900',
        primary: 'group-hover/switch:border-primary',
        secondary: 'group-hover/switch:border-secondary',
        danger: 'group-hover/switch:border-red',
        info: 'group-hover/switch:border-blue',
        success: 'group-hover/switch:border-green',
        warning: 'group-hover/switch:border-orange',
      },
    },
  },
};

// only for outline inactive switch knob
const outlineInactiveSwitchKnob = {
  disabled:
    '[&:hover_.aegon-switch-knob]:!bg-gray-300 [&:hover_.aegon-switch-knob]:!text-gray-400',
  color: {
    DEFAULT:
      '[&:hover_.aegon-switch-knob]:bg-gray-900 [&:hover_.aegon-switch-knob]:text-white',
    primary:
      '[&:hover_.aegon-switch-knob]:bg-primary [&:hover_.aegon-switch-knob]:text-white',
    secondary:
      '[&:hover_.aegon-switch-knob]:bg-secondary [&:hover_.aegon-switch-knob]:text-white',
    danger:
      '[&:hover_.aegon-switch-knob]:bg-red [&:hover_.aegon-switch-knob]:text-white',
    info: '[&:hover_.aegon-switch-knob]:bg-blue [&:hover_.aegon-switch-knob]:text-white',
    success:
      '[&:hover_.aegon-switch-knob]:bg-green [&:hover_.aegon-switch-knob]:text-white',
    warning:
      '[&:hover_.aegon-switch-knob]:bg-orange [&:hover_.aegon-switch-knob]:text-white',
  },
};

// apply when switch on
const switchActiveClasses = {
  color: {
    DEFAULT:
      'peer-checked/switch:bg-gray-900 peer-checked/switch:border-gray-900',
    primary:
      'peer-checked/switch:bg-primary peer-checked/switch:border-primary',
    secondary:
      'peer-checked/switch:bg-secondary peer-checked/switch:border-secondary',
    danger: 'peer-checked/switch:bg-red peer-checked/switch:border-red',
    info: 'peer-checked/switch:bg-blue peer-checked/switch:border-blue',
    success: 'peer-checked/switch:bg-green peer-checked/switch:border-green',
    warning: 'peer-checked/switch:bg-orange peer-checked/switch:border-orange',
  },
};

const handleClasses = {
  base: 'flex justify-center items-center transform ring-0 transition duration-200 ease-in-out',
  disabled: 'peer-disabled/switch:bg-gray-300 peer-disabled/switch:shadow-none',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-md',
    pill: 'rounded-full',
  },
  size: {
    sm: 'w-3.5 h-3.5',
    DEFAULT: 'w-[1.13rem] h-[1.13rem]',
    lg: 'w-[1.38rem] h-[1.38rem]',
    xl: 'w-[1.63rem] h-[1.63rem]',
  },
  color: {
    DEFAULT: 'bg-gray-900',
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    danger: 'bg-red',
    info: 'bg-blue',
    success: 'bg-green',
    warning: 'bg-orange',
  },
  translate: {
    active: {
      sm: '[&:checked+span>.aegon-switch-knob]:translate-x-[.88rem] rtl:[&:checked+span>.aegon-switch-knob]:-translate-x-[.88rem]',
      DEFAULT:
        '[&:checked+span>.aegon-switch-knob]:translate-x-[1.14rem] rtl:[&:checked+span>.aegon-switch-knob]:-translate-x-[1.14rem]',
      lg: '[&:checked+span>.aegon-switch-knob]:translate-x-[1.36rem] rtl:[&:checked+span>.aegon-switch-knob]:-translate-x-[1.36rem]',
      xl: '[&:checked+span>.aegon-switch-knob]:translate-x-[1.6rem] rtl:[&:checked+span>.aegon-switch-knob]:-translate-x-[1.6rem]',
    },
    inactive: 'translate-x-[2.5px] rtl:-translate-x-[2.5px]',
  },
};

const iconClasses = {
  size: {
    sm: 'h-3 w-3',
    DEFAULT: 'h-3.5 w-3.5',
    lg: 'w-4 h-4',
    xl: 'w-5 h-5',
  },
};

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Set field label */
  label?: React.ReactNode;
  /** Change label direction */
  labelPlacement?: keyof typeof labelClasses.margin;
  /** The rounded variants are: */
  rounded?: keyof typeof switchClasses.rounded;
  /** The size of the component. */
  size?: keyof typeof labelClasses.size;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** The variants of the component are: */
  variant?: keyof typeof switchClasses.variant;
  /** Change Switch color */
  color?: keyof (typeof switchClasses.variant)['flat']['color'];
  /** Set custom icon when the switch is on */
  onIcon?: React.ReactNode;
  /** Set custom icon when the switch is off */
  offIcon?: React.ReactNode;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add custom classes of component wrapper for extra style */
  className?: string;
  /** Add custom classes for switch label */
  labelClassName?: string;
  /** Add custom classes of switch wrapper for extra style */
  switchClassName?: string;
  /** Add custom classes of switch handler for extra style */
  handlerClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
}

/**
 * A basic widget for getting the user input. Here is the API documentation of the Switch component.
 * And the rest of the props are the same as the original html checkbox input field.
 * You can use props like `value`, `disabled`, `checked`, `onChange`, `onFocus`, `onBlur` etc.
 */
const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      labelPlacement = 'right',
      rounded = 'pill',
      size = 'DEFAULT',
      variant = 'flat',
      color = 'DEFAULT',
      disabled = false,
      onIcon,
      offIcon,
      error,
      helperText,
      className,
      labelClassName,
      switchClassName,
      handlerClassName,
      errorClassName,
      helperClassName,
      ...props
    },
    ref
  ) => {
    const variantStyle = switchClasses.variant[variant];
    return (
      <div className={cn('aegon-switch', className)}>
        <label
          className={cn(
            'group/switch my-2 inline-flex items-center',
            labelPlacement === 'left' && 'flex-row-reverse',
            variant === 'outline' && [
              outlineInactiveSwitchKnob.color[color],
              disabled && outlineInactiveSwitchKnob.disabled,
            ]
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className={cn(
              'peer/switch absolute -z-[1] opacity-0 [&:checked:enabled~span>.aegon-switch-knob>.aegon-switch-off-icon]:hidden [&:checked:enabled~span>.aegon-switch-knob>.aegon-switch-on-icon]:opacity-100 [&:checked:enabled~span>.aegon-switch-knob]:text-gray-900',
              color === 'DEFAULT'
                ? '[&:checked:enabled~span>.aegon-switch-knob]:bg-gray-0'
                : '[&:checked:enabled~span>.aegon-switch-knob]:bg-white',
              handleClasses.translate.active[size]
            )}
            {...props}
          />
          <span
            className={cn(
              switchClasses.base,
              switchClasses.size[size],
              switchClasses.rounded[rounded],
              variantStyle.base,
              variantStyle.color[color],
              switchActiveClasses.color[color],
              disabled && switchClasses.disabled,
              switchClassName
            )}
          >
            <span
              className={cn(
                'aegon-switch-knob relative',
                handleClasses.base,
                handleClasses.size[size],
                handleClasses.rounded[rounded],
                handleClasses.color[color],
                handleClasses.translate.inactive,
                variant === 'active' && 'text-white',
                variant === 'flat' && 'bg-white text-gray-900 shadow-sm',
                variant === 'outline' && 'bg-gray-300 text-gray-900',
                handlerClassName
              )}
            >
              <span className="aegon-switch-off-icon inline-flex items-center">
                {offIcon}
              </span>
              <span className="aegon-switch-on-icon absolute inset-0 inline-flex items-center justify-center opacity-0">
                {onIcon || (
                  // HeroIcon: check
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={cn(iconClasses.size[size])}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </span>
          </span>
          {label && (
            <span
              className={cn(
                labelClasses.size[size],
                labelClasses.margin[labelPlacement][size],
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                labelPlacement === 'right' && 'order-last',
                labelClassName
              )}
            >
              {label}
            </span>
          )}
        </label>
        {!error && helperText && (
          <FieldHelperText tag="div" size={size} className={helperClassName}>
            {helperText}
          </FieldHelperText>
        )}
        {error && (
          <FieldError size={size} error={error} className={errorClassName} />
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
