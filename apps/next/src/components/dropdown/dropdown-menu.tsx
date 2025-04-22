import React from "react";
import { cn } from "../../lib/cn";
import { useDropdown } from "./dropdown-context";
import { ourPlacementObject } from "./dropdown.lib";
import { makeClassName } from "../../lib/make-class-name";
import { dropdownStyles } from "../../lib/dropdown-list-style";
import { MenuItems, Transition, type MenuItemsProps } from "@headlessui/react";

type DropdownMenuProps = {
  className?: string;
  anchorWidth?: boolean;
} & MenuItemsProps;

export function DropdownMenu({
  className,
  children,
  anchorWidth,
  ...props
}: React.PropsWithChildren<DropdownMenuProps>) {
  const { rounded, shadow, placement, gap, inPortal, modal } = useDropdown();

  return (
    <MenuItems
      modal={modal}
      portal={inPortal}
      {...(inPortal && {
        anchor: { to: ourPlacementObject[placement], gap: gap },
      })}
      transition
      className={cn(
        makeClassName(`dropdown-menu`),
        dropdownStyles.base,
        anchorWidth && "w-[--button-width]",
        shadow && dropdownStyles.shadow[shadow],
        rounded && dropdownStyles.rounded[rounded],
        !inPortal && "absolute start-0 z-10 mt-1.5",
        className
      )}
      {...props}
    >
      {children}
    </MenuItems>
  );
}

DropdownMenu.displayName = "DropdownMenu";
