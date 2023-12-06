import React from 'react';
import { Menu } from '@headlessui/react';
import {
  type Placement,
  flip,
  shift,
  offset,
  autoUpdate,
  useFloating,
} from '@floating-ui/react';
import { cn } from '../../lib/cn';
import { ExtractProps } from '../../lib/extract-props';
import { makeClassName } from '../../lib/make-class-name';
import { DropdownTrigger } from './dropdown-trigger';
import { DropdownMenu, dropdownStyles } from './dropdown-menu';
import { DropdownItem } from './dropdown-item';
import { DropdownProvider } from './dropdown-context';

export type DropdownProps = ExtractProps<typeof Menu> & {
  placement?: Placement;
  rounded?: keyof typeof dropdownStyles.rounded;
  shadow?: keyof typeof dropdownStyles.shadow;
  children: React.ReactNode;
  className?: string;
};

export function Dropdown({
  placement = 'bottom-start',
  rounded = 'md',
  shadow = 'md',
  children,
  className,
}: DropdownProps) {
  const { x, y, refs, strategy } = useFloating({
    placement,
    middleware: [
      flip(),
      shift(),
      offset({
        mainAxis: 6,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  return (
    <DropdownProvider value={{ rounded, shadow, refs, x, y, strategy }}>
      <Menu
        as="div"
        ref={refs.setReference}
        className={cn(
          makeClassName(`dropdown-root inline-block`),
          'relative',
          className
        )}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === DropdownTrigger) {
            return child;
          }
          if (React.isValidElement(child) && child.type === DropdownMenu) {
            return child;
          }
          return null;
        })}
      </Menu>
    </DropdownProvider>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

Dropdown.displayName = 'Dropdown';
