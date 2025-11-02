import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { MenuItem } from '@headlessui/react';
import { useDropdown } from './dropdown-context';
import { makeClassName } from '../../lib/make-class-name';

const dropdownItem = tv({
  base: 'flex w-full items-center px-3 py-1.5',
  variants: {
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-[4px]',
      lg: 'rounded-md',
      xl: 'rounded-lg',
    },
  },
});

export type DropdownItemProps = {
  as?: 'button' | 'li';
  className?: string;
  disabledClassName?: string;
  activeClassName?: string;
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
      <MenuItem disabled={disabled}>
        {({ disabled, focus }) => (
          <Component
            ref={ref}
            {...(Component === 'button' && { type: 'button' })}
            className={dropdownItem({
              rounded,
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
);

DropdownItem.displayName = 'DropdownItem';
