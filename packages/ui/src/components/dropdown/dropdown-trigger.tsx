import React from 'react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { MenuButton, type MenuButtonProps } from '@headlessui/react';

export type DropdownTriggerProps = MenuButtonProps;

export function DropdownTrigger({ 
  as, 
  className, 
  children,
  ...props 
}: DropdownTriggerProps) {
  let Component = as;
  return (
    <MenuButton
      as={as}
      {...(Component === 'button' && { type: 'button' })}
      className={cn(makeClassName(`dropdown-button`), className)}
      {...props}
    >
      {children}
    </MenuButton>
  );
}
