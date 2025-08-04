import React, { forwardRef, useState } from "react";
import { PasswordToggleIcon } from "./password-toggle-icon";
import { cn } from "../../lib/cn";
import { FieldError } from "../field-error-text";
import { FieldHelperText } from "../field-helper-text";
import { FieldClearButton } from "../field-clear-button";
import { makeClassName } from "../../lib/make-class-name";
import { roundedStyles } from "../../lib/rounded";
import { labelStyles } from "../../lib/label-size";

const inputStyles = {
  base: "flex items-center peer w-full transition duration-200 border focus-within:ring-[0.8px] ring-[0.6px] hover:border-primary focus-within:border-primary focus-within:ring-primary [&_input::placeholder]:opacity-60",
  disabled: "!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted",
  error:
    "!border-red hover:!border-red focus-within:!border-red !ring-red !bg-transparent",
  size: {
    sm: "px-2 py-1 text-xs h-8",
    md: "px-3.5 py-2 text-sm h-10",
    lg: "px-4 py-2 text-base h-12",
    xl: "px-5 py-2.5 text-base h-14",
  },
  rounded: roundedStyles,
  variant: {
    text: "border-transparent ring-transparent bg-transparent",
    flat: "border-0 ring-muted/70 focus-within:ring-[1.8px] focus-within:bg-transparent bg-muted/70 backdrop-blur",
    outline: "border border-muted ring-muted bg-transparent",
  },
};

// actual input field styles
const inputFieldStyles = {
  base: "w-full border-0 bg-transparent [font-size:inherit] p-0 focus:outline-none focus:ring-0",
  reset:
    "[&::-ms-clear]:hidden [&::-ms-reveal]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
  disabled: "cursor-not-allowed placeholder:text-muted-foreground",
  clearable:
    "[&:placeholder-shown~.input-clear-btn]:opacity-0 [&:placeholder-shown~.input-clear-btn]:invisible [&:not(:placeholder-shown)~.input-clear-btn]:opacity-100 [&:not(:placeholder-shown)~.input-clear-btn]:visible",
  prefix: {
    size: {
      sm: "ps-1.5",
      md: "ps-2.5",
      lg: "ps-3.5",
      xl: "ps-4",
    },
  },
  suffix: {
    size: {
      sm: "pe-1.5",
      md: "pe-2.5",
      lg: "pe-3.5",
      xl: "pe-4",
    },
  },
};

export interface PasswordProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "type" | "prefix"
  > {
  /** The variants of the component are: */
  variant?: keyof typeof inputStyles.variant;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof inputStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputStyles.rounded;
  /** Set input placeholder text */
  placeholder?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set label font weight */
  labelWeight?: keyof typeof labelStyles.weight;
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** The prefix is design for adding any icon or text on the Input field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** It is the password visibility toggle icon.  */
  visibilityToggleIcon?(visible: boolean): React.ReactNode;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Override default CSS style of label */
  labelClassName?: string;
  /** Override default CSS style of input */
  inputClassName?: string;
  /** Override default CSS style of prefix */
  prefixClassName?: string;
  /** External visibility state */
  isPasswordVisible?: boolean;
  /** Override default CSS style of password show/hide toggle icon */
  visibilityToggleIconClassName?: string;
  /** Override default CSS style of helperText */
  helperClassName?: string;
  /** Override default CSS style of error message */
  errorClassName?: string;
  /** Add custom classes to the root of the component */
  className?: string;
  /** hide visibility toggle icon */
  hideVisibilityToggleIcon?: boolean;
}

export const Password = forwardRef<HTMLInputElement, PasswordProps>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      rounded = "md",
      disabled,
      placeholder,
      label,
      labelWeight = "medium",
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
      onFocus,
      onBlur,
      ...inputProps
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);
    const isVisible = isPasswordVisible ?? visible;

    return (
      <div
        className={cn(
          makeClassName(`password-root`),
          "flex flex-col",
          className
        )}
      >
        <label className="block">
          {label ? (
            <span
              className={cn(
                makeClassName(`password-label`),
                "block",
                labelStyles.size[size],
                labelStyles.weight[labelWeight],
                disabled && "text-muted-foreground",
                labelClassName
              )}
            >
              {label}
            </span>
          ) : null}

          <span
            className={cn(
              makeClassName(`password-container`),
              inputStyles.base,
              inputStyles.size[size],
              inputStyles.rounded[rounded],
              inputStyles.variant[variant],
              disabled && inputStyles.disabled,
              error && inputStyles.error,
              inputClassName
            )}
          >
            {prefix ? (
              <span
                className={cn(
                  makeClassName(`password-prefix`),
                  "whitespace-nowrap leading-normal",
                  prefixClassName
                )}
              >
                {prefix}
              </span>
            ) : null}

            <input
              ref={ref}
              type={isVisible ? "text" : "password"}
              disabled={disabled}
              readOnly={readOnly}
              spellCheck="false"
              // placeholder is a required prop for the clearable input component even if the user does not set any
              placeholder={placeholder || "Screen reader only"}
              className={cn(
                makeClassName(`password-field`),
                inputFieldStyles.base,
                inputFieldStyles.reset,
                // it's important we are using placeholder-shown pseudo class to control input clear icon btn
                !placeholder && "placeholder-shown:placeholder:opacity-0",
                disabled && inputFieldStyles.disabled,
                clearable && inputFieldStyles.clearable,
                prefix && inputFieldStyles.prefix.size[size],
                visibilityToggleIcon && inputFieldStyles.suffix.size[size]
              )}
              {...inputProps}
            />

            {clearable ? (
              <FieldClearButton size={size} onClick={onClear} hasSuffix />
            ) : null}

            {hideVisibilityToggleIcon ? null : (
              <span
                role="button"
                tabIndex={0}
                className={cn(
                  makeClassName(`password-toggle-icon`),
                  "whitespace-nowrap leading-normal cursor-pointer",
                  disabled && "text-muted-foreground",
                  visibilityToggleIconClassName
                )}
                onClick={() => {
                  if (disabled) return false;
                  setVisible(!visible);
                }}
              >
                {visibilityToggleIcon ? (
                  visibilityToggleIcon(visible)
                ) : (
                  <PasswordToggleIcon isVisible={visible} iconSize={size} />
                )}
              </span>
            )}
          </span>
        </label>

        {!error && helperText ? (
          <FieldHelperText
            size={size}
            className={cn(
              makeClassName(`password-helper-text`),
              disabled && "text-muted-foreground",
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
            className={cn(makeClassName(`password-error-text`), errorClassName)}
          />
        ) : null}
      </div>
    );
  }
);

Password.displayName = "Password";
