import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { MenuItem } from '@headlessui/react';
import { useDropdown } from './dropdown-context';
import { makeClassName } from '../../lib/make-class-name';

const dropdownItem = tv({
  base: 'flex w-full items-center px-3 py-1.5 rounded-[calc(var(--border-radius)/2)]',
});

export type DropdownItemProps = {
  as?: 'button' | 'li';
  className?: string;
  disabledClassName?: string;
  activeClassName?: string;
  disabled?: boolean;
  ref?: React.Ref<any>;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLLIElement>;

export function DropdownItem({
  as = 'button',
  className,
  children,
  disabled,
  activeClassName,
  disabledClassName,
  ref,
  ...props
}: DropdownItemProps) {
    let Component = as;

    return (
      <MenuItem disabled={disabled}>
        {({ disabled, focus }) => (
          <Component
            ref={ref}
            {...(Component === 'button' && { type: 'button' })}
            className={dropdownItem({
              className: cn(
                focus && ['bg-muted/70', activeClassName],
                disabled && disabledClassName,
                className
              ),
            })}
            {...props}
          >
            {children}
          </Component>
        )}
      </MenuItem>
    );
}
