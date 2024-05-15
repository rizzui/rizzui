import React from 'react';
import { cn } from '../../lib/cn';
import { Menu } from '@headlessui/react';
import { DropdownItem } from './dropdown-item';
import { DropdownMenu } from './dropdown-menu';
import { DropdownTrigger } from './dropdown-trigger';
import { DropdownProvider } from './dropdown-context';
import { ExtractProps } from '../../lib/extract-props';
import { makeClassName } from '../../lib/make-class-name';
import { dropdownStyles } from '../../lib/dropdown-list-style';

type Align = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
export type TheirPlacementType = `${Side}` | `${Side}-${Align}`;
export type OurPlacementType = `${Side}` | `${Side} ${Align}`;

export type DropdownProps = ExtractProps<typeof Menu> & {
  gap?: number;
  modal?: boolean;
  inPortal?: boolean;
  placement?: TheirPlacementType;
  rounded?: keyof typeof dropdownStyles.rounded;
  shadow?: keyof typeof dropdownStyles.shadow;
  children: React.ReactNode;
  className?: string;
};

export function Dropdown({
  inPortal = true,
  modal = false,
  placement = 'bottom-start',
  gap = 6,
  rounded = 'md',
  shadow = 'md',
  children,
  className,
}: DropdownProps) {
  return (
    <DropdownProvider
      value={{ rounded, shadow, inPortal, placement, gap, modal }}
    >
      <Menu
        as="div"
        className={cn(
          makeClassName(`dropdown-root inline-block`),
          'relative',
          className
        )}
      >
        {({ open }) => (
          <>
            {React.Children.map(children, (child) => {
              if (
                React.isValidElement(child) &&
                child.type === DropdownTrigger
              ) {
                return child;
              }
              if (React.isValidElement(child) && child.type === DropdownMenu) {
                return open ? child : null;
              }
              return null;
            })}
          </>
        )}
      </Menu>
    </DropdownProvider>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

Dropdown.displayName = 'Dropdown';
