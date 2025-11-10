import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldHelperText } from '../field-helper-text';
import { FieldErrorText } from '../field-error-text';
import { FieldClearButton } from '../field-clear-button';
import { labelStyles } from '../../lib/label-size';

const textarea = tv({
  base: 'block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent rounded-[var(--border-radius)] border-[length:var(--border-width)]',
  variants: {
    variant: {
      text: 'border-transparent ring-transparent bg-transparent',
      outline: 'bg-transparent ring-border border-border',
    },
    size: {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-2 text-base',
    },
    disabled: {
      true: '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted placeholder:text-muted-foreground text-muted-foreground',
    },
    error: {
      true: '!border-red hover:!border-red focus:!border-red !ring-red',
    },
    clearable: {
      true: '[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

const clearButton = tv({
  base: 'absolute',
  variants: {
    size: {
      sm: 'end-2.5 top-1',
      md: 'end-4 top-2',
      lg: 'end-5 top-2',
    },
  },
});

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  rows?: number;
  cols?: number;
  maxLength?: number;
  disabled?: boolean;
  children?: React.ReactNode;
  size?: VariantProps<typeof textarea>['size'];
  variant?: VariantProps<typeof textarea>['variant'];
  label?: React.ReactNode;
  labelWeight?: keyof typeof labelStyles.weight;
  clearable?: boolean;
  onClear?: (event: React.MouseEvent) => void;
  renderCharacterCount?({
    characterCount,
    maxLength,
  }: {
    characterCount?: number;
    maxLength?: number;
  }): React.ReactNode;
  helperText?: React.ReactNode;
  error?: string;
  labelClassName?: string;
  textareaClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  className?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
}

export function Textarea({
  variant = 'outline',
  size = 'md',
  labelWeight = 'medium',
  cols,
  rows = 5,
  label,
  error,
  clearable,
  onClear,
  readOnly,
  disabled,
  className,
  labelClassName,
  textareaClassName,
  helperClassName,
  errorClassName,
  helperText,
  maxLength,
  placeholder,
  renderCharacterCount,
  ref,
  ...textareaProps
}: TextareaProps) {
  return (
    <div
      className={cn('rizzui-textarea-root', 'flex flex-col', className)}
    >
      <label className="block">
        {label ? (
          <span
            className={cn(
              'rizzui-textarea-label',
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

        <span className="relative block">
          <textarea
            ref={ref}
            rows={rows}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            {...(cols && { cols })}
            placeholder={placeholder || 'Screen reader only'}
            aria-invalid={error ? 'true' : undefined}
            aria-required={textareaProps.required}
            className={textarea({
              variant,
              size,
              disabled,
              error: Boolean(error),
              clearable,
              className: cn(
                'rizzui-textarea-field',
                !placeholder && 'placeholder-shown:placeholder:opacity-0',
                !cols && 'w-full',
                readOnly && 'focus:ring-0',
                textareaClassName
              ),
            })}
            {...textareaProps}
          />

          {clearable ? (
            <FieldClearButton
              size={size}
              onClick={onClear}
              className={clearButton({ size, className: 'cursor-pointer' })}
            />
          ) : null}

          {renderCharacterCount &&
            renderCharacterCount({
              characterCount: String(textareaProps?.value).length,
              maxLength,
            })}
        </span>
      </label>

      {!error && helperText ? (
        <FieldHelperText
          size={size}
          className={cn(
            'rizzui-textarea-helper-text',
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
          className={cn('rizzui-textarea-error-text', errorClassName)}
        />
      ) : null}
    </div>
  );
}
