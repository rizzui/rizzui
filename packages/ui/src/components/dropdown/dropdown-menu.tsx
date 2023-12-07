import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FloatingPortal } from '@floating-ui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { useDropdown } from './dropdown-context';

export const dropdownStyles = {
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  shadow: {
    none: 'shadow-none',
    sm: 'drop-shadow-sm',
    md: 'drop-shadow',
    lg: 'drop-shadow-md',
    xl: 'drop-shadow-lg',
  },
};

type DropdownMenuProps = {
  as?: 'ul' | 'div';
  className?: string;
};

export function DropdownMenu({
  as = 'div',
  className,
  children,
}: React.PropsWithChildren<DropdownMenuProps>) {
  const { rounded, shadow, refs, strategy, x, y } = useDropdown();
  const TransitionComponent: React.ElementType = Transition;
  const MenuItems: React.ElementType = Menu.Items;

  return (
    <FloatingPortal>
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
            'z-30 w-48 border border-muted bg-background p-1.5 focus-visible:outline-none dark:bg-muted/30 dark:backdrop-blur-3xl',
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
      <span className="sr-only">rizzui</span>
    </FloatingPortal>
  );
}

DropdownMenu.displayName = 'DropdownMenu';
