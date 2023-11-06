import React from "react";
import PhoneInput from "react-phone-input-2";
import type { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { cn, FieldError, FieldHelperText, FieldClearButton } from "rizzui";

const labelClasses = {
  size: {
    sm: "text-xs mb-1",
    DEFAULT: "text-sm mb-1.5",
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
    DEFAULT: "py-2 !text-sm !h-10 !leading-[40px]",
    lg: "py-2 !text-base !h-12 !leading-[48px]",
    xl: "py-2.5 !text-base !h-14 !leading-[56px]",
  },
  rounded: {
    none: "!rounded-none",
    sm: "!rounded-sm",
    DEFAULT: "!rounded-md",
    lg: "!rounded-lg",
    pill: "!rounded-full",
  },
  variant: {
    active: {
      base: "!border focus:ring-[0.6px] !bg-gray-50 placeholder:!opacity-80 read-only:focus:!ring-0",
      color: {
        DEFAULT:
          "!border-gray-900 focus:enabled:!border-gray-950 focus:!ring-gray-950 !text-gray-950",
        primary:
          "!border-primary focus:enabled:!border-primary focus:!ring-primary !text-primary-dark",
        secondary:
          "!border-secondary focus:enabled:!border-secondary focus:!ring-secondary !text-secondary-dark",
        danger:
          "!border-red focus:enabled:!border-red focus:!ring-red !text-red-dark",
        info: "!border-blue focus:enabled:!border-blue focus:!ring-blue !text-blue-dark",
        success:
          "!border-green focus:enabled:!border-green focus:!ring-green !text-green-dark",
        warning:
          "!border-orange focus:enabled:!border-orange-dark focus:!ring-orange-dark !text-orange-dark",
      },
    },
    flat: {
      base: "!border-0 focus:ring-2 placeholder:!opacity-90 read-only:focus:!ring-0",
      color: {
        DEFAULT:
          "!bg-gray-200/70 hover:enabled:!bg-gray-200/90 focus:!ring-gray-900/20 !text-gray-950 placeholder:!text-gray-600",
        primary:
          "!bg-primary-lighter/70 hover:enabled:!bg-primary-lighter/90 focus:!ring-primary/30 !text-primary-dark",
        secondary:
          "!bg-secondary-lighter/70 hover:enabled:!bg-secondary-lighter/90 focus:!ring-secondary/30 !text-secondary-dark",
        danger:
          "!bg-red-lighter/70 hover:enabled:!bg-red-lighter/90 focus:!ring-red/30 !text-red-dark",
        info: "!bg-blue-lighter/70 hover:enabled:!bg-blue-lighter/90 focus:!ring-blue/30 !text-blue-dark",
        success:
          "!bg-green-lighter/70 hover:enabled:!bg-green-lighter/90 focus:!ring-green/30 !text-green-dark",
        warning:
          "!bg-orange-lighter/80 hover:enabled:!bg-orange-lighter/90 focus:!ring-orange/30 !text-orange-dark",
      },
    },
    outline: {
      base: "!bg-transparent focus:ring-[0.6px] !border !border-gray-300 read-only:!border-gray-300 read-only:focus:!ring-0 placeholder:!text-gray-500",
      color: {
        DEFAULT:
          "hover:!border-gray-950 focus:!border-gray-950 focus:!ring-gray-950",
        primary:
          "hover:!border-primary focus:!border-primary focus:!ring-primary",
        secondary:
          "hover:!border-secondary focus:!border-secondary focus:!ring-secondary",
        danger: "hover:!border-red focus:!border-red focus:!ring-red",
        info: "hover:!border-blue focus:!border-blue focus:!ring-blue",
        success: "hover:!border-green focus:!border-green focus:!ring-green",
        warning: "hover:!border-orange focus:!border-orange focus:!ring-orange",
      },
    },
    text: {
      base: "!border-0 focus:ring-2 !bg-transparent",
      color: {
        DEFAULT:
          "hover:!text-gray-950 focus:!ring-gray-900/20 placeholder:!text-gray-500",
        primary:
          "hover:!text-primary-dark focus:!ring-primary/30 !text-primary",
        secondary:
          "hover:!text-secondary-dark focus:!ring-secondary/30 !text-secondary",
        danger: "hover:!text-red-600 focus:!ring-red/30 !text-red",
        info: "hover:!text-blue-dark focus:!ring-blue/30 !text-blue",
        success:
          "hover:!text-green-dark focus:!ring-green/30 !text-green placeholder:!opacity-100",
        warning:
          "hover:!text-orange-dark focus:!ring-orange/30 !text-orange placeholder:!opacity-100",
      },
    },
  },
};

const buttonClasses = {
  base: "!border-0 !bg-transparent !static [&>.selected-flag]:!absolute [&>.selected-flag]:!top-[1px] [&>.selected-flag]:!bottom-[1px] [&>.selected-flag]:!left-[1px] [&>.selected-flag.open]:!bg-transparent [&>.selected-flag:hover]:!bg-transparent [&>.selected-flag:focus]:!bg-transparent",
  size: {
    sm: "[&>.selected-flag]:!h-[30px]",
    DEFAULT: "[&>.selected-flag]:!h-[38px]",
    lg: "[&>.selected-flag]:!h-[46px]",
    xl: "[&>.selected-flag]:!h-[54px]",
  },
};

const dropdownClasses = {
  base: "!shadow-xl !text-sm !max-h-[216px] !w-full !my-1.5 !bg-gray-50 [&>.no-entries-message]:!text-center [&>.divider]:!border-gray-300",
  rounded: {
    none: "!rounded-sm",
    sm: "!rounded",
    DEFAULT: "!rounded-md",
    lg: "!rounded-lg",
    pill: "!rounded-xl",
  },
  searchBox:
    "!pr-2.5 !bg-gray-50 [&>.search-box]:!w-full [&>.search-box]:!m-0 [&>.search-box]:!px-3 [&>.search-box]:!py-1 [&>.search-box]:!text-sm [&>.search-box]:!capitalize [&>.search-box]:!h-9 [&>.search-box]:!leading-[36px] [&>.search-box]:!rounded-md [&>.search-box]:!bg-transparent [&>.search-box]:!border-gray-300 [&>.search-box:focus]:!border-gray-400/70 [&>.search-box:focus]:!ring-0 [&>.search-box]:placeholder:!text-gray-500",
  highlightListColor: {
    DEFAULT:
      "[&>li.country.highlight]:!bg-gray-100 [&>li.country:hover]:!bg-gray-100",
    primary:
      "[&>li.country.highlight]:!bg-primary-lighter/70 [&>li.country:hover]:!bg-primary-lighter/70",
    secondary:
      "[&>li.country.highlight]:!bg-secondary-lighter/70 [&>li.country:hover]:!bg-secondary-lighter/70",
    danger:
      "[&>li.country.highlight]:!bg-red-lighter/70 [&>li.country:hover]:!bg-red-lighter/70",
    info: "[&>li.country.highlight]:!bg-blue-lighter/70 [&>li.country:hover]:!bg-blue-lighter/70",
    success:
      "[&>li.country.highlight]:!bg-green-lighter/70 [&>li.country:hover]:!bg-green-lighter/70",
    warning:
      "[&>li.country.highlight]:!bg-red-lighter/80 [&>li.country:hover]:!bg-red-lighter/80",
  },
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
  /** Change input color */
  color?: keyof (typeof inputClasses.variant)["active"]["color"];
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
  size = "DEFAULT",
  rounded = "DEFAULT",
  variant = "outline",
  color = "DEFAULT",
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
      <label className={cn("block", labelClasses.size[size], labelClassName)}>
        {label}
      </label>
    )}
    <div className="relative group/phone-number">
      <PhoneInput
        inputClass={cn(
          inputClasses.base,
          inputClasses.size[size],
          inputClasses.rounded[rounded],
          inputClasses.variant[variant].base,
          inputClasses.variant[variant].color[color],
          error && inputClasses.error,
          inputClassName
        )}
        buttonClass={cn(
          buttonClasses.base,
          buttonClasses.size[size],
          // @ts-ignore
          props.inputProps?.disabled && "pointer-events-none",
          // @ts-ignore
          props.inputProps?.readOnly && "pointer-events-none",
          buttonClassName
        )}
        dropdownClass={cn(
          dropdownClasses.base,
          dropdownClasses.rounded[rounded],
          dropdownClasses.highlightListColor[color],
          dropdownClassName
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
