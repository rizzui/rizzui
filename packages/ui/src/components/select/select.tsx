import { Listbox, Transition } from '@headlessui/react';
import {
  type Placement,
  flip,
  shift,
  offset,
  autoUpdate,
  useFloating,
  FloatingPortal,
} from '@floating-ui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { useElementSize } from '../../lib/use-element-size';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { ChevronDownIcon } from '../../icons/chevron-down';
import { roundedStyles } from '../../lib/rounded';
import { labelStyles } from '../../lib/label-size';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import { makeClassName } from '../../lib/make-class-name';
import {
  displayValueFn,
  getOptionDisplayValueFn,
  getOptionValueFn,
  isEmpty,
  isNumber,
} from './select.lib';
import { Fragment } from 'react';

const selectStyles = {
  base: 'flex items-center peer border hover:border-primary w-full transition duration-200 ring-[0.6px] hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary',
  disabled:
    '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted text-muted-foreground placeholder:text-muted-foreground !ring-muted',
  error: '!border-red hover:!border-red focus:!border-red !ring-red',
  size: {
    sm: 'px-2 py-1 text-xs h-8 leading-[32px]',
    md: 'px-3 py-2 text-sm h-10 leading-[40px]',
    lg: 'px-4 py-2 text-base h-12 leading-[48px]',
    xl: 'px-5 py-2.5 text-base h-14 leading-[56px]',
  },
  rounded: roundedStyles,
  prefix: {
    size: {
      sm: 'ps-1.5',
      md: 'ps-2.5',
      lg: 'ps-3.5',
      xl: 'ps-4',
    },
  },
  suffix: {
    size: {
      sm: 'pe-1.5',
      md: 'pe-2.5',
      lg: 'pe-3.5',
      xl: 'pe-4',
    },
  },
  variant: {
    text: 'border-transparent ring-transparent bg-transparent',
    flat: 'border-0 ring-muted/70 hover:ring-[1.8px] focus:ring-[1.8px] hover:bg-transparent focus:bg-transparent bg-muted/70 backdrop-blur',
    outline: 'border border-muted ring-muted bg-transparent',
  },
};

const optionListStyles = {
  base: `${dropdownStyles.base} max-h-[265px] w-full overflow-auto [&>ul]:!outline-none [&>ul]:!ring-0 [&>ul]:!p-0 [&>ul]:!m-0 [&>ul>li]:!m-0 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_rgba(0,0,0,0)] [-ms-overflow-style:none] [&::-webkit-scrollbar-track]:shadow-none [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-lg`,
  shadow: dropdownStyles.shadow,
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-xl',
  },
  item: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-base',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-[4px]',
      lg: 'rounded-md',
      pill: 'rounded-lg',
    },
  },
};

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
  [key: string]: any;
};

export type SelectProps<SelectOption> = ExtractProps<typeof Listbox> & {
  /** Options for select */
  options: SelectOption[];
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Set field label */
  label?: React.ReactNode;
  /** Set font weight for label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** Set select placeholder text */
  placeholder?: string;
  /** The size of the component. `"sm"` is equivalent to the dense select styling. */
  size?: keyof typeof selectStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof selectStyles.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof selectStyles.variant;
  /** The shadow variants of the component are: */
  shadow?: keyof typeof dropdownStyles.shadow;
  /** add clearable option */
  clearable?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
  suffix?: React.ReactNode;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Add custom classes for container */
  className?: string;
  /** Add custom classes for container */
  placement?: Placement;
  /** Use labelClassName prop to do some addition style for the field label */
  labelClassName?: string;
  /** Add custom classes for select */
  selectClassName?: string;
  /** Add custom classes to select option */
  optionClassName?: string;
  /** Override default CSS style of prefix */
  prefixClassName?: string;
  /** Override default CSS style of suffix */
  suffixClassName?: string;
  /** This prop allows you to customize the error message style */
  errorClassName?: string;
  /** This prop allows you to customize the helper text message style */
  helperClassName?: string;
  /** This prop allows you to customize the Options Wrapper style */
  dropdownClassName?: string;
  /**
   * A function to determine the display value of the selected item.
   * @param value - The value of the selected item.
   * @returns React node to display for the selected item.
   */
  displayValue?(value: ExtractProps<typeof Listbox>['value']): React.ReactNode;
  /**
   * Use this function when you want to display something other than the default displayValue.
   * @param option - The SelectOption for which to get the display value.
   * @returns React node to display for the specified option.
   */
  getOptionDisplayValue?(option: SelectOption): React.ReactNode;
  /**
   * Select whether the label or value should be returned in the onChange method.
   * @param option - The SelectOption for which to get the value.
   * @returns The selected value from the specified option.
   */
  getOptionValue?: (
    option: SelectOption
  ) => SelectOption[keyof SelectOption] | SelectOption;
};

export function Select<OptionType extends SelectOption>({
  label,
  labelWeight = 'medium',
  error,
  options,
  disabled,
  helperText,
  prefix = null,
  placeholder = 'Select...',
  displayValue = displayValueFn,
  getOptionDisplayValue = getOptionDisplayValueFn,
  getOptionValue = getOptionValueFn,
  value,
  onClear,
  clearable,
  placement = 'bottom-start',
  size = 'md',
  rounded = 'md',
  shadow = 'md',
  variant = 'outline',
  suffix = <ChevronDownIcon strokeWidth="2" className="h-4 w-4" />,
  className,
  labelClassName,
  selectClassName,
  optionClassName,
  suffixClassName,
  prefixClassName,
  errorClassName,
  helperClassName,
  dropdownClassName,
  ...props
}: SelectProps<OptionType>) {
  const [ref, { width }] = useElementSize();
  const { x, y, refs, strategy } = useFloating({
    placement,
    middleware: [
      flip(),
      shift(),
      offset({
        mainAxis: 6,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const emptyValue = !isNumber(value) && isEmpty(value);

  return (
    <div
      ref={refs.setReference}
      className={cn(
        makeClassName(`select-root`),
        'grid w-full grid-cols-1',
        className
      )}
    >
      <Listbox value={value} disabled={disabled} {...props}>
        {({ open }) => (
          <>
            {label && (
              <Listbox.Label
                className={cn(
                  makeClassName(`select-label`),
                  'block',
                  labelStyles.size[size],
                  labelStyles.weight[labelWeight],
                  disabled && 'text-muted-foreground',
                  labelClassName
                )}
              >
                {label}
              </Listbox.Label>
            )}

            <div ref={ref} className={cn('h-full')}>
              <Listbox.Button
                className={cn(
                  makeClassName(`select-button`),
                  selectStyles.base,
                  selectStyles.variant[variant],
                  selectStyles.size[size],
                  selectStyles.rounded[rounded],
                  prefix && selectStyles.prefix.size[size],
                  suffix && selectStyles.suffix.size[size],
                  disabled && selectStyles.disabled,
                  error && emptyValue && selectStyles.error,
                  selectClassName
                )}
              >
                {prefix ? (
                  <span
                    className={cn(
                      makeClassName(`select-prefix`),
                      'block whitespace-nowrap leading-normal',
                      prefixClassName
                    )}
                  >
                    {prefix}
                  </span>
                ) : null}

                <span
                  className={cn(
                    makeClassName(`select-value`),
                    'block w-full truncate text-left rtl:text-right',
                    emptyValue && 'text-muted-foreground',
                    prefix && selectStyles.prefix.size[size],
                    suffix && selectStyles.suffix.size[size]
                  )}
                >
                  {emptyValue ? placeholder : displayValue(value)}
                </span>

                {clearable && !emptyValue ? (
                  <FieldClearButton
                    size={size}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClear && onClear(e);
                    }}
                    hasSuffix={Boolean(suffix)}
                  />
                ) : null}

                {suffix ? (
                  <span
                    className={cn(
                      makeClassName(`select-suffix`),
                      'whitespace-nowrap leading-normal transition-transform duration-200',
                      open && 'rotate-180',
                      suffixClassName
                    )}
                  >
                    {suffix}
                  </span>
                ) : null}
              </Listbox.Button>

              <FloatingPortal>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options
                    ref={refs.setFloating}
                    className={cn(
                      makeClassName(`select-options`),
                      optionListStyles.base,
                      optionListStyles.shadow[shadow],
                      optionListStyles.rounded[rounded],
                      dropdownClassName
                    )}
                    style={{
                      width,
                      position: strategy,
                      top: y ?? 0,
                      left: x ?? 0,
                    }}
                  >
                    {options.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        {...(option?.disabled && {
                          disabled: option?.disabled,
                        })}
                        className={({ active }) =>
                          cn(
                            makeClassName(`select-option`),
                            'flex w-full items-center px-3 py-1.5',
                            active && 'bg-muted/70',
                            rounded && optionListStyles.item.rounded[rounded],
                            size && optionListStyles.item.size[size],
                            !option?.disabled && 'cursor-pointer',
                            optionClassName
                          )
                        }
                        value={getOptionValue(option)}
                      >
                        {({ selected }) => (
                          <div
                            className={cn(
                              selected ? 'font-medium' : 'text-foreground'
                            )}
                          >
                            {getOptionDisplayValue(option)}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>

                <span className="sr-only">rizzui - select</span>
              </FloatingPortal>
            </div>
          </>
        )}
      </Listbox>

      {!error && helperText ? (
        <FieldHelperText size={size} className={helperClassName}>
          {helperText}
        </FieldHelperText>
      ) : null}

      {error && emptyValue ? (
        <FieldError size={size} error={error} className={errorClassName} />
      ) : null}
    </div>
  );
}

Select.displayName = 'Select';
