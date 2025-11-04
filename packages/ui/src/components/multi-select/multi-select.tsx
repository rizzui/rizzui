import {
  useMemo,
  useState,
  type ReactNode,
  type InputHTMLAttributes,
} from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { XIcon } from '../../icons/x-mark';
import { SearchIcon } from '../../icons/search';
import { ChevronDownIcon } from '../../icons/chevron-down';
import {
  useInternalState,
  ourPlacementObject,
  preventHeadlessUIKeyboardInterActions,
} from './multi-select.lib';
import { FieldError } from '../field-error-text';
import { labelStyles } from '../../lib/label-size';
import type { ExtractProps } from '../../lib/extract-props';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from '../../lib/make-class-name';
import { FieldClearButton } from '../field-clear-button';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import { CheckmarkIcon } from '../../icons/checkmark';

const multiSelect = tv({
  base: 'flex group items-center peer border-[length:var(--border-width)] hover:border-primary w-full transition duration-200 hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary rounded-[var(--border-radius)]',
  variants: {
    variant: {
      text: 'border-transparent ring-transparent bg-transparent',
      outline: 'border-border ring-border bg-transparent',
    },
    size: {
      sm: 'px-2 py-1 text-xs min-h-8',
      md: 'px-3 py-2 text-sm min-h-10',
      lg: 'px-4 py-2 text-base min-h-12',
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

const optionListStyles = {
  base: `${dropdownStyles.base} overflow-auto w-[var(--button-width)] !outline-none !ring-0 m-0 [&>li]:!m-0 [scrollbar-width:thin] [scrollbar-color:rgba(0,0,0,0.2)_rgba(0,0,0,0)] [-ms-overflow-style:none] [&::-webkit-scrollbar-track]:shadow-none [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:bg-transparent [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar-thumb]:rounded-lg data-[open]:opacity-100 data-[leave]:data-[closed]:opacity-100`,
  shadow: dropdownStyles.shadow,
  item: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  inPortal: '[--anchor-max-height:256px]',
  notInPortal: 'absolute z-10 h-[256px] start-0 top-full mt-1.5',
};

const searchStyles = {
  base: 'relative mb-2 block group [&.sticky]:mb-0',
  inputBase: 'px-10 placeholder:text-muted-foreground',
  prefix:
    'absolute z-10 start-1 top-5 group-[.sticky]:top-7 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  suffix:
    'absolute z-10 end-1 top-5 group-[.sticky]:top-7 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  stickySearch: 'sticky top-0 z-10 bg-background pt-2 -translate-y-2',
};

const checkboxStyles = {
  base: 'peer checked:bg-none focus:ring-offset-background transition duration-200 ease-in-out size-5 rounded bg-transparent border border-border ring-border focus:ring-border checked:!bg-primary checked:!border-primary hover:enabled:border-primary',
  icon: 'peer-checked:opacity-100 absolute opacity-0 text-primary-foreground size-4 start-0.5 top-0.5',
};

export type MultiSelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
  [key: string]: any;
};

export type MultiSelectProps<MultiSelectOption> = ExtractProps<
  typeof Listbox
> & {
  /** The value of the select */
  value?: string[];
  /** The class name of the select */
  className?: string;
  /** Whether the select is focused by default or not */
  autoFocus?: boolean;
  /** The default value of the select */
  defaultValue?: string[];
  /** The function to call when the value changes */
  onChange?: (value: string[]) => void;
  /** The function to call when the clear button is clicked */
  onClear?: () => void;
  /** Event of the searchable input when change */
  onSearchChange?: (value: string) => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** The placeholder of the select */
  placeholder?: string;
  /** The size of the select */
  size?: VariantProps<typeof multiSelect>['size'];
  /** The label of the select */
  label?: ReactNode;
  /** The weight of the label */
  labelWeight?: keyof typeof labelStyles.weight;
  /** The class name of the label */
  labelClassName?: string;
  /** The class name of the select */
  selectClassName?: string;
  /** The class name of the helper text */
  helperClassName?: string;
  /** The class name of the error */
  errorClassName?: string;
  /** The error of the select */
  error?: string;
  /** Whether the select is in the portal */
  inPortal?: boolean;
  variant?: VariantProps<typeof multiSelect>['variant'];
  shadow?: keyof typeof optionListStyles.shadow;
  /** The prefix of the select */
  prefix?: ReactNode;
  /** The suffix of the select */
  suffix?: ReactNode;
  /** The class name of the prefix */
  prefixClassName?: string;
  /** The class name of the selected item */
  selectedItemClassName?: string;
  /** The class name of the suffix */
  suffixClassName?: string;
  /** Whether the select is clearable */
  clearable?: boolean;
  /** The placement of the select */
  placement?: keyof typeof ourPlacementObject;
  /** The gap of the select */
  gap?: number;
  /** The modal of the select */
  modal?: boolean;
  /** The helper text of the select */
  helperText?: ReactNode;
  /** The class name of the dropdown */
  dropdownClassName?: string;
  /** The class name of the search */
  searchClassName?: string;
  /** The class name of the search container */
  searchContainerClassName?: string;
  /** The class name of the search prefix */
  searchPrefixClassName?: string;
  /** The class name of the search suffix */
  searchSuffixClassName?: string;
  /** The place holder of the search */
  searchPlaceHolder?: string;
  /** The search suffix */
  searchSuffix?: ReactNode;
  /** The search prefix */
  searchPrefix?: ReactNode;
  /** Whether the search is disabled */
  searchDisabled?: boolean;
  /** Whether the search is read only */
  searchReadOnly?: boolean;
  /** The type of the search */
  searchType?: 'text' | 'search';
  /** The props of the search */
  searchProps?: InputHTMLAttributes<HTMLInputElement>;
  /** Whether the select is searchable or not */
  searchable?: boolean;
  /** Options for select */
  options: MultiSelectOption[];
  /** The class name of the option */
  optionClassName?: string;
  /** The option checkbox defines the option with checkbox or not */
  optionCheckBox?: boolean;
  /** The class name of the selected option */
  selectedOptionClassName?: string;
  /** The key to get the value of the option */
  getOptionValueKey?: string;
  /** Whether to hide the picked options */
  hideSelectedOptions?: boolean;
  /** The class name of the selected value container */
  selectContainerClassName?: string;
  /** The key to search in the options */
  searchByKey?: string;
  /** Whether the search input is sticky or not */
  stickySearch?: boolean;
  /**
   * A function to determine the display value of the selected item.
   * @param selectedItems - An array of selected items.
   * @param handleClearItem - The function to remove the targeted item from selected.
   * @returns React node to display for the selected item.
   */
  displayValue?: (
    selectedItems: string[],
    options: MultiSelectOption[],
    handleClearItem?: (item: string) => void
  ) => ReactNode;
  /**
   * Use this function when you want to display something other than the default option displayValue.
   * @param option - The MultiSelectOption for which to get the display value.
   * @param selected - The Selected for which to know the item is selected or not.
   * @returns React node to display for the specified option.
   */
  getOptionDisplayValue?(
    option: MultiSelectOption,
    selected: boolean
  ): ReactNode;
};

export function MultiSelect<OptionType extends MultiSelectOption>({
  gap = 6,
  modal = false,
  value,
  error,
  label,
  options,
  onClear,
  onChange,
  disabled,
  clearable,
  className,
  autoFocus,
  helperText,
  size = 'md',
  searchProps,
  stickySearch,
  displayValue,
  shadow = 'md',
  prefix = null,
  labelClassName,
  onSearchChange,
  errorClassName,
  inPortal = true,
  selectClassName,
  helperClassName,
  prefixClassName,
  suffixClassName,
  searchClassName,
  optionClassName,
  defaultValue = [],
  dropdownClassName,
  searchable = false,
  variant = 'outline',
  searchSuffix = null,
  searchType = 'text',
  selectedItemClassName,
  getOptionDisplayValue,
  searchByKey = 'label',
  optionCheckBox = true,
  searchPrefixClassName,
  searchSuffixClassName,
  labelWeight = 'medium',
  searchDisabled = false,
  searchReadOnly = false,
  selectedOptionClassName,
  searchContainerClassName,
  selectContainerClassName,
  placeholder = 'Select...',
  hideSelectedOptions = false,
  placement = 'bottom-start',
  getOptionValueKey = 'value',
  searchPlaceHolder = 'Search...',
  suffix = <ChevronDownIcon strokeWidth="2" className="size-4" />,
  searchPrefix = <SearchIcon strokeWidth="2" className="size-4" />,
  ...props
}: MultiSelectProps<OptionType>) {
  const [selectedValue, setSelectedValue] = useInternalState(
    defaultValue,
    value
  );
  const [searchQuery, setSearchQuery] = useState('');
  const selectedItems = selectedValue ?? [];
  const emptyValue = selectedItems.length === 0;

  const filteredOptions = useMemo(
    () =>
      options.filter((item) => {
        const value = item[searchByKey];
        if (!value) return false;
        return String(value).toLowerCase().includes(searchQuery.toLowerCase());
      }),
    [searchQuery, options, searchByKey]
  );

  const handleClear = () => {
    setSelectedValue([]);
    setSearchQuery('');
    onClear?.();
  };

  const handleClearItem = (item: string) => {
    const filteredItems = selectedItems.filter((i) => i !== item);
    setSelectedValue(filteredItems);
    onChange?.(filteredItems);
  };

  return (
    <div
      className={cn(
        makeClassName(`multi-select-root`),
        'grid w-full grid-cols-1',
        className
      )}
    >
      <Listbox
        multiple
        disabled={disabled}
        value={selectedValue}
        defaultValue={selectedValue}
        onChange={(values: string[]) => {
          onChange?.(values);
          setSelectedValue(values);
        }}
        {...props}
      >
        {label && (
          <Label
            className={cn(
              makeClassName(`multi-select-label`),
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
            className={multiSelect({
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
                  makeClassName(`multi-select-prefix`),
                  'block leading-normal whitespace-nowrap',
                  prefixClassName
                )}
              >
                {prefix}
              </span>
            )}

            {displayValue ? (
              displayValue(selectedItems, options, handleClearItem)
            ) : (
              <span
                className={cn(
                  makeClassName(`multi-select-value`),
                  'flex w-full flex-wrap items-center gap-2 truncate text-start',
                  emptyValue && 'text-muted-foreground',
                  selectContainerClassName
                )}
              >
                {emptyValue ? (
                  placeholder
                ) : (
                  <>
                    {value?.map((item, index) => {
                      const mainItem = options.find(
                        (op) => op[getOptionValueKey] === item
                      );
                      return (
                        <span
                          key={index}
                          className={cn(
                            'item-center border-border flex gap-1 overflow-hidden rounded-md border text-xs',
                            selectedItemClassName
                          )}
                        >
                          <span className="py-1 ps-2">{mainItem?.label}</span>
                          <span
                            className="hover:bg-muted px-1 py-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClearItem(item);
                            }}
                          >
                            <XIcon
                              strokeWidth="2"
                              className="size-4 cursor-pointer"
                            />
                          </span>
                        </span>
                      );
                    })}
                  </>
                )}
              </span>
            )}

            {clearable && !emptyValue && !disabled && (
              <FieldClearButton
                as="span"
                size={size}
                onClick={(e) => {
                  e.preventDefault();
                  handleClear();
                }}
                hasSuffix={Boolean(suffix)}
              />
            )}

            {suffix && (
              <span
                className={cn(
                  makeClassName(`multi-select-suffix`),
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
              makeClassName(`multi-select-options`),
              optionListStyles.base,
              optionListStyles.shadow[shadow],
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
                      makeClassName(`multi-select-prefix`),
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
                  className={multiSelect({
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
                      makeClassName(`multi-select-suffix`),
                      searchStyles.suffix,
                      searchSuffixClassName
                    )}
                  >
                    {searchSuffix}
                  </span>
                )}
              </div>
            )}

            {filteredOptions.map((op, index) => {
              return (
                <ListboxOption
                  key={index}
                  value={op[getOptionValueKey]}
                  {...(op?.disabled && {
                    disabled: op?.disabled,
                  })}
                  className={({ focus, selected }) =>
                    cn(
                      makeClassName(`multi-select-option`),
                      'flex w-full items-center px-3 py-1.5',
                      focus && 'bg-muted/70',
                      'rounded-[calc(var(--border-radius)/2)]',
                      size && optionListStyles.item.size[size],
                      !op?.disabled && 'cursor-pointer',
                      selected && hideSelectedOptions && 'hidden!',
                      optionClassName
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      {getOptionDisplayValue ? (
                        getOptionDisplayValue(op, selected)
                      ) : (
                        <div
                          className={cn(
                            'flex items-center gap-2',
                            selected ? 'font-medium' : 'text-foreground',
                            selectedOptionClassName
                          )}
                        >
                          {optionCheckBox && (
                            <span className="relative leading-none">
                              <input
                                type="checkbox"
                                readOnly={true}
                                checked={selected}
                                className={cn(
                                  makeClassName(`checkbox-input`),
                                  checkboxStyles.base
                                )}
                              />
                              <CheckmarkIcon
                                className={cn(
                                  makeClassName(`checkbox-icon`),
                                  checkboxStyles.icon
                                )}
                              />
                            </span>
                          )}
                          {op.label}
                        </div>
                      )}
                    </>
                  )}
                </ListboxOption>
              );
            })}
          </ListboxOptions>
        </div>
      </Listbox>

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
}
