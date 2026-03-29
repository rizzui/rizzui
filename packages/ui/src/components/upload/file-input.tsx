import React, { useCallback } from 'react';
import { createVariant, type VariantProps } from '../../lib/variants';
import { cn } from '../../lib/cn';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { labelStyles } from '../../lib/label-size';

const fileInput = createVariant({
  slots: {
    container: 'flex items-center peer w-full transition duration-200 rounded-(--border-radius) border-(length:--border-width)',
    input: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
    button:
      'file:inline-flex file:font-medium file:leading-none file:items-center file:justify-center file:border-0 file:focus-visible:ring-2 file:focus-visible:ring-opacity-50 file:bg-primary file:hover:enabled:bg-primary-dark file:focus-visible:ring-primary/30 file:text-primary-foreground file:rounded-[calc(var(--border-radius)-2px)]',
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
        container: 'pr-2 py-1 text-xs h-8 pl-px',
        button: 'file:h-7 file:px-2.5',
      },
      md: {
        container: 'pr-3.5 py-2 text-sm h-10 pl-px',
        button: 'file:h-9 file:px-3.5',
      },
      lg: {
        container: 'pr-4 py-2 text-base h-12 pl-px',
        button: 'file:h-11 file:px-4',
      },
    },
    disabled: {
      true: {
        container: 'bg-muted/70! backdrop-blur cursor-not-allowed border-muted! text-muted-foreground!',
        input: 'cursor-not-allowed placeholder:text-muted-foreground',
        button:
          'file:bg-muted-foreground file:text-foreground file:dark:text-muted',
      },
    },
    error: {
      true: {
        container: 'border-red! hover:border-red! focus:border-red! ring-red!',
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
    } = fileInput({ variant, size: size as 'sm' | 'md' | 'lg', disabled: (disabled ?? false) as any, error: Boolean(error) as any, clearable: (clearable ?? false) as any });

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
                labelStyles.size[size as 'sm' | 'md' | 'lg'],
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
              <FieldClearButton size={size as 'sm' | 'md' | 'lg'} onClick={handleOnClear} />
            )}
          </span>
        </label>

        {!error && helperText ? (
          <FieldHelperText
            size={size as 'sm' | 'md' | 'lg'}
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
            size={size as 'sm' | 'md' | 'lg'}
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
