'use client';

import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';

const dropdownClasses = {
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  shadow: {
    none: 'shadow-none',
    sm: 'shadow-sm drop-shadow-sm',
    DEFAULT: 'shadow-md drop-shadow',
    lg: 'shadow-lg drop-shadow-md',
    xl: 'shadow-xl drop-shadow-lg',
  },
};

export type DropdownProps = ExtractProps<typeof Menu> & {
  /** Add label in dropdown button */
  label: React.ReactNode;
  /** The rounded variants supported by this component are: */
  rounded?: keyof typeof dropdownClasses.rounded;
  /** The shadow variants supported by this component are: */
  shadow?: keyof typeof dropdownClasses.shadow;
  /** Dropdown item as children */
  children: React.ReactNode;
  /** Add className to customize design for container of dropdown button and items */
  className?: string;
  /** Add dropdownButtonClassName to design dropdown button */
  dropdownButtonClassName?: string;
  /** Add dropdownClassName to design container for dropdown items */
  dropdownClassName?: string;
};

/**
 * A floating container which will appear on clicking the dropdown button.
 * Here is the API documentation of the Dropdown component.
 * You can use the following props to create a dropdown.
 */

const Dropdown = ({
  label,
  rounded = 'DEFAULT',
  shadow = 'DEFAULT',
  children,
  className,
  dropdownButtonClassName,
  dropdownClassName,
}: DropdownProps) => (
  <Menu as="div" className={cn('relative', className)}>
    <Menu.Button as="div" className={dropdownButtonClassName}>
      {label}
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        data-testid="dropdown-container"
        className={cn(
          'absolute z-10 mt-2 border border-gray-100 bg-white',
          dropdownClasses.rounded[rounded],
          dropdownClasses.shadow[shadow],
          dropdownClassName
        )}
      >
        {children}
      </Menu.Items>
    </Transition>
  </Menu>
);

Dropdown.displayName = 'Dropdown';
export default Dropdown;