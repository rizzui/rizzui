import React, { useMemo } from 'react';
import {
  Listbox,
  Label,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from '@headlessui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { FieldError } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { ChevronDownIcon } from '../../icons/chevron-down';
import { roundedStyles } from '../../lib/rounded';
import { labelStyles } from '../../lib/label-size';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import { makeClassName } from '../../lib/make-class-name';
import { SearchIcon } from '../../icons/search';
import {
  TheirPlacementType,
  displayValueFn,
  getOptionDisplayValueFn,
  getOptionValueFn,
  isEmpty,
  isNumber,
  ourPlacementObject,
  preventHeadlessUIKeyboardInterActions,
} from './select.lib';

const selectStyles = {
  base: 'flex items-center peer border hover:border-primary w-full transition duration-200 ring-[0.6px] hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary',
  disabled:
    '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted text-muted-foreground placeholder:text-muted-foreground !ring-muted',
  error: '!border-red hover:!border-red focus:!border-red !ring-red',
  size: {
    sm: 'px-2 py-1 text-xs h-8',
    md: 'px-3 py-2 text-sm h-10',
    lg: 'px-4 py-2 text-base h-12',
    xl: 'px-5 py-2.5 text-base h-14',
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
  base: `${dropdownStyles.base} overflow-auto w-[var(--button-width)] !outline-none !ring-0 m-0 [&>li]:!m-0 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_rgba(0,0,0,0)] [-ms-overflow-style:none] [&::-webkit-scrollbar-track]:shadow-none [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-lg`,
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
  inPortal: '[--anchor-max-height:256px;]',
  notInPortal: 'absolute z-10 h-[256px] start-0 top-full mt-1.5',
};

const searchStyles = {
  base: 'relative mb-2 block group [&.sticky]:mb-0',
  inputBase: 'px-10 placeholder:text-muted-foreground',
  prefix:
    'absolute z-10 start-1 top-5 group-[.sticky]:top-7 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  suffix:
    'absolute z-10 end-1 top-5 group-[.sticky]:top-7 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  stickyContainer: 'sticky top-0 z-10 pt-2 -translate-y-2',
  stickyContent: 'bg-background rounded-md',
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
  /** Whether the select is focused by default or not */
  autoFocus?: boolean;
  /** clear event */
  onClear?: (event: React.MouseEvent) => void;
  /** Event of the searchable input when change */
  onSearchChange?: (value: string) => void;
  /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: React.ReactNode;
  /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
  suffix?: React.ReactNode;
  /** Whether the select is searchable or not */
  searchable?: boolean;
  /** The type of the search input */
  searchType?: 'text' | 'search';
  /** The props for the search input */
  searchProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** The prefix for the search input */
  searchPrefix?: React.ReactNode;
  /** The suffix for the search input */
  searchSuffix?: React.ReactNode;
  /** Whether the search input is disabled */
  searchDisabled?: boolean;
  /** Whether the search input is readonly */
  searchReadOnly?: boolean;
  /** Add custom classes for search input */
  searchClassName?: string;
  /** Set search input placeholder text */
  searchPlaceHolder?: string;
  /** Add search prefix custom style */
  searchPrefixClassName?: string;
  /** Add search suffix custom style */
  searchSuffixClassName?: string;
  /** Add search container custom style */
  searchContainerClassName?: string;
  /** Whether it is rendered on the portal or not */
  inPortal?: boolean;
  /** Show error message using this prop */
  error?: string;
  /** Add helper text. It could be string or a React component */
  helperText?: React.ReactNode;
  /** Add custom classes for container */
  className?: string;
  /** Define the position of dropdown */
  placement?: TheirPlacementType;
  /** Define the gap between the selected and dropdown */
  gap?: number;
  /** Whether it is rendered on the modal or not */
  modal?: boolean;
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
  /** The key to search in the options */
  searchByKey?: string;
  /** Disable default filter */
  disableDefaultFilter?: boolean;
  /** Whether the search input is sticky or not */
  stickySearch?: boolean;
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
  autoFocus,
  helperText,
  prefix = null,
  placeholder = 'Select...',
  inPortal = true,
  modal = false,
  displayValue = displayValueFn,
  getOptionDisplayValue = getOptionDisplayValueFn,
  getOptionValue = getOptionValueFn,
  value,
  onClear,
  clearable,
  placement = 'bottom-start',
  gap = 6,
  size = 'md',
  rounded = 'md',
  shadow = 'md',
  variant = 'outline',
  suffix = <ChevronDownIcon strokeWidth="2" className="size-4" />,
  searchable,
  searchType,
  searchProps,
  stickySearch,
  searchPrefix = <SearchIcon strokeWidth="2" className="size-4" />,
  searchSuffix = null,
  searchDisabled,
  searchReadOnly,
  onSearchChange,
  searchPlaceHolder = 'Search...',
  className,
  searchByKey = 'label',
  labelClassName,
  selectClassName,
  optionClassName,
  suffixClassName,
  prefixClassName,
  errorClassName,
  helperClassName,
  searchClassName,
  dropdownClassName,
  disableDefaultFilter,
  searchPrefixClassName,
  searchSuffixClassName,
  searchContainerClassName,
  ...props
}: SelectProps<OptionType>) {
  const emptyValue = !isNumber(value) && isEmpty(value);
  const [searchQuery, setSearchQuery] = React.useState('');

  function handleOnClear(e: React.MouseEvent) {
    e.stopPropagation();
    setSearchQuery(() => '');
    onClear && onClear(e);
  }

  const filteredOptions = useMemo(
    () =>
      disableDefaultFilter
        ? options
        : options.filter((item) =>
            item[searchByKey].toLowerCase().includes(searchQuery.toLowerCase())
          ),
    [searchQuery, options]
  );

  return (
    <div
      className={cn(
        makeClassName(`select-root`),
        'grid w-full grid-cols-1',
        className
      )}
    >
      <Listbox value={value} disabled={disabled} {...props}>
        {({ open }) => (
          <div>
            {label && (
              <Label
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
              </Label>
            )}

            <div className={cn('h-full', !inPortal && 'relative')}>
              <ListboxButton
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
                autoFocus={autoFocus}
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
                    as={'span'}
                    size={size}
                    onClick={handleOnClear}
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
              </ListboxButton>

              {open ? (
                <Transition
                  as="div"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ListboxOptions
                    modal={modal}
                    portal={inPortal}
                    {...(inPortal && {
                      anchor: {
                        to: ourPlacementObject[placement],
                        gap: gap,
                      },
                    })}
                    className={cn(
                      makeClassName(`select-options`),
                      optionListStyles.base,
                      optionListStyles.shadow[shadow],
                      optionListStyles.rounded[rounded],
                      inPortal
                        ? optionListStyles.inPortal
                        : optionListStyles.notInPortal,
                      dropdownClassName
                    )}
                  >
                    {searchable && (
                      <div
                        className={cn(
                          stickySearch && searchStyles.stickyContainer,
                          searchContainerClassName
                        )}
                      >
                        <div
                          className={cn(
                            searchStyles.base,
                            stickySearch && searchStyles.stickyContent
                          )}
                        >
                          {searchPrefix ? (
                            <span
                              className={cn(
                                makeClassName(`select-prefix`),
                                searchStyles.prefix,
                                searchPrefix && selectStyles.prefix.size[size],
                                searchPrefixClassName
                              )}
                            >
                              {searchPrefix}
                            </span>
                          ) : null}
                          <input
                            type={searchType}
                            spellCheck={false}
                            value={searchQuery}
                            disabled={searchDisabled}
                            readOnly={searchReadOnly}
                            placeholder={searchPlaceHolder}
                            onChange={(e) => {
                              setSearchQuery(e.target.value);
                              onSearchChange && onSearchChange(e.target.value);
                            }}
                            // prevent headless ui from handling these keys
                            onKeyDown={(e) =>
                              preventHeadlessUIKeyboardInterActions(e)
                            }
                            className={cn(
                              makeClassName(`select-search`),
                              selectStyles.base,
                              selectStyles.size[size],
                              selectStyles.variant[variant],
                              selectStyles.rounded[rounded],
                              searchDisabled && selectStyles.disabled,
                              searchStyles.inputBase,
                              searchClassName
                            )}
                            {...searchProps}
                          />

                          {searchSuffix ? (
                            <span
                              className={cn(
                                makeClassName(`select-suffix`),
                                searchStyles.suffix,
                                searchSuffix && selectStyles.suffix.size[size],
                                searchSuffixClassName
                              )}
                            >
                              {searchSuffix}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    )}
                    {filteredOptions.map((option) => (
                      <ListboxOption
                        key={option.value}
                        {...(option?.disabled && {
                          disabled: option?.disabled,
                        })}
                        className={({ focus }) =>
                          cn(
                            makeClassName(`select-option`),
                            'flex w-full items-center px-3 py-1.5',
                            focus && 'bg-muted/70',
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
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </Transition>
              ) : null}
            </div>
          </div>
        )}
      </Listbox>

      {!error && helperText ? (
        <FieldHelperText size={size} className={helperClassName}>
          {helperText}
        </FieldHelperText>
      ) : null}

      {error ? (
        <FieldError size={size} error={error} className={errorClassName} />
      ) : null}
    </div>
  );
}

Select.displayName = 'Select';
