import { cn } from '../../lib/cn';
import React, { Fragment } from 'react';
import { useDropdown } from './dropdown-context';
import { ourPlacementObject } from './dropdown.lib';
import { makeClassName } from '../../lib/make-class-name';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import { MenuItems, Transition, type MenuItemsProps } from '@headlessui/react';

type DropdownMenuProps = {
  className?: string;
} & MenuItemsProps;

export function DropdownMenu({
  className,
  children,
  ...props
}: React.PropsWithChildren<DropdownMenuProps>) {
  const { rounded, shadow, placement, gap, inPortal, modal } = useDropdown();

  return (
    <>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          anchor={{
            to: ourPlacementObject[placement],
            gap: gap,
          }}
          portal={inPortal}
          modal={modal}
          className={cn(
            makeClassName(`dropdown-menu`),
            'w-48',
            dropdownStyles.base,
            rounded && dropdownStyles.rounded[rounded],
            shadow && dropdownStyles.shadow[shadow],
            className
          )}
          {...props}
        >
          {children}
        </MenuItems>
      </Transition>
    </>
  );
}

DropdownMenu.displayName = 'DropdownMenu';
