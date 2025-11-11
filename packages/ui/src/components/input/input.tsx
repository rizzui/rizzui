import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { labelStyles } from '../../lib/label-size';

const inputContainer = tv({
  base: 'flex items-center peer w-full transition duration-200 border-[length:var(--border-width)] focus-within:ring-[0.8px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60 rounded-[var(--border-radius)]',
  variants: {
    variant: {
      text: 'border-transparent ring-transparent bg-transparent',
      outline: 'border-border ring-border bg-transparent',
    },
    size: {
      sm: 'px-2 py-1 text-xs h-8',
      md: 'px-3.5 py-2 text-sm h-10',
      lg: 'px-4 py-2 text-base h-12',
    },
    disabled: {
      true: '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted',
    },
    error: {
      true: '!border-red hover:!border-red focus-within:!border-red !ring-red !bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

const inputField = tv({
  base: 'rizzui-input-field w-full border-0 bg-transparent p-0 [font-size:inherit] focus:outline-none focus:ring-0 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
  variants: {
    disabled: {
      true: 'cursor-not-allowed placeholder:text-muted-foreground',
    },
    clearable: {
      true: '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
    },
    hasPrefix: {
      true: '',
    },
    hasSuffix: {
      true: '',
    },
    hasPlaceholder: {
      true: '',
      false: 'placeholder-shown:placeholder:opacity-0',
    },
  },
  compoundVariants: [
    { hasPrefix: true, class: 'ps-2.5' },
    { hasSuffix: true, class: 'pe-2.5' },
  ],
});

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'prefix' | 'suffix'
  > {
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
  variant?: VariantProps<typeof inputContainer>['variant'];
  size?: VariantProps<typeof inputContainer>['size'];
  placeholder?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  labelWeight?: keyof typeof labelStyles.weight;
  clearable?: boolean;
  onClear?: (event: React.MouseEvent) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  prefixClassName?: string;
  suffixClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export function Input({
  className,
  type = 'text',
  variant = 'outline',
  size = 'md',
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
  ref,
  ...inputProps
}: InputProps) {
  return (
    <div className={cn('rizzui-input-root', 'flex flex-col', className)}>
      <label className="block">
        {label ? (
          <span
            className={cn(
              'rizzui-input-label',
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
          className={inputContainer({
            variant,
            size,
            disabled,
            error: Boolean(error),
            className: inputClassName,
          })}
        >
          {prefix ? (
            <span
              className={cn(
                'rizzui-input-prefix',
                'leading-normal whitespace-nowrap',
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
            readOnly={readOnly}
            spellCheck="false"
            placeholder={placeholder || 'Screen reader only'}
            aria-invalid={error ? 'true' : undefined}
            aria-required={inputProps.required}
            className={inputField({
              disabled,
              clearable,
              hasPrefix: Boolean(prefix),
              hasSuffix: Boolean(suffix),
              hasPlaceholder: Boolean(placeholder),
            })}
            {...inputProps}
          />

          {clearable ? (
            <FieldClearButton
              as="span"
              size={size}
              onClick={onClear}
              hasSuffix={Boolean(suffix)}
            />
          ) : null}

          {suffix ? (
            <span
              className={cn(
                'rizzui-input-suffix',
                'leading-normal whitespace-nowrap',
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
            'rizzui-input-helper-text',
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
          className={cn('rizzui-input-error-text', errorClassName)}
        />
      ) : null}
    </div>
  );
}
