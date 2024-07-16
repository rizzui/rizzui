import React from "react";
import PhoneInput from "react-phone-input-2";
import type { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn, FieldError, FieldHelperText, FieldClearButton } from "rizzui";

const labelClasses = {
  size: {
    sm: "text-xs mb-1",
    md: "text-sm mb-1.5",
    lg: "text-sm mb-1.5",
    xl: "text-base mb-2",
  },
};

const inputClasses = {
  base: "block peer !w-full focus:outline-none transition duration-200 disabled:!bg-gray-100 disabled:!text-gray-500 disabled:placeholder:!text-gray-400 disabled:!cursor-not-allowed disabled:!border-gray-200",
  error:
    "!border-red hover:enabled:!border-red focus:enabled:!border-red focus:!ring-red",
  size: {
    sm: "py-1 !text-xs !h-8 !leading-[32px]",
    md: "py-2 !text-sm !h-10 !leading-[40px]",
    lg: "py-2 !text-base !h-12 !leading-[48px]",
    xl: "py-2.5 !text-base !h-14 !leading-[56px]",
  },
  rounded: {
    none: "!rounded-none",
    sm: "!rounded-sm",
    md: "!rounded-md",
    lg: "!rounded-lg",
    pill: "!rounded-full",
  },
  variant: {
    flat: "!border-0 focus:ring-2 placeholder:!opacity-90 read-only:focus:!ring-0 !bg-primary-lighter/70 hover:enabled:!bg-primary-lighter/90 focus:!ring-primary/30 !text-primary-dark",
    outline:
      "!bg-transparent focus:ring-[0.6px] !border !border-muted read-only:!border-muted read-only:focus:!ring-0 placeholder:!text-gray-500 hover:!border-primary focus:!border-primary focus:!ring-primary",
    text: "!border-0 focus:ring-2 !bg-transparent hover:!text-primary-dark focus:!ring-primary/30 !text-primary",
  },
};

const buttonClasses = {
  base: "!border-0 !bg-transparent !static [&>.selected-flag]:!absolute [&>.selected-flag]:!top-[1px] [&>.selected-flag]:!bottom-[1px] [&>.selected-flag]:!left-[1px] [&>.selected-flag.open]:!bg-transparent [&>.selected-flag:hover]:!bg-transparent [&>.selected-flag:focus]:!bg-transparent",
  size: {
    sm: "[&>.selected-flag]:!h-[30px]",
    md: "[&>.selected-flag]:!h-[38px]",
    lg: "[&>.selected-flag]:!h-[46px]",
    xl: "[&>.selected-flag]:!h-[54px]",
  },
};

const dropdownClasses = {
  base: "!shadow-xl !text-sm !max-h-[216px] !w-full !my-1.5 !bg-gray-50 [&>.no-entries-message]:!text-center [&>.divider]:!border-muted",
  rounded: {
    none: "!rounded-sm",
    sm: "!rounded",
    DEFAULT: "!rounded-md",
    lg: "!rounded-lg",
    pill: "!rounded-xl",
  },
  searchBox:
    "!pr-2.5 !bg-gray-50 [&>.search-box]:!w-full [&>.search-box]:!m-0 [&>.search-box]:!px-3 [&>.search-box]:!py-1 [&>.search-box]:!text-sm [&>.search-box]:!capitalize [&>.search-box]:!h-9 [&>.search-box]:!leading-[36px] [&>.search-box]:!rounded-md [&>.search-box]:!bg-transparent [&>.search-box]:!border-muted [&>.search-box:focus]:!border-gray-400/70 [&>.search-box:focus]:!ring-0 [&>.search-box]:placeholder:!text-gray-500",
  highlightListColor:
    "[&>li.country.highlight]:!bg-primary-lighter/70 [&>li.country:hover]:!bg-primary-lighter/70",
};

const clearIconClasses = {
  base: "absolute right-2 group-hover/phone-number:visible group-hover/phone-number:translate-x-0 group-hover/phone-number:opacity-100",
  position: {
    sm: "top-[9px]",
    DEFAULT: "top-3",
    lg: "top-4",
    xl: "top-5",
  },
};

export interface PhoneNumberProps
  extends Omit<
    PhoneInputProps,
    | "inputClass"
    | "buttonClass"
    | "containerClass"
    | "dropdownClass"
    | "searchClass"
    | "enableSearch"
    | "disableSearchIcon"
  > {
  /** Set field label */
  label?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** The size of the component. `"sm"` is equivalent to the dense input styling. */
  size?: keyof typeof inputClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** add clearable option */
  clearable?: boolean;
  /** add search filed at the top of dropdown list */
  enableSearch?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for the input field */
  inputClassName?: string;
  /** Add custom classes for dropdown button */
  buttonClassName?: string;
  /** Add custom classes for dropdown */
  dropdownClassName?: string;
  /** Add custom classes for dropdown's search */
  searchClassName?: string;
  /** This prop allows you to customize the helper message style */
  helperClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Add custom classes into the component wrapper for extra style like spacing */
  className?: string;
}

const PhoneNumber = ({
  size = "md",
  rounded = "md",
  variant = "outline",
  label,
  helperText,
  error,
  clearable,
  onClear,
  enableSearch,
  labelClassName,
  inputClassName,
  buttonClassName,
  dropdownClassName,
  searchClassName,
  helperClassName,
  errorClassName,
  className,
  ...props
}: PhoneNumberProps) => (
  <div className={cn("rizzui-phone-number", className)}>
    {label && (
      <label
        className={cn(
          "block font-medium",
          labelClasses.size[size],
          labelClassName,
        )}
      >
        {label}
      </label>
    )}
    <div className="relative group/phone-number">
      <PhoneInput
        inputClass={cn(
          inputClasses.base,
          inputClasses.size[size],
          inputClasses.rounded[rounded],
          inputClasses.variant[variant],
          error && inputClasses.error,
          inputClassName,
        )}
        buttonClass={cn(
          buttonClasses.base,
          buttonClasses.size[size],
          // @ts-ignore
          props.inputProps?.disabled && "pointer-events-none",
          // @ts-ignore
          props.inputProps?.readOnly && "pointer-events-none",
          buttonClassName,
        )}
        dropdownClass={cn(
          dropdownClasses.base,
          dropdownClasses.rounded[rounded],
          dropdownClasses.highlightListColor,
          dropdownClassName,
        )}
        searchClass={cn(dropdownClasses.searchBox, searchClassName)}
        enableSearch={enableSearch}
        disableSearchIcon
        {...props}
      />
      {clearable && (
        <FieldClearButton
          size={size}
          onClick={onClear}
          className={cn(clearIconClasses.base, clearIconClasses.position[size])}
        />
      )}
    </div>
    {!error && helperText && (
      <FieldHelperText size={size} className={helperClassName}>
        {helperText}
      </FieldHelperText>
    )}
    {error && (
      <FieldError size={size} error={error} className={errorClassName} />
    )}
  </div>
);

PhoneNumber.displayName = "PhoneNumber";
export default PhoneNumber;

// Example
export function PhoneNumberDefault() {
  const [state, setState] = React.useState("");
  return (
    <PhoneNumber
      value={state}
      country="us"
      label="Phone Number"
      preferredCountries={["us"]}
      onChange={(value: string) => setState(value)}
      clearable={!!state}
      onClear={() => {
        setState("");
      }}
      className="[&_li]:!my-0"
    />
  );
}
