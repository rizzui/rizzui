import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { FieldHelperText } from '../field-helper-text';
import { FieldError } from '../field-error-text';
import { FieldClearButton } from '../field-clear-button';
import { makeClassName } from '../../lib/make-class-name';
import { labelStyles } from '../../lib/label-size';

const textarea = tv({
  base: 'block focus:outline-none bg-transparent transition duration-200 placeholder:opacity-60 ring-[0.6px] focus-within:ring-[0.8px] focus-within:ring-primary hover:border-primary focus-within:border-primary [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-[2px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb:hover]:bg-muted-foreground [&::-webkit-scrollbar-track]:rounded-[2px] [&::-webkit-scrollbar-track]:bg-transparent',
  variants: {
    variant: {
      text: 'border-transparent ring-transparent bg-transparent',
      flat: 'border-0 ring-muted/70 focus-within:ring-[1.8px] focus-within:bg-transparent bg-muted/70 backdrop-blur',
      outline: 'bg-transparent ring-muted border border-muted',
    },
    size: {
      sm: 'px-2.5 py-1 text-xs',
      md: 'px-3 py-2 text-sm',
      lg: 'px-4 py-2 text-base',
      xl: 'px-4 py-2.5 text-base',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      pill: 'rounded-full',
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
    rounded: 'md',
  },
});

const clearButton = tv({
  base: 'absolute',
  variants: {
    size: {
      sm: 'end-2.5 top-1',
      md: 'end-4 top-2',
      lg: 'end-5 top-2',
      xl: 'end-6 top-2.5',
    },
  },
});

type TextareaVariant = VariantProps<typeof textarea>;

export interface TextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  /** Set custom rows */
  rows?: number;
  /** Set custom cols */
  cols?: number;
  /** Set custom max length of character */
  maxLength?: number;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Default value in textarea */
  children?: React.ReactNode;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: TextareaVariant['size'];
  /** The variants of the component are: */
  variant?: TextareaVariant['variant'];
  /** Set field label */
  label?: React.ReactNode;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** The rounded variants are: */
  rounded?: TextareaVariant['rounded'];
  /** It is the password visibility toggle icon.  */
  renderCharacterCount?({
    characterCount,
    maxLength,
  }: {
    characterCount?: number;
    maxLength?: number;
  }): React.ReactNode;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input filed extra style */
  textareaClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** Add custom classes to the root of the component */
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      rounded = 'md',
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
      onFocus,
      onBlur,
      maxLength,
      placeholder,
      renderCharacterCount,
      onMouseEnter,
      onMouseLeave,
      ...textareaProps
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          makeClassName(`textarea-root`),
          'flex flex-col',
          className
        )}
      >
        <label className="block">
          {label ? (
            <span
              className={cn(
                makeClassName(`textarea-label`),
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
              // placeholder is a required prop for the clearable input component even if the user does not set any
              placeholder={placeholder || 'Screen reader only'}
              className={textarea({
                variant,
                size,
                rounded,
                disabled,
                error: Boolean(error),
                clearable,
                className: cn(
                  makeClassName(`textarea-field`),
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
              makeClassName(`textarea-helper-text`),
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
            className={cn(makeClassName(`textarea-error-text`), errorClassName)}
          />
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
