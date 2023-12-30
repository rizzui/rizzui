import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FloatingPortal } from '@floating-ui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import { useDropdown } from './dropdown-context';

type DropdownMenuProps = {
  as?: 'ul' | 'div';
  className?: string;
};

export function DropdownMenu({
  as = 'div',
  className,
  children,
}: React.PropsWithChildren<DropdownMenuProps>) {
  const { inPortal, rounded, shadow, refs, strategy, x, y } = useDropdown();
  const TransitionComponent: React.ElementType = Transition;
  const MenuItems: React.ElementType = Menu.Items;

  const PortalComponent = inPortal ? FloatingPortal : Fragment;

  return (
    <PortalComponent>
      <TransitionComponent
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          as={as}
          ref={refs.setFloating}
          data-testid="dropdown-menu"
          className={cn(
            makeClassName(`dropdown-menu`),
            'w-48',
            dropdownStyles.base,
            rounded && dropdownStyles.rounded[rounded],
            shadow && dropdownStyles.shadow[shadow],
            className
          )}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          {children}
        </MenuItems>
      </TransitionComponent>
    </PortalComponent>
  );
}

DropdownMenu.displayName = 'DropdownMenu';
