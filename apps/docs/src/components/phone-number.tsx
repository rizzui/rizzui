import React from 'react';
import PhoneInput from 'react-phone-input-2';
import type { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from 'rizzui/cn';
import { FieldError } from 'rizzui/field-error-text';
import { FieldHelperText } from 'rizzui/field-helper-text';
import { FieldClearButton } from 'rizzui/field-clear-button';

const labelStyles = {
  size: {
    sm: 'text-xs mb-1',
    md: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
  },
} as const;

const phoneNumber = tv({
  slots: {
    input:
      'block peer !w-full focus:outline-none transition duration-200 disabled:!bg-gray-100 disabled:!text-gray-500 disabled:placeholder:!text-gray-400 disabled:!cursor-not-allowed disabled:!border-gray-200 rounded-[var(--border-radius)]',
    button:
      '!border-0 !bg-transparent !static [&>.selected-flag]:!absolute [&>.selected-flag]:!top-[1px] [&>.selected-flag]:!bottom-[1px] [&>.selected-flag]:!left-[1px] [&>.selected-flag.open]:!bg-transparent [&>.selected-flag:hover]:!bg-transparent [&>.selected-flag:focus]:!bg-transparent',
    dropdown:
      '!shadow-xl !text-sm !max-h-[216px] !w-full !my-1.5 !bg-gray-50 [&>.no-entries-message]:!text-center [&>.divider]:!border-muted rounded-[var(--border-radius)] [&>li.country.highlight]:!bg-primary-lighter/70 [&>li.country:hover]:!bg-primary-lighter/70',
    searchBox:
      '!pr-2.5 !bg-gray-50 [&>.search-box]:!w-full [&>.search-box]:!m-0 [&>.search-box]:!px-3 [&>.search-box]:!py-1 [&>.search-box]:!text-sm [&>.search-box]:!capitalize [&>.search-box]:!h-9 [&>.search-box]:!leading-[36px] [&>.search-box]:!rounded-md [&>.search-box]:!bg-transparent [&>.search-box]:!border-muted [&>.search-box:focus]:!border-gray-400/70 [&>.search-box:focus]:!ring-0 [&>.search-box]:placeholder:!text-gray-500',
    label: '',
    clearButton:
      'absolute right-2 group-hover/phone-number:visible group-hover/phone-number:translate-x-0 group-hover/phone-number:opacity-100',
  },
  variants: {
    variant: {
      flat: {
        input:
          '!border-0 focus:ring-2 placeholder:!opacity-90 read-only:focus:!ring-0 !bg-primary-lighter/70 hover:enabled:!bg-primary-lighter/90 focus:!ring-primary/30 !text-primary-dark',
      },
      outline: {
        input:
          '!bg-transparent focus:ring-[0.6px] !border !border-muted read-only:!border-muted read-only:focus:!ring-0 placeholder:!text-gray-500 hover:!border-primary focus:!border-primary focus:!ring-primary',
      },
      text: {
        input:
          '!border-0 focus:ring-2 !bg-transparent hover:!text-primary-dark focus:!ring-primary/30 !text-primary',
      },
    },
    size: {
      sm: {
        input: 'py-1 !text-xs !h-8 !leading-[32px]',
        button: '[&>.selected-flag]:!h-[30px]',
        clearButton: 'top-[9px]',
        label: labelStyles.size.sm,
      },
      md: {
        input: 'py-2 !text-sm !h-10 !leading-[40px]',
        button: '[&>.selected-flag]:!h-[38px]',
        clearButton: 'top-3',
        label: labelStyles.size.md,
      },
      lg: {
        input: 'py-2 !text-base !h-12 !leading-[48px]',
        button: '[&>.selected-flag]:!h-[46px]',
        clearButton: 'top-4',
        label: labelStyles.size.lg,
      },
    },
    error: {
      true: {
        input:
          '!border-red hover:enabled:!border-red focus:enabled:!border-red focus:!ring-red',
      },
    },
    disabled: {
      true: {
        button: 'pointer-events-none',
      },
    },
    readOnly: {
      true: {
        button: 'pointer-events-none',
      },
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

export interface PhoneNumberProps
  extends Omit<
    PhoneInputProps,
    | 'inputClass'
    | 'buttonClass'
    | 'containerClass'
    | 'dropdownClass'
    | 'searchClass'
    | 'enableSearch'
    | 'disableSearchIcon'
  > {
  label?: React.ReactNode;
  error?: string;
  size?: VariantProps<typeof phoneNumber>['size'];
  variant?: VariantProps<typeof phoneNumber>['variant'];
  clearable?: boolean;
  enableSearch?: boolean;
  onClear?: (event: React.MouseEvent) => void;
  labelClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  dropdownClassName?: string;
  searchClassName?: string;
  helperClassName?: string;
  errorClassName?: string;
  helperText?: React.ReactNode;
  className?: string;
}

const PhoneNumber = ({
  size = 'md',
  variant = 'outline',
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
}: PhoneNumberProps) => {
  const inputProps = (props.inputProps || {}) as {
    disabled?: boolean;
    readOnly?: boolean;
  };

  const {
    input: inputClass,
    button: buttonClass,
    dropdown: dropdownClass,
    searchBox: searchBoxClass,
    label: labelClass,
    clearButton: clearButtonClass,
  } = phoneNumber({
    size,
    variant,
    error: Boolean(error),
    disabled: Boolean(inputProps.disabled),
    readOnly: Boolean(inputProps.readOnly),
  });

  return (
    <div className={cn('rizzui-phone-number', className)}>
      {label && (
        <label
          className={cn('block font-medium', labelClass(), labelClassName)}
        >
          {label}
        </label>
      )}
      <div className="relative group/phone-number">
        <PhoneInput
          inputClass={cn(inputClass(), inputClassName)}
          buttonClass={cn(buttonClass(), buttonClassName)}
          dropdownClass={cn(dropdownClass(), dropdownClassName)}
          searchClass={cn(searchBoxClass(), searchClassName)}
          enableSearch={enableSearch}
          disableSearchIcon
          {...props}
        />
        {clearable && (
          <FieldClearButton
            size={size}
            onClick={onClear}
            className={clearButtonClass()}
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
};

PhoneNumber.displayName = 'PhoneNumber';
export default PhoneNumber;

// Example
export function PhoneNumberDefault() {
  const [state, setState] = React.useState('');
  return (
    <PhoneNumber
      value={state}
      country="us"
      label="Phone Number"
      preferredCountries={['us']}
      onChange={(value: string) => setState(value)}
      clearable={!!state}
      onClear={() => {
        setState('');
      }}
      className="[&_li]:!my-0"
    />
  );
}
