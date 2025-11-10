import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';

const switchTV = tv({
  slots: {
    container:
      'flex items-center cursor-pointer transition duration-200 ease-in-out peer-focus/switch:ring-[1.5px] peer-focus/switch:ring-offset-2 peer-focus/switch:ring-border ring-transparent ring-offset-background peer-checked/switch:bg-primary peer-checked/switch:border-primary rounded-full border-[length:var(--border-width)]',
    knob: 'rizzui-switch-knob relative flex justify-center items-center transform ring-0 transition duration-200 ease-in-out translate-x-[2.5px] rtl:-translate-x-[2.5px] bg-primary rounded-full',
    input:
      'peer/switch absolute -z-[1] opacity-0 [&:checked:enabled~span_.rizzui-switch-off-icon]:hidden [&:checked:enabled~span_.rizzui-switch-on-icon]:opacity-100 [&:checked:enabled~span>.rizzui-switch-knob]:bg-white [&:checked:enabled~span>.rizzui-switch-knob]:text-black [&:checked:enabled~span>.rizzui-switch-knob]:dark:bg-black [&:checked:enabled~span>.rizzui-switch-knob]:dark:text-white',
    icon: '',
    label: 'rizzui-switch-label',
  },
  variants: {
    variant: {
      flat: {
        container:
          'border-transparent bg-muted/70 backdrop-blur group-hover/switch:bg-muted',
        knob: 'bg-white text-foreground shadow-sm dark:text-primary-foreground',
      },
      outline: {
        container:
          'border-border ring-[0.6px] ring-border group-hover/switch:border-primary',
        knob: 'bg-muted text-foreground',
      },
    },
    size: {
      sm: {
        container: 'w-8 h-5',
        knob: 'w-3.5 h-3.5',
        icon: 'h-3 w-3',
        label: 'text-sm',
        input:
          '[&:checked+span>.rizzui-switch-knob]:translate-x-[.88rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[.88rem]',
      },
      md: {
        container: 'w-10 h-6',
        knob: 'w-[1.13rem] h-[1.13rem]',
        icon: 'h-3.5 w-3.5',
        label: 'text-base',
        input:
          '[&:checked+span>.rizzui-switch-knob]:translate-x-[1.14rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[1.14rem]',
      },
      lg: {
        container: 'w-12 h-7',
        knob: 'w-[1.38rem] h-[1.38rem]',
        icon: 'w-4 h-4',
        label: 'text-lg',
        input:
          '[&:checked+span>.rizzui-switch-knob]:translate-x-[1.36rem] rtl:[&:checked+span>.rizzui-switch-knob]:-translate-x-[1.36rem]',
      },
    },
    labelPlacement: {
      left: { label: '' },
      right: { label: '' },
    },
    labelWeight: {
      normal: { label: 'font-normal' },
      medium: { label: 'font-medium' },
      semibold: { label: 'font-semibold' },
      bold: { label: 'font-bold' },
    },
    disabled: {
      true: {
        container:
          'cursor-not-allowed peer-disabled/switch:border-muted peer-disabled/switch:bg-muted/70 peer-disabled:backdrop-blur',
        knob: 'peer-disabled/switch:bg-muted peer-disabled/switch:shadow-none',
        label: 'cursor-not-allowed text-muted-foreground',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'flat',
      disabled: true,
      class: { knob: 'dark:bg-muted-foreground' },
    },
    {
      variant: 'outline',
      disabled: false,
      class:
        '[&:hover_.rizzui-switch-knob]:bg-primary [&:hover_.rizzui-switch-knob]:text-primary-foreground',
    },
    {
      variant: 'outline',
      disabled: true,
      class:
        '[&:hover_.rizzui-switch-knob]:!bg-muted [&:hover_.rizzui-switch-knob]:!text-muted-foreground',
    },
    // Label margins
    { labelPlacement: 'left', size: 'sm', class: { label: 'me-1.5' } },
    { labelPlacement: 'left', size: 'md', class: { label: 'me-2' } },
    { labelPlacement: 'left', size: 'lg', class: { label: 'me-2.5' } },
    { labelPlacement: 'right', size: 'sm', class: { label: 'ms-1.5' } },
    { labelPlacement: 'right', size: 'md', class: { label: 'ms-2' } },
    { labelPlacement: 'right', size: 'lg', class: { label: 'ms-2.5' } },
  ],
  defaultVariants: {
    variant: 'flat',
    size: 'md',
    labelPlacement: 'right',
    labelWeight: 'medium',
  },
});

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: React.ReactNode;
  labelPlacement?: VariantProps<typeof switchTV>['labelPlacement'];
  labelWeight?: VariantProps<typeof switchTV>['labelWeight'];
  size?: VariantProps<typeof switchTV>['size'];
  disabled?: boolean;
  variant?: VariantProps<typeof switchTV>['variant'];
  onIcon?: React.ReactNode;
  offIcon?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  switchClassName?: string;
  switchKnobClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export function Switch({
  label,
  labelPlacement = 'right',
  labelWeight = 'medium',
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
  ref,
  ...props
}: SwitchProps) {
  const {
    container,
    knob,
    input: inputClass,
    icon,
    label: labelClass,
  } = switchTV({ variant, size, labelPlacement, labelWeight, disabled });

  return (
    <div className={cn('rizzui-switch', className)}>
      <label
        className={cn(
          'group/switch my-2 inline-flex items-center',
          labelPlacement === 'left' && 'flex-row-reverse',
          variant === 'outline' &&
            !disabled &&
            '[&:hover_.rizzui-switch-knob]:bg-primary [&:hover_.rizzui-switch-knob]:text-primary-foreground',
          variant === 'outline' &&
            disabled &&
            '[&:hover_.rizzui-switch-knob]:bg-muted! [&:hover_.rizzui-switch-knob]:text-muted-foreground!'
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={inputClass()}
          {...props}
        />

        <span className={container({ className: switchClassName })}>
          <span
            className={knob({
              className: switchKnobClassName,
            })}
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
                  className={icon()}
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
            className={labelClass({
              className: cn(
                labelPlacement === 'right' && 'order-last',
                'mb-0',
                labelClassName
              ),
            })}
          >
            {label}
          </span>
        ) : null}
      </label>

      {!error && helperText ? (
        <FieldHelperText
          size={size}
          className={cn(
            'rizzui-switch-helper-text',
            disabled && 'text-muted-foreground',
            helperClassName
          )}
        >
          {helperText}
        </FieldHelperText>
      ) : null}

      {error ? (
        <FieldErrorText
          size={size}
          error={error}
          className={cn('rizzui-switch-error-text', errorClassName)}
        />
      ) : null}
    </div>
  );
}
