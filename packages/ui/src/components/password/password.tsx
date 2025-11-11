import React, { useState } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { PasswordToggleIcon } from './password-toggle-icon';
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
  base: 'w-full border-0 bg-transparent [font-size:inherit] p-0 focus:outline-none focus:ring-0 [&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
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
  },
  compoundVariants: [{ hasPrefix: true, class: 'ps-2.5' }],
});

export interface PasswordProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'type' | 'prefix'
  > {
  variant?: VariantProps<typeof inputContainer>['variant'];
  size?: VariantProps<typeof inputContainer>['size'];
  placeholder?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  labelWeight?: keyof typeof labelStyles.weight;
  clearable?: boolean;
  onClear?: (event: React.MouseEvent) => void;
  prefix?: React.ReactNode;
  visibilityToggleIcon?(visible: boolean): React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  prefixClassName?: string;
  isPasswordVisible?: boolean;
  visibilityToggleIconClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  className?: string;
  hideVisibilityToggleIcon?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

export function Password({
  className,
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
  readOnly,
  helperText,
  labelClassName,
  inputClassName,
  errorClassName,
  helperClassName,
  prefixClassName,
  isPasswordVisible,
  visibilityToggleIcon,
  hideVisibilityToggleIcon,
  visibilityToggleIconClassName,
  ref,
  ...inputProps
}: PasswordProps) {
  const [visible, setVisible] = useState(false);
  const isVisible = isPasswordVisible ?? visible;

  return (
    <div
      className={cn('rizzui-password-root', 'flex flex-col', className)}
    >
      <label className="block">
        {label ? (
          <span
            className={cn(
              'rizzui-password-label',
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
                'rizzui-password-prefix',
                'leading-normal whitespace-nowrap',
                prefixClassName
              )}
            >
              {prefix}
            </span>
          ) : null}

          <input
            ref={ref}
            type={isVisible ? 'text' : 'password'}
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
              className: cn(
                'rizzui-password-field',
                !placeholder && 'placeholder-shown:placeholder:opacity-0',
                visibilityToggleIcon && 'pe-2.5'
              ),
            })}
            {...inputProps}
          />

          {clearable ? (
            <FieldClearButton size={size} onClick={onClear} hasSuffix />
          ) : null}

          {hideVisibilityToggleIcon ? null : (
            <button
              type="button"
              tabIndex={0}
              aria-label={isVisible ? 'Hide password' : 'Show password'}
              aria-pressed={isVisible}
              disabled={disabled}
              className={cn(
                'rizzui-password-toggle-icon',
                'cursor-pointer leading-normal whitespace-nowrap border-0 bg-transparent p-0',
                disabled && 'text-muted-foreground cursor-not-allowed',
                visibilityToggleIconClassName
              )}
              onClick={() => {
                if (disabled) return false;
                setVisible(!visible);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (!disabled) {
                    setVisible(!visible);
                  }
                }
              }}
            >
              {visibilityToggleIcon ? (
                visibilityToggleIcon(visible)
              ) : (
                <PasswordToggleIcon isVisible={visible} iconSize={size} />
              )}
            </button>
          )}
        </span>
      </label>

      {!error && helperText ? (
        <FieldHelperText
          size={size}
          className={cn(
            'rizzui-password-helper-text',
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
          className={cn('rizzui-password-error-text', errorClassName)}
        />
      ) : null}
    </div>
  );
}
