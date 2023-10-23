import React from 'react';
import { Menu } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

type DropdownButtonProps = {
  as?: 'button' | 'div';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLDivElement>;

export const DropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(({ as = 'div', className, children, ...props }, ref) => {
  let Component = as;
  const MenuButton: React.ElementType = Menu.Button;

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
});

DropdownTrigger.displayName = 'DropdownTrigger';
