import React from 'react';
import { Menu } from '@headlessui/react';

import { cn } from '../../lib/cn';

export type DropdownItemRenderProps = {
  /** Whether or not the item is the active/focused in the list. */
  active: boolean;
  /** Whether or not the item is disabled for keyboard navigation and ARIA purposes. */
  disabled: boolean;
};

export type DropdownItemProps = {
  /** Pass children for dropdown items */
  children: ({ active, disabled }: DropdownItemRenderProps) => React.ReactNode;
  /** Add className to design each item in the dropdown */
  className?: string;
  /** Add activeClassName to design the currently active item */
  activeClassName?: string;
  /** Add disabledClassName to design the disabled item */
  disabledClassName?: string;
};

/** A component for adding items in the dropdown.
 * Should be used inside Dropdown component.
 * Here is the API Documentation for DropdownItem Component.
 */

const DropdownItem = ({
  className,
  children,
  activeClassName,
  disabledClassName,
}: DropdownItemProps) => (
  <Menu.Item>
    {({ active, disabled }) => (
      <button
        type="button"
        className={cn(
          'flex w-full text-sm',
          active && activeClassName,
          disabled && disabledClassName,
          className
        )}
      >
        {children({ active, disabled })}
      </button>
    )}
  </Menu.Item>
);

DropdownItem.displayName = 'DropdownItem';
export default DropdownItem;
