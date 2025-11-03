import React from 'react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { MenuButton, type MenuButtonProps } from '@headlessui/react';

export type DropdownTriggerProps = MenuButtonProps & {
  ref?: React.Ref<HTMLButtonElement>;
};

export function DropdownTrigger({ 
  as, 
  className, 
  children, 
  ref,
  ...props 
}: DropdownTriggerProps) {
  let Component = as;
  return (
    <MenuButton
      as={as}
      ref={ref}
      {...(Component === 'button' && { type: 'button' })}
      className={cn(makeClassName(`dropdown-button`), className)}
      {...props}
    >
      {children}
    </MenuButton>
  );
}
