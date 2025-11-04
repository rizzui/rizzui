import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const radio = tv({
  base: 'disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted focus:ring-border focus:ring-offset-background text-primary dark:text-primary-foreground border-[length:var(--border-width)]',
  variants: {
    variant: {
      outline:
        'bg-transparent border-border checked:!bg-primary dark:checked:!bg-transparent checked:!border-primary hover:enabled:border-primary',
    },
    size: {
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-7 w-7',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

const radioLabel = tv({
  base: 'mb-0',
  variants: {
    size: labelStyles.size,
    labelWeight: labelStyles.weight,
    labelPlacement: {
      left: '',
      right: '',
    },
    disabled: {
      true: 'text-muted-foreground',
    },
  },
  compoundVariants: [
    { labelPlacement: 'left', class: 'order-first' },
    { labelPlacement: 'left', size: 'sm', class: 'me-1.5' },
    { labelPlacement: 'left', size: 'md', class: 'me-2' },
    { labelPlacement: 'left', size: 'lg', class: 'me-2.5' },
    { labelPlacement: 'right', size: 'sm', class: 'ms-1.5' },
    { labelPlacement: 'right', size: 'md', class: 'ms-2' },
    { labelPlacement: 'right', size: 'lg', class: 'ms-2.5' },
  ],
});

type RadioVariant = VariantProps<typeof radio>;

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: RadioVariant['variant'];
  size?: RadioVariant['size'];
  labelPlacement?: 'left' | 'right';
  labelWeight?: keyof typeof labelStyles.weight;
  disabled?: boolean;
  label?: React.ReactNode;
  error?: string;
  helperText?: React.ReactNode;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export function Radio({
  variant = 'outline',
  size = 'md',
  labelPlacement = 'right',
  labelWeight = 'medium',
  label,
  disabled,
  error,
  helperText,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
  helperClassName,
  ref,
  ...radioProps
}: RadioProps) {
  return (
    <div
      className={cn(makeClassName(`radio-root`), 'flex flex-col', className)}
    >
      <label
        className={cn(
          makeClassName(`radio-container`),
          'flex cursor-pointer flex-row items-center',
          disabled && 'text-foreground/70 cursor-not-allowed'
        )}
      >
        <input
          type="radio"
          ref={ref}
          disabled={disabled}
          className={radio({
            variant,
            size,
            className: inputClassName,
          })}
          {...radioProps}
        />

        {label ? (
          <span
            className={radioLabel({
              size,
              labelWeight,
              labelPlacement,
              disabled,
              className: labelClassName,
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
            makeClassName(`radio-helper-text`),
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
          className={cn(makeClassName(`radio-error-text`), errorClassName)}
        />
      ) : null}
    </div>
  );
}
