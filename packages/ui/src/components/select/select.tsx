import {
  useState,
  useCallback,
  type ReactNode,
  type MouseEvent,
  type InputHTMLAttributes,
} from 'react';
import {
  Listbox,
  Label,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';
import { FieldErrorText } from '../field-error-text';
import { FieldHelperText } from '../field-helper-text';
import { FieldClearButton } from '../field-clear-button';
import { ChevronDownIcon } from '../../icons/chevron-down';
import { labelStyles } from '../../lib/label-size';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import { SearchIcon } from '../../icons/search';
import {
  type TheirPlacementType,
  displayValueFn,
  getOptionDisplayValueFn,
  getOptionValueFn,
  isEmpty,
  isNumber,
} from './select.lib';
import {
  ourPlacementObject,
  preventHeadlessUIKeyboardInterActions,
  useFilteredOptions,
  useInternalState,
} from './select-shared.lib';
import { optionListStyles, searchStyles } from './select-shared.styles';

const select = tv({
  base: 'flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]',
  variants: {
    variant: {
      text: 'border-transparent ring-transparent bg-transparent',
      outline: 'border-border ring-border bg-transparent',
    },
    size: {
      sm: 'px-2 py-1 text-xs h-8',
      md: 'px-3 py-2 text-sm h-10',
      lg: 'px-4 py-2 text-base h-12',
    },
    disabled: {
      true: '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted text-muted-foreground placeholder:text-muted-foreground !ring-muted',
    },
    error: {
      true: '!border-red hover:!border-red focus:!border-red !ring-red',
    },
    hasPrefix: {
      true: '',
    },
    hasSuffix: {
      true: '',
    },
  },
  compoundVariants: [
    { hasPrefix: true, class: 'ps-2.5' },
    { hasSuffix: true, class: 'pe-2.5' },
  ],
  defaultVariants: {
    variant: 'outline',
    size: 'md',
  },
});

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
  [key: string]: any;
};

export type SelectProps<SelectOption> = ExtractProps<typeof Listbox> & {
  /** Options for select */
  options: SelectOption[];
  /** The default value of the select (uncontrolled) */
  defaultValue?: ExtractProps<typeof Listbox>['value'];
  /** Whether the select is disabled */
  disabled?: boolean;
  label?: ReactNode;
  labelWeight?: keyof typeof labelStyles.weight;
  placeholder?: string;
  size?: VariantProps<typeof select>['size'];
  variant?: VariantProps<typeof select>['variant'];
  /** add clearable option */
  clearable?: boolean;
  /** Whether the select is focused by default or not */
  autoFocus?: boolean;
  /** clear event */
  onClear?: (event?: MouseEvent) => void;
  /** Event of the searchable input when change */
  onSearchChange?: (value: string) => void;
  /** The prefix is design for adding any icon or text on the select field's start (it's a left icon for the `ltr` and right icon for the `rtl`) */
  prefix?: ReactNode;
  /** The suffix is design for adding any icon or text on the select field's end (it's a right icon for the `ltr` and left icon for the `rtl`) */
  suffix?: ReactNode;
  /** Whether the select is searchable or not */
  searchable?: boolean;
  /** The type of the search input */
  searchType?: 'text' | 'search';
  /** The props for the search input */
  searchProps?: InputHTMLAttributes<HTMLInputElement>;
  /** The prefix for the search input */
  searchPrefix?: ReactNode;
  /** The suffix for the search input */
  searchSuffix?: ReactNode;
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
  helperText?: ReactNode;
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
  /** The key to get the value of the option (string approach, alternative to getOptionValue) */
  getOptionValueKey?: string;
  /**
   * A function to determine the display value of the selected item.
   * @param value - The value of the selected item.
   * @returns React node to display for the selected item.
   */
  displayValue?(value: ExtractProps<typeof Listbox>['value']): ReactNode;
  /**
   * Use this function when you want to display something other than the default displayValue.
   * @param option - The SelectOption for which to get the display value.
   * @returns React node to display for the specified option.
   */
  getOptionDisplayValue?(option: SelectOption): ReactNode;
  /**
   * Select whether the label or value should be returned in the onChange method (function approach, alternative to getOptionValueKey).
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
  getOptionValueKey,
  value,
  defaultValue,
  onChange,
  onClear,
  clearable,
  placement = 'bottom-start',
  gap = 6,
  size = 'md',
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
  const [internalValue, setInternalValue] = useInternalState(
    defaultValue,
    value
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Use internal value if component is uncontrolled
  const currentValue = value !== undefined ? value : internalValue;
  const emptyValue = !isNumber(currentValue) && isEmpty(currentValue);

  // Use shared filter hook
  const filteredOptions = useFilteredOptions(
    options,
    searchQuery,
    searchByKey,
    disableDefaultFilter
  );

  // Memoized callbacks
  const handleOnClear = useCallback(
    (e?: MouseEvent) => {
      e?.stopPropagation();
      setSearchQuery('');
      onClear?.(e);
    },
    [onClear]
  );

  const handleChange = useCallback(
    (newValue: any) => {
      setInternalValue(newValue);
      onChange?.(newValue);
    },
    [onChange, setInternalValue]
  );

  // Compute option value with support for both getOptionValue and getOptionValueKey
  const computeOptionValue = useCallback(
    (option: OptionType) => {
      if (getOptionValueKey) {
        return option[getOptionValueKey];
      }
      return getOptionValue(option);
    },
    [getOptionValue, getOptionValueKey]
  );

  return (
    <div
      className={cn(
        'rizzui-select-root',
        'grid w-full grid-cols-1',
        className
      )}
    >
      <Listbox
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      >
        <div className="contents">
          {label && (
            <Label
              className={cn(
                'rizzui-select-label',
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

          <div className={cn(!inPortal && 'relative')}>
            <ListboxButton
              className={select({
                variant,
                size,
                disabled,
                error: Boolean(error && emptyValue),
                hasPrefix: Boolean(prefix),
                hasSuffix: Boolean(suffix),
                className: selectClassName,
              })}
              autoFocus={autoFocus}
            >
              {prefix && (
                <span
                  className={cn(
                    'rizzui-select-prefix',
                    'block leading-normal whitespace-nowrap',
                    prefixClassName
                  )}
                >
                  {prefix}
                </span>
              )}

              <span
                className={cn(
                  'rizzui-select-value',
                  'block w-full truncate text-left rtl:text-right',
                  emptyValue && 'text-muted-foreground'
                )}
              >
                {emptyValue ? placeholder : displayValue(currentValue)}
              </span>

              {clearable && !emptyValue && (
                <FieldClearButton
                  as="span"
                  size={size}
                  onClick={handleOnClear}
                  hasSuffix={Boolean(suffix)}
                />
              )}

              {suffix && (
                <span
                  className={cn(
                    'rizzui-select-suffix',
                    'leading-normal whitespace-nowrap transition-transform duration-200 group-data-open:rotate-180',
                    suffixClassName
                  )}
                >
                  {suffix}
                </span>
              )}
            </ListboxButton>

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
                'rizzui-select-options',
                optionListStyles.base,
                optionListStyles.shadow,
                inPortal
                  ? optionListStyles.inPortal
                  : optionListStyles.notInPortal,
                dropdownClassName
              )}
            >
              {searchable && (
                <div
                  className={cn(
                    searchStyles.base,
                    stickySearch && searchStyles.stickySearch,
                    searchContainerClassName
                  )}
                >
                  {searchPrefix && (
                    <span
                      className={cn(
                        'rizzui-select-prefix',
                        searchStyles.prefix,
                        searchPrefixClassName
                      )}
                    >
                      {searchPrefix}
                    </span>
                  )}
                  <input
                    type={searchType}
                    spellCheck={false}
                    value={searchQuery}
                    disabled={searchDisabled}
                    readOnly={searchReadOnly}
                    placeholder={searchPlaceHolder}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      onSearchChange?.(e.target.value);
                    }}
                    // prevent headless ui from handling these keys
                    onKeyDown={(e) => preventHeadlessUIKeyboardInterActions(e)}
                    className={select({
                      variant,
                      size,
                      disabled: searchDisabled,
                      className: cn(searchStyles.inputBase, searchClassName),
                    })}
                    {...searchProps}
                  />

                  {searchSuffix && (
                    <span
                      className={cn(
                        'rizzui-select-suffix',
                        searchStyles.suffix,
                        searchSuffixClassName
                      )}
                    >
                      {searchSuffix}
                    </span>
                  )}
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
                      'rizzui-select-option',
                      'flex w-full items-center px-3 py-1.5',
                      focus && 'bg-muted/70',
                      'rounded-[calc(var(--border-radius)/2)]',
                      size && optionListStyles.item.size[size],
                      !option?.disabled && 'cursor-pointer',
                      optionClassName
                    )
                  }
                  value={computeOptionValue(option)}
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
          </div>
        </div>
      </Listbox>

      {!error && helperText && (
        <FieldHelperText size={size} className={helperClassName}>
          {helperText}
        </FieldHelperText>
      )}

      {error && (
        <FieldErrorText size={size} error={error} className={errorClassName} />
      )}
    </div>
  );
}

Select.displayName = 'Select';
