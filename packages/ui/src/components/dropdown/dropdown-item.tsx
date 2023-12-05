import React from 'react';
import { Menu } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';
import { useDropdown } from './dropdown-context';

export const dropdownItemStyles = {
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-[4px]',
    lg: 'rounded-md',
    xl: 'rounded-lg',
  },
};

export type DropdownItemProps = {
  as?: 'button' | 'li';
  className?: string;
  activeClassName?: string;
  disabledClassName?: string;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLLIElement>;

export const DropdownItem = React.forwardRef<
  HTMLButtonElement,
  DropdownItemProps
>(
  (
    {
      as = 'button',
      className,
      children,
      disabled,
      activeClassName,
      disabledClassName,
      ...props
    },
    ref: React.ForwardedRef<any>
  ) => {
    const { rounded } = useDropdown();
    let Component = as;
    return (
      <Menu.Item disabled={disabled}>
        {({ active, disabled }) => (
          <Component
            ref={ref}
            {...(Component === 'button' && { type: 'button' })}
            className={cn(
              makeClassName(`dropdown-item`),
              'flex w-full items-center px-3.5 py-1.5',
              rounded && dropdownItemStyles.rounded[rounded],
              active && ['bg-muted/70', activeClassName],
              disabled && disabledClassName,
              className
            )}
            {...props}
          >
            {children}
          </Component>
        )}
      </Menu.Item>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';
