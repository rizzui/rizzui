import React, { Fragment, useMemo, useState } from 'react';
import {
  Label,
  Listbox,
  Transition,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { cn } from 'src/lib/cn';
import { Checkbox } from '../checkbox';
import { XIcon } from 'src/icons/x-mark';
import { SearchIcon } from 'src/icons/search';
import { ChevronDownIcon } from 'src/icons/chevron-down';
import {
  useInternalState,
  ourPlacementObject,
  preventHeadlessUIKeyboardInterActions,
} from './multi-select.lib';
import { FieldError } from '../field-error-text';
import { roundedStyles } from '../../lib/rounded';
import { labelStyles } from '../../lib/label-size';
import { ExtractProps } from 'src/lib/extract-props';
import { FieldHelperText } from '../field-helper-text';
import { makeClassName } from 'src/lib/make-class-name';
import { FieldClearButton } from '../field-clear-button';
import { dropdownStyles } from '../../lib/dropdown-list-style';

const selectStyles = {
  base: 'flex items-center peer border hover:border-primary w-full transition duration-200 ring-[0.6px] hover:ring-primary focus:border-primary focus:ring-[0.8px] focus:ring-primary',
  disabled:
    '!bg-muted/70 backdrop-blur cursor-not-allowed !border-muted text-muted-foreground placeholder:text-muted-foreground !ring-muted',
  error: '!border-red hover:!border-red focus:!border-red !ring-red',
  size: {
    sm: 'px-2 py-1 text-xs min-h-8',
    md: 'px-3 py-2 text-sm min-h-10',
    lg: 'px-4 py-2 text-base min-h-12',
    xl: 'px-5 py-2.5 text-base min-h-14',
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
  base: 'relative mb-2 block',
  inputBase: 'px-10 placeholder:text-muted-foreground',
  prefix:
    'absolute z-10 start-1 top-5 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
  suffix:
    'absolute z-10 end-1 top-5 inline-block -translate-y-1/2 whitespace-nowrap leading-normal text-muted-foreground',
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
  /** The default value of the select */
  defaultValue?: string[];
  /** The function to call when the value changes */
  onChange?: (value: string[]) => void;
  /** The function to call when the clear button is clicked */
  onClear?: () => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** The placeholder of the select */
  placeholder?: string;
  /** The size of the select */
  size?: keyof typeof selectStyles.size;
  /** The label of the select */
  label?: React.ReactNode;
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
  /** The variant of the select */
  variant?: keyof typeof selectStyles.variant;
  /** The rounded of the select */
  rounded?: keyof typeof selectStyles.rounded;
  /** The shadow of the select */
  shadow?: keyof typeof optionListStyles.shadow;
  /** The prefix of the select */
  prefix?: React.ReactNode;
  /** The suffix of the select */
  suffix?: React.ReactNode;
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
  helperText?: React.ReactNode;
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
  searchSuffix?: React.ReactNode;
  /** The search prefix */
  searchPrefix?: React.ReactNode;
  /** Whether the search is disabled */
  searchDisabled?: boolean;
  /** Whether the search is read only */
  searchReadOnly?: boolean;
  /** The type of the search */
  searchType?: 'text' | 'search';
  /** The props of the search */
  searchProps?: React.InputHTMLAttributes<HTMLInputElement>;
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
  /**
   * A function to determine the display value of the selected item.
   * @param value - The value of the selected item.
   * @param handleClearItem - The function to remove the targeted item from selected.
   * @returns React node to display for the selected item.
   */
  displayValue?: (
    option: MultiSelectOption,
    handleClearItem?: (item: string) => void
  ) => React.ReactNode;
  /**
   * Use this function when you want to display something other than the default option displayValue.
   * @param option - The MultiSelectOption for which to get the display value.
   * @param selected - The Selected for which to know the item is selected or not.
   * @returns React node to display for the specified option.
   */
  getOptionDisplayValue?(
    option: MultiSelectOption,
    selected: boolean
  ): React.ReactNode;
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
  helperText,
  size = 'md',
  searchProps,
  displayValue,
  shadow = 'md',
  prefix = null,
  labelClassName,
  errorClassName,
  rounded = 'md',
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
      options.filter((item) =>
        item[searchByKey].toLowerCase().includes(searchQuery)
      ),
    [searchQuery, options]
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
        onChange={
          ((values: string[]) => {
            onChange?.(values);
            setSelectedValue(values);
          }) as any
        }
        {...props}
      >
        {({ open }) => (
          <>
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

            <div className={cn('h-full', !inPortal && 'relative')}>
              <ListboxButton
                className={cn(
                  makeClassName(`multi-select-button`),
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
                      makeClassName(`multi-select-prefix`),
                      'block whitespace-nowrap leading-normal',
                      prefixClassName
                    )}
                  >
                    {prefix}
                  </span>
                ) : null}

                <span
                  className={cn(
                    makeClassName(`multi-select-value`),
                    'flex w-full flex-wrap items-center gap-2 truncate text-start',
                    emptyValue && 'text-muted-foreground',
                    prefix && selectStyles.prefix.size[size],
                    suffix && selectStyles.suffix.size[size],
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
                          <Fragment key={index}>
                            <span
                              className={cn(
                                'item-center flex gap-1 overflow-hidden rounded-md border border-muted text-xs',
                                selectedItemClassName
                              )}
                            >
                              {mainItem && displayValue ? (
                                displayValue(mainItem, handleClearItem)
                              ) : (
                                <>
                                  <span className="py-1 ps-2">
                                    {mainItem?.label}
                                  </span>
                                  <span
                                    className="px-1 py-1 hover:bg-muted"
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
                                </>
                              )}
                            </span>
                          </Fragment>
                        );
                      })}
                    </>
                  )}
                </span>

                {clearable && !emptyValue && !disabled ? (
                  <FieldClearButton
                    as="span"
                    size={size}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClear();
                    }}
                    hasSuffix={Boolean(suffix)}
                  />
                ) : null}

                {suffix ? (
                  <span
                    className={cn(
                      makeClassName(`multi-select-suffix`),
                      'whitespace-nowrap leading-normal transition-transform duration-200',
                      open && 'rotate-180',
                      suffixClassName
                    )}
                  >
                    {suffix}
                  </span>
                ) : null}
              </ListboxButton>
            </div>

            {open ? (
              <Transition
                as={Fragment}
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
                    makeClassName(`multi-select-options`),
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
                    <span
                      className={cn(
                        searchStyles.base,
                        searchContainerClassName
                      )}
                    >
                      {searchPrefix ? (
                        <span
                          className={cn(
                            makeClassName(`multi-select-prefix`),
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
                        onChange={(e) => setSearchQuery(e.target.value)}
                        // prevent headless ui from handling these keys
                        onKeyDown={(e) =>
                          preventHeadlessUIKeyboardInterActions(e)
                        }
                        className={cn(
                          makeClassName(`multi-select-search`),
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
                            makeClassName(`multi-select-suffix`),
                            searchStyles.suffix,
                            searchSuffix && selectStyles.suffix.size[size],
                            searchSuffixClassName
                          )}
                        >
                          {searchSuffix}
                        </span>
                      ) : null}
                    </span>
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
                            rounded && optionListStyles.item.rounded[rounded],
                            size && optionListStyles.item.size[size],
                            !op?.disabled && 'cursor-pointer',
                            selected && hideSelectedOptions && '!hidden',
                            optionClassName
                          )
                        }
                      >
                        {({ selected }) => {
                          return (
                            <>
                              {getOptionDisplayValue ? (
                                getOptionDisplayValue(op, selected)
                              ) : (
                                <>
                                  <div
                                    className={cn(
                                      'flex items-center gap-2',
                                      selected
                                        ? 'font-medium'
                                        : 'text-foreground',
                                      selectedOptionClassName
                                    )}
                                  >
                                    {optionCheckBox && (
                                      <Checkbox
                                        size={'sm'}
                                        readOnly={true}
                                        checked={selected}
                                        iconClassName="size-4 left-0.5"
                                      />
                                    )}
                                    {op.label}
                                  </div>
                                </>
                              )}
                            </>
                          );
                        }}
                      </ListboxOption>
                    );
                  })}
                </ListboxOptions>
              </Transition>
            ) : null}
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
