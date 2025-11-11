import React, { useCallback } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { labelStyles } from '../../lib/label-size';

const fileInput = tv({
  slots: {
    container: 'flex items-center peer w-full transition duration-200 rounded-[var(--border-radius)] border-[length:var(--border-width)]',
    input: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
    button:
      '[&::file-selector-button]:inline-flex [&::file-selector-button]:font-medium [&::file-selector-button]:leading-none [&::file-selector-button]:items-center [&::file-selector-button]:justify-center [&::file-selector-button]:border-0 [&::file-selector-button]:focus-visible:ring-2 [&::file-selector-button]:focus-visible:ring-opacity-50 [&::file-selector-button]:bg-primary [&::file-selector-button]:hover:enabled:bg-primary-dark [&::file-selector-button]:focus-visible:ring-primary/30 [&::file-selector-button]:text-primary-foreground [&::file-selector-button]:rounded-[calc(var(--border-radius)-2px)]',
  },
  variants: {
    variant: {
      outline: {
        container:
          'bg-transparent focus-within::ring-[0.8px] ring-border border-border [&_input::placeholder]:text-gray-500 hover:border-primary focus-within::border-primary focus-within::ring-primary',
      },
      text: {
        container:
          'border-0 focus-within::ring-2 bg-transparent [&_input::placeholder]:opacity-70 hover:text-primary-dark focus-within::ring-primary/30 text-primary',
      },
    },
    size: {
      sm: {
        container: 'pr-2 py-1 text-xs h-8 pl-[1px]',
        button: '[&::file-selector-button]:h-7 [&::file-selector-button]:px-2.5',
      },
      md: {
        container: 'pr-3.5 py-2 text-sm h-10 pl-[1px]',
        button: '[&::file-selector-button]:h-9 [&::file-selector-button]:px-3.5',
      },
      lg: {
        container: 'pr-4 py-2 text-base h-12 pl-[1px]',
        button: '[&::file-selector-button]:h-11 [&::file-selector-button]:px-4',
      },
    },
    disabled: {
      true: {
        container: '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted !text-muted-foreground',
        input: 'cursor-not-allowed placeholder:text-muted-foreground',
        button:
          '[&::file-selector-button]:bg-muted-foreground [&::file-selector-button]:text-foreground [&::file-selector-button]:dark:text-muted',
      },
    },
    error: {
      true: {
        container: '!border-red hover:!border-red focus:!border-red !ring-red',
      },
    },
    clearable: {
      true: {
        input:
          '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  variant?: VariantProps<typeof fileInput>['variant'];
  size?: VariantProps<typeof fileInput>['size'];
  placeholder?: string;
  disabled?: boolean;
  label?: React.ReactNode;
  labelWeight?: keyof typeof labelStyles.weight;
  clearable?: boolean;
  onClear?: (event: React.MouseEvent) => void;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export function FileInput({
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
  readOnly,
  helperText,
  labelClassName,
  inputClassName,
  errorClassName,
  helperClassName,
  ref,
  ...inputProps
}: FileInputProps) {
    const handleOnClear = useCallback(
      (e: any) => {
        e.preventDefault();
        onClear && onClear(e);
      },
      [onClear]
    );

    const {
      container,
      input: inputStyle,
      button,
    } = fileInput({ variant, size, disabled, error: Boolean(error), clearable });

    return (
      <div
        className={cn(
          'rizzui-file-input-root',
          'flex flex-col',
          className
        )}
      >
        <label className="block">
          {label ? (
            <span
              className={cn(
                'rizzui-file-input-label',
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

          <span className={container({ className: inputClassName })}>
            <input
              ref={ref}
              type="file"
              disabled={disabled}
              readOnly={readOnly}
              spellCheck="false"
              aria-invalid={error ? 'true' : undefined}
              aria-required={inputProps.required}
              className={cn(inputStyle(), button())}
              style={{ fontSize: 'inherit' }}
              {...inputProps}
            />

            {clearable && (
              <FieldClearButton size={size} onClick={handleOnClear} />
            )}
          </span>
        </label>

        {!error && helperText ? (
          <FieldHelperText
            size={size}
            className={cn(
              'rizzui-file-input-helper-text',
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
            className={cn(
              'rizzui-file-input-error-text',
              errorClassName
            )}
          />
        ) : null}
      </div>
    );
}
