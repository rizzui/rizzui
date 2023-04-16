'use client';

import React, { useState } from 'react';
import { Combobox as ComboBox, Transition } from '@headlessui/react';
import type { TransitionClasses } from '@headlessui/react';
import { isEmpty } from 'lodash';

import cn from '../../lib/cn';
import type { ExtractProps } from '../../lib/extract-props';
import { ChevronDownIcon } from '../../icons/chevron-down';
import { CheckmarkIcon } from '../../icons/checkmark';
import { SearchIcon } from '../../icons/search';
import { XIcon } from '../../icons/x-mark';

const labelClasses = {
  size: {
    sm: 'text-xs mb-1',
    DEFAULT: 'text-sm mb-1.5',
    lg: 'text-sm mb-1.5',
    xl: 'text-base mb-2',
  },
};

const tagClasses = {
  size: {
    sm: 'text-xs',
    DEFAULT: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-full',
  },
  color: {
    DEFAULT: 'text-gray-500 bg-gray-100',
    primary: 'text-primary bg-primary-lighter',
    secondary: 'text-secondary bg-secondary-lighter',
    danger: 'text-red bg-red-lighter',
    info: 'text-blue bg-blue-lighter',
    success: 'text-green-dark bg-green-lighter',
    warning: 'text-orange-dark bg-orange-lighter',
  },
};

const tagIconClasses = {
  size: {
    sm: 'h-4 w-4',
    DEFAULT: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-5 w-5',
  },
  color: {
    DEFAULT: 'text-gray-500',
    primary: 'text-primary',
    secondary: 'text-secondary',
    danger: 'text-red',
    info: 'text-blue',
    success: 'text-green',
    warning: 'text-orange',
  },
};

const inputClasses = {
  base: 'block peer w-full bg-transparent focus:outline-none transition duration-200 disabled:bg-gray-100 disabled:placeholder:text-gray-400 disabled:cursor-not-allowed disabled:border-gray-200',
  size: {
    sm: 'px-10 py-1 text-xs h-8 leading-[32px]',
    DEFAULT: 'px-12 py-2 text-sm h-10 leading-[40px]',
    lg: 'px-14 py-2 text-base h-12 leading-[48px]',
    xl: 'px-14 py-2.5 text-base h-14 leading-[56px]',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-full',
  },
  variant: {
    active: {
      base: 'border bg-gray-0 focus:ring-[0.6px] placeholder:opacity-80 read-only:focus:ring-0',
      color: {
        DEFAULT:
          'border-gray-900 focus:enabled:border-gray-1000 focus:ring-gray-1000 text-gray-1000',
        primary:
          'border-primary focus:enabled:border-primary focus:ring-primary text-primary-dark',
        secondary:
          'border-secondary focus:enabled:border-secondary focus:ring-secondary text-secondary-dark',
        danger:
          'border-red focus:enabled:border-red focus:ring-red text-red-dark',
        info: 'border-blue focus:enabled:border-blue focus:ring-blue text-blue-dark',
        success:
          'border-green focus:enabled:border-green focus:ring-green text-green-dark',
        warning:
          'border-orange focus:enabled:border-orange-dark focus:ring-orange-dark text-orange-dark',
      },
    },
    flat: {
      base: 'border focus:ring-2 border-0 placeholder:opacity-90 read-only:focus:ring-0',
      color: {
        DEFAULT:
          'bg-gray-200/70 not-read-only:hover:enabled:bg-gray-200/90 focus:ring-gray-900/20 text-gray-1000 placeholder:text-gray-600',
        primary:
          'bg-primary-lighter/70 not-read-only:hover:enabled:bg-primary-lighter/90 focus:ring-primary/30 text-primary-dark',
        secondary:
          'bg-secondary-lighter/70 not-read-only:hover:enabled:bg-secondary-lighter/90 focus:ring-secondary/30 text-secondary-dark',
        danger:
          'bg-red-lighter/70 not-read-only:hover:enabled:bg-red-lighter/90 focus:ring-red/30 text-red-dark',
        info: 'bg-blue-lighter/70 not-read-only:hover:enabled:bg-blue-lighter/90 focus:ring-blue/30 text-blue-dark',
        success:
          'bg-green-lighter/70 not-read-only:hover:enabled:bg-green-lighter/90 focus:ring-green/30 text-green-dark',
        warning:
          'bg-orange-lighter/80 not-read-only:hover:enabled:bg-orange-lighter/90 focus:ring-orange/30 text-orange-dark',
      },
    },
    outline: {
      base: 'bg-transparent focus:ring-[0.6px] border border-gray-300 read-only:border-gray-300 read-only:focus:ring-0 placeholder:text-gray-500',
      color: {
        DEFAULT:
          'not-read-only:hover:enabled:border-gray-1000 not-read-only:focus:enabled:border-gray-1000 focus:ring-gray-1000',
        primary:
          'not-read-only:hover:enabled:border-primary not-read-only:focus:enabled:border-primary focus:ring-primary',
        secondary:
          'not-read-only:hover:enabled:border-secondary not-read-only:focus:enabled:border-secondary focus:ring-secondary',
        danger:
          'not-read-only:hover:enabled:border-red not-read-only:focus:enabled:border-red focus:ring-red',
        info: 'not-read-only:hover:enabled:border-blue not-read-only:focus:enabled:border-blue focus:ring-blue',
        success:
          'not-read-only:hover:enabled:border-green not-read-only:focus:enabled:border-green focus:ring-green',
        warning:
          'not-read-only:hover:enabled:border-orange not-read-only:focus:enabled:border-orange focus:ring-orange',
      },
    },
    text: {
      base: 'border-0 focus:ring-2 bg-transparent',
      color: {
        DEFAULT:
          'hover:text-gray-1000 focus:ring-gray-900/20 placeholder:text-gray-500',
        primary: 'hover:text-primary-dark focus:ring-primary/30 text-primary',
        secondary:
          'hover:text-secondary-dark focus:ring-secondary/30 text-secondary',
        danger: 'hover:text-red-600 focus:ring-red/30 text-red',
        info: 'hover:text-blue-dark focus:ring-blue/30 text-blue',
        success:
          'hover:text-green-dark focus:ring-green/30 text-green placeholder:opacity-100',
        warning:
          'hover:text-orange-dark focus:ring-orange/30 text-orange placeholder:opacity-100',
      },
    },
  },
};

const iconContainerClasses = {
  base: 'absolute inset-y-0 flex items-center cursor-pointer',
  startIcon: {
    base: 'left-0',
    size: {
      sm: 'pl-3 rtl:pr-3',
      DEFAULT: 'pl-4 rtl:pr-4',
      lg: 'pl-5 rtl:pr-5',
      xl: 'pl-5 rtl:pr-5',
    },
  },
  endIcon: {
    base: 'right-0',
    size: {
      sm: 'pr-3 rtl:pl-3',
      DEFAULT: 'pr-4 rtl:pl-4',
      lg: 'pr-5 rtl:pl-5',
      xl: 'pr-5 rtl:pl-5',
    },
  },
};

const iconClasses = {
  base: 'absolute inset-y-0 flex items-center cursor-pointer',
  transition: 'transform transition duration-200',
  size: {
    startIcon: {
      sm: 'h-4 w-4',
      DEFAULT: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-6 w-6',
    },
    endIcon: {
      sm: 'h-4 w-4',
      DEFAULT: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-6 w-6',
    },
  },
  color: {
    DEFAULT: 'text-gray-900',
    primary: 'text-primary',
    secondary: 'text-secondary',
    danger: 'text-red',
    info: 'text-blue',
    success: 'text-green',
    warning: 'text-orange',
  },
};

const optionContainerClasses = {
  base: 'max-h-[232px] bg-gray-0 overflow-auto border border-gray-100 shadow-lg',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
};

const optionClasses = {
  base: 'relative flex items-center cursor-default py-2 pl-6 text-gray-600',
  size: {
    sm: 'text-xs',
    DEFAULT: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
  },
  color: {
    DEFAULT: 'text-gray-900 bg-gray-100',
    primary: 'text-primary-dark bg-primary-lighter',
    secondary: 'text-secondary-dark bg-secondary-lighter',
    danger: 'text-red-dark bg-red-lighter',
    info: 'text-blue-dark bg-blue-lighter',
    success: 'text-green-dark bg-green-lighter',
    warning: 'text-orange-dark bg-orange-lighter',
  },
};

export interface AdvancedSelectOptionDataTypes {
  /** Provide unique id for each option */
  id: string | number;
  /** Provide name which will be used as value */
  name: string;
  /** Customize display style for each option. If not provided, name will be displayed */
  label?: React.ReactNode;
  /** Whether the option is disabled or not */
  disabled?: boolean;
  [key: string]: unknown;
}

export type AdvancedSelectProps = ExtractProps<typeof ComboBox> & {
  /** label of the component */
  label?: React.ReactNode;
  /** Pass value state */
  value?: AdvancedSelectOptionDataTypes | AdvancedSelectOptionDataTypes[];
  /** Pass array of options */
  options: AdvancedSelectOptionDataTypes[];
  /** Size of the component */
  size?: keyof typeof labelClasses.size;
  /** The rounded variants are: */
  rounded?: keyof typeof inputClasses.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** Change combobox color */
  color?: keyof typeof inputClasses.variant.outline.color;
  /** Provide start icon to be placed at the beginning */
  startInputIcon?: React.ReactNode;
  /** Provide end icon to be placed at the end */
  endInputIcon?: React.ReactNode;
  /** Pass transition props to animate combobox */
  transitionProps?: TransitionClasses;
  /** To create custom value */
  isCreatable?: boolean;
  /** Pass className to style the combobox container */
  className?: string;
  /** Pass labelClassName to style the label */
  labelClassName?: string;
  /** Pass to style the multi selected tag at the top */
  tagClassName?: string;
  /** Pass inputClassName to style the input */
  inputClassName?: string;
  /** To style creatable option */
  creatableClassName?: string;
  /** To style the div if search result not found */
  notFoundClassName?: string;
  /** Pass optionClassName to style each option */
  optionClassName?: string;
  /** To style the selected option only */
  selectedOptionClassName?: string;
  /** To style the check icon of selected option */
  CheckmarkIconClassName?: string;
};

/**
 * AdvancedSelect is a combination of a selectbox and an auto-complete feature.
 * AdvancedSelect allows user to select single or multiple values from options and search for them in the input field.
 * We used `headlessUI combobox` to build the component.
 * For more info, see their [official documentation](https://headlessui.com/react/combobox).
 */

export default function AdvancedSelect({
  label,
  options,
  value,
  onChange,
  multiple,
  disabled,
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'outline',
  color = 'DEFAULT',
  startInputIcon,
  endInputIcon,
  transitionProps,
  isCreatable = false,
  className,
  labelClassName,
  tagClassName,
  inputClassName,
  creatableClassName,
  notFoundClassName,
  optionClassName,
  selectedOptionClassName,
  CheckmarkIconClassName,
  ...props
}: AdvancedSelectProps) {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredOption =
    searchValue === ''
      ? options
      : options.filter((option) =>
          option.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(searchValue.toLowerCase().replace(/\s+/g, ''))
        );

  const handleUpdate = (currentValue: AdvancedSelectOptionDataTypes) => {
    const updatedValue = (value as AdvancedSelectOptionDataTypes[])?.filter(
      (val) => val.id !== currentValue.id
    );
    onChange?.(updatedValue);
  };

  const handleCreate = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter' ||
      event.type === 'click'
    ) {
      const createdValue = {
        id: searchValue,
        name: searchValue,
        label: searchValue,
      };
      if (multiple) {
        onChange?.(((prev: AdvancedSelectOptionDataTypes[]) => [
          ...prev,
          createdValue,
        ]) as any);
      } else {
        onChange?.(createdValue as any);
      }
    }
  };

  return (
    <ComboBox
      as="div"
      value={value}
      onChange={onChange}
      multiple={multiple}
      disabled={disabled}
      className={cn('flex w-full flex-col', className)}
      {...props}
    >
      {label && (
        <ComboBox.Label
          className={cn('block', labelClasses.size[size], labelClassName)}
        >
          {label}
        </ComboBox.Label>
      )}

      {multiple && (value as AdvancedSelectOptionDataTypes[])?.length > 0 && (
        <div className="mt-1 mb-2.5 flex gap-2">
          {(value as AdvancedSelectOptionDataTypes[])?.map(
            (v: AdvancedSelectOptionDataTypes) => (
              <span
                key={v.id}
                className={cn(
                  'inline-flex items-center gap-1 px-3 py-1',
                  tagClasses.size[size],
                  tagClasses.rounded[rounded],
                  tagClasses.color[color],
                  tagClassName
                )}
              >
                {v.name}
                <XIcon
                  onClick={() => handleUpdate(v)}
                  className={cn(
                    'aegon-ui-combobox-xicon cursor-pointer',
                    tagIconClasses.size[size],
                    tagIconClasses.color[color]
                  )}
                />
              </span>
            )
          )}
        </div>
      )}

      <div>
        <ComboBox.Button className="relative w-full">
          {({ open }) => (
            <>
              {startInputIcon || (
                <span
                  className={cn(
                    iconContainerClasses.base,
                    iconContainerClasses.startIcon.base,
                    iconContainerClasses.startIcon.size[size]
                  )}
                >
                  <SearchIcon
                    className={cn(
                      iconClasses.size.startIcon[size],
                      variant === 'outline'
                        ? 'text-gray-900'
                        : iconClasses.color[color],
                      disabled && 'text-opacity-50'
                    )}
                    aria-hidden="true"
                  />
                </span>
              )}
              <ComboBox.Input
                displayValue={(option: AdvancedSelectOptionDataTypes) =>
                  option.name
                }
                onKeyDown={handleCreate}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchValue(e.target.value)
                }
                onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) =>
                  event.preventDefault()
                }
                className={cn(
                  inputClasses.base,
                  inputClasses.size[size],
                  inputClasses.rounded[rounded],
                  inputClasses.variant[variant].base,
                  inputClasses.variant[variant].color?.[color],
                  inputClassName
                )}
              />
              {!multiple && !isEmpty(value) && (
                <span
                  className={cn(
                    'right-6 mx-2',
                    iconContainerClasses.base,
                    iconContainerClasses.endIcon.size[size]
                  )}
                >
                  <XIcon
                    onClick={() => onChange?.({} as any)}
                    className={cn(
                      iconClasses.size.endIcon[size],
                      color === 'DEFAULT' || variant === 'outline'
                        ? 'text-gray-500'
                        : iconClasses.color[color]
                    )}
                    aria-hidden="true"
                  />
                </span>
              )}
              {endInputIcon || (
                <span
                  className={cn(
                    iconContainerClasses.base,
                    iconContainerClasses.endIcon.base,
                    iconContainerClasses.endIcon.size[size]
                  )}
                >
                  <ChevronDownIcon
                    className={cn(
                      iconClasses.size.endIcon[size],
                      variant === 'outline'
                        ? 'text-gray-900'
                        : iconClasses.color[color],
                      iconClasses.transition,
                      open ? 'rotate-180' : 'rotate-0',
                      disabled && 'text-opacity-50'
                    )}
                    aria-hidden="true"
                  />
                </span>
              )}
            </>
          )}
        </ComboBox.Button>

        <Transition
          as="div"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setSearchValue('')}
          className="mt-3"
          {...transitionProps}
        >
          <ComboBox.Options
            className={cn(
              optionContainerClasses.base,
              optionContainerClasses.rounded[rounded]
            )}
          >
            {filteredOption.length === 0 && searchValue !== '' ? (
              isCreatable ? (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={handleCreate}
                  className={cn(
                    'my-2',
                    optionClasses.base,
                    optionClasses.size[size],
                    optionClasses.color[color],
                    creatableClassName
                  )}
                >
                  Create &quot;
                  {searchValue}
                  &quot;
                </div>
              ) : (
                <div
                  className={cn(
                    'flex h-16 items-center justify-center overflow-hidden text-sm font-medium',
                    iconClasses.color[color],
                    notFoundClassName
                  )}
                >
                  Nothing found
                </div>
              )
            ) : (
              filteredOption?.map((option, index) => (
                <ComboBox.Option
                  key={option.id}
                  value={option}
                  disabled={option.disabled}
                  // eslint-disable-next-line no-shadow
                  className={({ selected, disabled, active }) =>
                    cn(
                      index === 0 && 'mt-2',
                      index === filteredOption.length - 1 && 'mb-2',
                      optionClasses.base,
                      optionClasses.size[size],
                      active && optionClasses.color[color],
                      selected && 'font-semibold text-gray-900',
                      disabled && 'text-opacity-50',
                      optionClassName,
                      selected && selectedOptionClassName
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      {option.label || option.name}
                      {selected && (
                        <span
                          className={cn(
                            iconContainerClasses.base,
                            iconContainerClasses.endIcon.base,
                            iconContainerClasses.endIcon.size[size],
                            CheckmarkIconClassName
                          )}
                        >
                          <CheckmarkIcon
                            className={cn(
                              'aegon-ui-combobox-check-icon',
                              iconClasses.size.endIcon[size],
                              iconClasses.color[color]
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </>
                  )}
                </ComboBox.Option>
              ))
            )}
          </ComboBox.Options>
        </Transition>
      </div>
    </ComboBox>
  );
}

AdvancedSelect.displayName = 'AdvancedSelect';
