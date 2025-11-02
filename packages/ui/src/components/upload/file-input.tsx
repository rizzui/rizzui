import React, { forwardRef, useCallback } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const fileInput = tv({
  slots: {
    container: 'flex items-center peer w-full transition duration-200',
    input: 'w-full border-0 bg-transparent p-0 focus:outline-none focus:ring-0',
    button:
      '[&::file-selector-button]:inline-flex [&::file-selector-button]:font-medium [&::file-selector-button]:leading-none [&::file-selector-button]:items-center [&::file-selector-button]:justify-center [&::file-selector-button]:border-0 [&::file-selector-button]:focus-visible:ring-2 [&::file-selector-button]:focus-visible:ring-opacity-50 [&::file-selector-button]:bg-primary [&::file-selector-button]:hover:enabled:bg-primary-dark [&::file-selector-button]:focus-visible:ring-primary/30 [&::file-selector-button]:text-primary-foreground',
  },
  variants: {
    variant: {
      flat: {
        container:
          'focus-within:ring-2 focus-within::bg-transparent border-0 [&_input::placeholder]:opacity-80 bg-primary-lighter/70 focus-within::ring-primary/30 text-primary-dark',
      },
      outline: {
        container:
          'bg-transparent focus-within::ring-[0.8px] ring-[0.6px] ring-muted border border-muted [&_input::placeholder]:text-gray-500 hover:border-primary focus-within::border-primary focus-within::ring-primary',
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
      xl: {
        container: 'pr-5 py-2.5 text-base h-14 pl-0.5',
        button: '[&::file-selector-button]:h-12 [&::file-selector-button]:px-5',
      },
    },
    rounded: {
      none: { container: 'rounded-none' },
      sm: {
        container: 'rounded-sm',
        button: '[&::file-selector-button]:rounded-sm',
      },
      md: {
        container: 'rounded-md',
        button: '[&::file-selector-button]:rounded',
      },
      lg: {
        container: 'rounded-lg',
        button: '[&::file-selector-button]:rounded-md',
      },
      pill: {
        container: 'rounded-full',
        button: '[&::file-selector-button]:rounded-full',
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
    rounded: 'md',
  },
});

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** The variants of the component are: */
  variant?: VariantProps<typeof fileInput>['variant'];
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: VariantProps<typeof fileInput>['size'];
  /** The rounded variants are: */
  rounded?: VariantProps<typeof fileInput>['rounded'];
  /** Set input placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Override default CSS style of label */
  labelClassName?: string;
  /** Override default CSS style of input */
  inputClassName?: string;
  /** Override default CSS style of helperText */
  helperClassName?: string;
  /** Override default CSS style of error message */
  errorClassName?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      rounded = 'md',
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
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
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
    } = fileInput({ variant, size, rounded, disabled, error: Boolean(error), clearable });

    return (
      <div
        className={cn(
          makeClassName(`file-input-root`),
          'flex flex-col',
          className
        )}
      >
        <label className="block">
          {label ? (
            <span
              className={cn(
                makeClassName(`file-input-label`),
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
              makeClassName(`file-input-helper-text`),
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
            className={cn(
              makeClassName(`file-input-error-text`),
              errorClassName
            )}
          />
        ) : null}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
