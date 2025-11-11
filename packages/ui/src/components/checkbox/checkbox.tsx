import type { InputHTMLAttributes, ReactNode, Ref } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { CheckmarkIcon } from '../../icons/checkmark';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { labelStyles } from '../../lib/label-size';
import { useCheckboxGroup } from '../checkbox-group/checkbox-group';

const checkbox = tv({
  base: 'peer outline-none focus:outline-none checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out rounded-[var(--border-radius)] border-[length:var(--border-width)]',
  variants: {
    variant: {
      outline:
        'bg-transparent border-border focus:ring-border checked:!bg-primary checked:!border-primary hover:enabled:border-primary',
      flat: 'border-0 bg-muted/70 backdrop-blur hover:enabled:bg-muted focus:ring-border checked:!bg-primary',
    },
    size: {
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-7 w-7',
    },
    disabled: {
      true: 'disabled:bg-muted/70 disabled:backdrop-blur disabled:border-muted',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

const checkboxLabel = tv({
  base: 'mb-0',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
    },
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

const indeterminateIcon = tv({
  base: 'rounded bg-primary-foreground',
  variants: {
    size: {
      sm: 'h-0.5 w-2.5',
      md: 'h-0.5 w-3',
      lg: 'h-[3px] w-3.5',
    },
  },
});

type CheckboxVariant = VariantProps<typeof checkbox>;

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: CheckboxVariant['variant'];
  size?: CheckboxVariant['size'];
  labelWeight?: keyof typeof labelStyles.weight;
  labelPlacement?: 'left' | 'right';
  disabled?: boolean;
  label?: ReactNode;
  error?: string;
  helperText?: ReactNode;
  iconClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  className?: string;
  indeterminate?: boolean;
  ref?: Ref<HTMLInputElement>;
}

export function Checkbox({
  variant = 'outline',
  size = 'md',
  labelPlacement = 'right',
  labelWeight = 'medium',
  label,
  disabled,
  error,
  helperText,
  iconClassName,
  labelClassName,
  inputClassName,
  errorClassName,
  helperClassName,
  indeterminate,
  className,
  ref,
  value,
  checked,
  onChange,
  ...checkboxProps
}: CheckboxProps) {
  // Try to get checkbox group context (optional)
  let groupContext;
  try {
    groupContext = useCheckboxGroup();
  } catch {
    // Not in a checkbox group, use standalone mode
    groupContext = null;
  }

  // Use group context if available, otherwise use individual props
  const isChecked = groupContext
    ? groupContext.isChecked(value as string)
    : checked;
  const handleChange = groupContext ? groupContext.onChange : onChange;

  return (
    <div className={cn('rizzui-checkbox-root', 'flex flex-col', className)}>
      <label
        className={cn(
          'rizzui-checkbox-container',
          'flex cursor-pointer flex-row items-center',
          disabled && 'cursor-not-allowed'
        )}
      >
        <span className="relative leading-none">
          <input
            type="checkbox"
            ref={ref}
            disabled={disabled}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            aria-invalid={error ? 'true' : undefined}
            aria-required={checkboxProps.required}
            className={checkbox({
              variant,
              size,
              disabled,
              className: inputClassName,
            })}
            {...checkboxProps}
          />

          {indeterminate && (
            <span
              className={cn(
                'absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-[var(--border-radius)] bg-black peer-checked:hidden'
              )}
            >
              <span className={indeterminateIcon({ size })} />
            </span>
          )}

          <CheckmarkIcon
            className={cn(
              'rizzui-checkbox-icon',
              'text-primary-foreground absolute top-0 left-0 opacity-0 peer-checked:opacity-100',
              checkbox({ size }),
              size === 'sm' && 'top-0',
              iconClassName
            )}
          />
        </span>

        {label ? (
          <span
            className={checkboxLabel({
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
            'rizzui-checkbox-helper-text',
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
          className={cn('rizzui-checkbox-error-text', errorClassName)}
        />
      ) : null}
    </div>
  );
}
