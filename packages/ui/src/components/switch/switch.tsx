import React, { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const switchLabelStyles = {
  weight: labelStyles.weight,
  size: labelStyles.size,
  margin: {
    left: {
      sm: 'me-1.5',
      md: 'me-2',
      lg: 'me-2.5',
      xl: 'me-3',
    },
    right: {
      sm: 'ms-1.5',
      md: 'ms-2',
      lg: 'ms-2.5',
      xl: 'ms-3',
    },
  },
};

const switchStyles = {
  base: 'flex items-center cursor-pointer transition duration-200 ease-in-out peer-focus/switch:ring-[1.5px] peer-focus/switch:ring-offset-2 peer-focus/switch:ring-gray-200 ring-transparent',
  active: 'peer-checked/switch:bg-primary peer-checked/switch:border-primary',
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
    md: 'w-10 h-6',
    lg: 'w-12 h-7',
    xl: 'w-14 h-8',
  },
  icon: {
    size: {
      sm: 'h-3 w-3',
      md: 'h-3.5 w-3.5',
      lg: 'w-4 h-4',
      xl: 'w-5 h-5',
    },
  },
  variant: {
    flat: 'border border-transparent bg-gray-200/70 group-hover/switch:bg-gray-200',
    outline:
      'border border-gray-200 ring-[0.6px] ring-gray-200 group-hover/switch:border-primary',
  },
};

const switchKnobStyles = {
  base: 'flex justify-center items-center transform ring-0 transition duration-200 ease-in-out',
  disabled: 'peer-disabled/switch:bg-gray-300 peer-disabled/switch:shadow-none',
  outlineInactiveDisabled:
    '[&:hover_.rizzui-switch-knob]:!bg-gray-300 [&:hover_.rizzui-switch-knob]:!text-gray-400',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-md',
    pill: 'rounded-full',
  },
  size: {
    sm: 'w-3.5 h-3.5',
    md: 'w-[1.13rem] h-[1.13rem]',
    lg: 'w-[1.38rem] h-[1.38rem]',
    xl: 'w-[1.63rem] h-[1.63rem]',
  },
  color: 'bg-primary',
  outlineInactiveColor:
    '[&:hover_.rizzui-switch-knob]:bg-primary [&:hover_.rizzui-switch-knob]:text-white',
  translate: {
    active: {
      sm: '[&:checked+span>.rizzui-switch-knob]:translate-x-[.88rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[.88rem]',
      md: '[&:checked+span>.rizzui-switch-knob]:translate-x-[1.14rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[1.14rem]',
      lg: '[&:checked+span>.rizzui-switch-knob]:translate-x-[1.36rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[1.36rem]',
      xl: '[&:checked+span>.rizzui-switch-knob]:translate-x-[1.6rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[1.6rem]',
    },
    inactive: 'translate-x-[2.5px] rtl:-translate-x-[2.5px]',
  },
};

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Set field label */
  label?: React.ReactNode;
  /** Change label direction */
  labelPlacement?: keyof typeof switchLabelStyles.margin;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** The rounded variants are: */
  rounded?: keyof typeof switchStyles.rounded;
  /** The size of the component. */
  size?: keyof typeof switchLabelStyles.size;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** The variants of the component are: */
  variant?: keyof typeof switchStyles.variant;
  /** Set custom icon when the switch is on */
  onIcon?: React.ReactNode;
  /** Set custom icon when the switch is off */
  offIcon?: React.ReactNode;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add custom classes for switch label */
  labelClassName?: string;
  /** Add custom classes of switch wrapper for extra style */
  switchClassName?: string;
  /** Add custom classes of switch handler for extra style */
  switchKnobClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** Add custom classes to the root of the component */
  className?: string;
}

/**
 * A basic widget for getting the user input. Here is the API documentation of the Switch component.
 * And the rest of the props are the same as the original html checkbox input field.
 * You can use props like `value`, `disabled`, `checked`, `onChange`, `onFocus`, `onBlur` etc.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      labelPlacement = 'right',
      labelWeight = 'medium',
      rounded = 'pill',
      size = 'md',
      variant = 'flat',
      disabled = false,
      onIcon,
      offIcon,
      error,
      helperText,
      className,
      labelClassName,
      switchClassName,
      switchKnobClassName,
      errorClassName,
      helperClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('rizzui-switch', className)}>
        <label
          className={cn(
            'group/switch my-2 inline-flex items-center',
            labelPlacement === 'left' && 'flex-row-reverse',
            variant === 'outline' && [
              switchKnobStyles.outlineInactiveColor,
              disabled && switchKnobStyles.outlineInactiveDisabled,
            ],
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className={cn(
              'peer/switch absolute -z-[1] opacity-0 [&:checked:enabled~span>.rizzui-switch-knob>.rizzui-switch-off-icon]:hidden [&:checked:enabled~span>.rizzui-switch-knob>.rizzui-switch-on-icon]:opacity-100 [&:checked:enabled~span>.rizzui-switch-knob]:text-gray-900',
              '[&:checked:enabled~span>.rizzui-switch-knob]:bg-white',
              switchKnobStyles.translate.active[size],
            )}
            {...props}
          />

          <span
            className={cn(
              switchStyles.base,
              switchStyles.size[size],
              switchStyles.rounded[rounded],
              switchStyles.variant[variant],
              switchStyles.active,
              disabled && switchStyles.disabled,
              switchClassName,
            )}
          >
            <span
              className={cn(
                'rizzui-switch-knob relative',
                switchKnobStyles.base,
                switchKnobStyles.size[size],
                switchKnobStyles.rounded[rounded],
                switchKnobStyles.color,
                switchKnobStyles.translate.inactive,
                variant === 'flat' && 'bg-white text-gray-900 shadow-sm',
                variant === 'outline' && 'bg-gray-300 text-gray-900',
                switchKnobClassName,
              )}
            >
              <span className="rizzui-switch-off-icon inline-flex items-center">
                {offIcon}
              </span>
              <span className="rizzui-switch-on-icon absolute inset-0 inline-flex items-center justify-center opacity-0">
                {onIcon || (
                  // HeroIcon: check
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={cn(switchStyles.icon.size[size])}
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

          {label ? (
            <span
              className={cn(
                makeClassName(`switch-label`),
                switchLabelStyles.size[size],
                switchLabelStyles.weight[labelWeight],
                switchLabelStyles.margin[labelPlacement][size],
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
                labelPlacement === 'right' && 'order-last',
                'mb-0',
                labelClassName,
              )}
            >
              {label}
            </span>
          ) : null}
        </label>

        {!error && helperText ? (
          <FieldHelperText
            tag="div"
            size={size}
            className={cn(makeClassName(`switch-helper-text`), helperClassName)}
          >
            {helperText}
          </FieldHelperText>
        ) : null}

        {error ? (
          <FieldError
            size={size}
            error={error}
            className={cn(makeClassName(`switch-error-text`), errorClassName)}
          />
        ) : null}
      </div>
    );
  },
);

Switch.displayName = 'Switch';
