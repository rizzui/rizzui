import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Menu } from '@headlessui/react';
import { DropdownItem } from './dropdown-item';
import { DropdownMenu } from './dropdown-menu';
import { DropdownTrigger } from './dropdown-trigger';
import { DropdownProvider } from './dropdown-context';
import type { ExtractProps } from '../../lib/extract-props';
import { makeClassName } from '../../lib/make-class-name';
import { dropdownStyles } from '../../lib/dropdown-list-style';
import type { TheirPlacementType } from './dropdown.lib';

export type DropdownProps = ExtractProps<typeof Menu> & {
  gap?: number;
  modal?: boolean;
  inPortal?: boolean;
  placement?: TheirPlacementType;
  shadow?: keyof typeof dropdownStyles.shadow;
  children: ReactNode;
  className?: string;
};

export function Dropdown({
  inPortal = true,
  modal = false,
  placement = 'bottom-start',
  gap = 6,
  shadow = 'md',
  children,
  className,
}: DropdownProps) {
  return (
    <DropdownProvider value={{ shadow, inPortal, placement, gap, modal }}>
      <Menu
        as="div"
        className={cn(
          makeClassName(`dropdown-root inline-block`),
          'relative',
          className
        )}
      >
        {children}
      </Menu>
    </DropdownProvider>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

Dropdown.displayName = 'Dropdown';
