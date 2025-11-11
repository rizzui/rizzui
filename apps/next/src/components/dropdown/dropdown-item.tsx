import type { Ref, ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { MenuItem } from '@headlessui/react';

const dropdownItem = tv({
  base: 'flex w-full items-center px-3 py-1.5 rounded-[calc(var(--border-radius)/2)] cursor-pointer',
});

export type DropdownItemProps = {
  as?: 'button' | 'li';
  className?: string;
  disabledClassName?: string;
  activeClassName?: string;
  disabled?: boolean;
  ref?: Ref<any>;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  HTMLAttributes<HTMLLIElement>;

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
  return (
    <MenuItem disabled={disabled}>
      {({ disabled, focus }) => {
        const Component = as;
        return (
          <Component
            ref={ref}
            {...(as === 'button' && { type: 'button' as const })}
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
        );
      }}
    </MenuItem>
  );
}
