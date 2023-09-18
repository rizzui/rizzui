import React from "react";
import "rc-pagination/assets/index.css";
import RcPagination, {
  PaginationProps as RcPaginationProps,
} from "rc-pagination";

import { cn } from "rizzui";

const classes = {
  base: {
    item: "[&>.rc-pagination-item>a]:text-gray-700 [&>.rc-pagination-item>a]:font-medium [&>li.rc-pagination-item]:border-gray-300 [&>.rc-pagination-item>a]:hover:text-gray-900 [&>.rc-pagination-item>a]:focus:text-gray-700 [&>.rc-pagination-item:not(.rc-pagination-item-active)]:bg-transparent",
    icon: "[&>.rc-pagination-prev]:align-baseline [&>.rc-pagination-next]:align-baseline",
    outline:
      "[&>.rc-pagination-item]:leading-7 [&>.rc-pagination-item]:border-0",
    jumperDiv:
      "[&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-gray-500",
    jumperInput:
      "[&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!py-[3px] [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:border-gray-300 [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:ring-0",
  },
  rounded: {
    none: "[&>.rc-pagination-item]:rounded-none [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-none",
    sm: "[&>.rc-pagination-item]:rounded-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-sm",
    DEFAULT:
      "[&>.rc-pagination-item]:rounded-md [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-md",
    lg: "[&>.rc-pagination-item]:rounded-lg [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-lg",
    full: "[&>.rc-pagination-item]:rounded-full [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-full",
  },
  variant: {
    solid: {
      base: "[&>.rc-pagination-item-active>a]:!text-gray-0 [&>.rc-pagination-item-active>a]:hover:text-gray-0",
      color: {
        DEFAULT:
          "[&>.rc-pagination-item-active]:bg-gray-900 [&>li.rc-pagination-item-active]:border-gray-900 [&>.rc-pagination-item-active]:hover:border-gray-900 [&>.rc-pagination-item-active]:focus:border-gray-900 dark:[&>.rc-pagination-item-active]:bg-gray-200 dark:[&>.rc-pagination-item-active>a]:!text-gray-700 dark:[&>.rc-pagination-item-active>a]:hover:text-gray-700 dark:[&>li.rc-pagination-item-active]:border-gray-200 dark:[&>.rc-pagination-item-active]:hover:border-gray-200 dark:[&>.rc-pagination-item-active]:focus:border-gray-200",
        primary:
          "[&>.rc-pagination-item-active]:bg-primary  [&>li.rc-pagination-item-active]:border-primary [&>.rc-pagination-item-active]:hover:border-primary [&>.rc-pagination-item-active]:focus:border-primary",
        secondary:
          "[&>.rc-pagination-item-active]:bg-secondary [&>li.rc-pagination-item-active]:border-secondary [&>.rc-pagination-item-active]:hover:border-secondary [&>.rc-pagination-item-active]:focus:border-secondary",
        danger:
          "[&>.rc-pagination-item-active]:bg-red [&>li.rc-pagination-item-active]:border-red [&>.rc-pagination-item-active]:hover:border-red [&>.rc-pagination-item-active]:focus:border-red",
        info: "[&>.rc-pagination-item-active]:bg-blue [&>li.rc-pagination-item-active]:border-blue [&>.rc-pagination-item-active]:hover:border-blue [&>.rc-pagination-item-active]:focus:border-blue",
        success:
          "[&>.rc-pagination-item-active]:bg-green [&>li.rc-pagination-item-active]:border-green [&>.rc-pagination-item-active]:hover:border-green [&>.rc-pagination-item-active]:focus:border-green",
        warning:
          "[&>.rc-pagination-item-active]:bg-orange [&>li.rc-pagination-item-active]:border-orange [&>.rc-pagination-item-active]:hover:border-orange [&>.rc-pagination-item-active]:focus:border-orange",
      },
    },
    flat: {
      base: "",
      color: {
        DEFAULT:
          "[&>.rc-pagination-item-active]:bg-gray-100 [&>li.rc-pagination-item-active]:border-gray-100 [&>.rc-pagination-item-active>a]:!text-gray-900 [&>.rc-pagination-item-active>a]:hover:!text-gray-900 [&>.rc-pagination-item-active>a]:focus:!text-gray-900 [&>.rc-pagination-item-active]:hover:border-gray-100 [&>.rc-pagination-item-active]:focus:border-gray-100",
        primary:
          "[&>.rc-pagination-item-active]:bg-primary-lighter [&>li.rc-pagination-item-active]:border-primary-lighter [&>.rc-pagination-item-active>a]:text-primary-dark [&>.rc-pagination-item-active>a]:hover:text-primary-dark [&>.rc-pagination-item-active>a]:focus:text-primary-dark [&>.rc-pagination-item-active]:hover:border-primary-lighter [&>.rc-pagination-item-active]:focus:border-primary-lighter",
        secondary:
          "[&>.rc-pagination-item-active]:bg-secondary-lighter [&>li.rc-pagination-item-active]:border-secondary-lighter [&>.rc-pagination-item-active>a]:text-secondary-dark [&>.rc-pagination-item-active>a]:hover:text-secondary-dark [&>.rc-pagination-item-active>a]:focus:text-secondary-dark [&>.rc-pagination-item-active]:hover:border-secondary-lighter [&>.rc-pagination-item-active]:focus:border-secondary-lighter",
        danger:
          "[&>.rc-pagination-item-active]:bg-red-lighter [&>li.rc-pagination-item-active]:border-red-lighter [&>.rc-pagination-item-active>a]:text-red-dark [&>.rc-pagination-item-active>a]:hover:text-red-dark [&>.rc-pagination-item-active>a]:focus:text-red-dark [&>.rc-pagination-item-active]:hover:border-red-lighter [&>.rc-pagination-item-active]:focus:border-red-lighter",
        info: "[&>.rc-pagination-item-active]:bg-blue-lighter [&>li.rc-pagination-item-active]:border-blue-lighter [&>.rc-pagination-item-active>a]:text-blue-dark [&>.rc-pagination-item-active>a]:hover:text-blue-dark [&>.rc-pagination-item-active>a]:focus:text-blue-dark [&>.rc-pagination-item-active]:hover:border-blue-lighter [&>.rc-pagination-item-active]:focus:border-blue-lighter",
        success:
          "[&>.rc-pagination-item-active]:bg-green-lighter [&>li.rc-pagination-item-active]:border-green-lighter [&>.rc-pagination-item-active>a]:text-green-dark [&>.rc-pagination-item-active>a]:hover:text-green-dark [&>.rc-pagination-item-active>a]:focus:text-green-dark [&>.rc-pagination-item-active]:hover:border-green-lighter [&>.rc-pagination-item-active]:focus:border-green-lighter",
        warning:
          "[&>.rc-pagination-item-active]:bg-orange-lighter [&>li.rc-pagination-item-active]:border-orange-lighter [&>.rc-pagination-item-active>a]:text-orange-dark [&>.rc-pagination-item-active>a]:hover:text-orange-dark [&>.rc-pagination-item-active>a]:focus:text-orange-dark [&>.rc-pagination-item-active]:hover:border-orange-lighter [&>.rc-pagination-item-active]:focus:border-orange-lighter",
      },
    },
  },
};

const iconClasses = {
  base: "text-gray-500",
  outline: "border border-gray-300 p-[5px]",
  center: "inline-block align-middle",
  rounded: {
    none: "rounded-none",
    sm: "rounded-sm",
    DEFAULT: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },
};

type IconProps = {
  icon: React.ReactNode;
  rounded: keyof typeof iconClasses.rounded;
  outline: boolean;
  className: string;
};

const PrevIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconClasses.base,
      outline ? iconClasses.outline : iconClasses.center,
      iconClasses.rounded[rounded],
      className
    )}
  >
    {icon || (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="m-auto h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    )}
  </div>
);

const NextIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconClasses.base,
      outline ? iconClasses.outline : iconClasses.center,
      iconClasses.rounded[rounded],
      className
    )}
  >
    {icon || (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="m-auto h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    )}
  </div>
);

const JumpPrevIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconClasses.base,
      outline ? iconClasses.outline : iconClasses.center,
      iconClasses.rounded[rounded],
      !icon && outline && "py-0 leading-[26px]",
      className
    )}
  >
    {icon || "•••"}
  </div>
);

const JumpNextIcon = ({ icon, rounded, outline, className }: IconProps) => (
  <div
    className={cn(
      iconClasses.base,
      outline ? iconClasses.outline : iconClasses.center,
      iconClasses.rounded[rounded],
      !icon && outline && "py-0 leading-[26px]",
      className
    )}
  >
    {icon || "•••"}
  </div>
);

export const localeDefault = {
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size",
};

export interface PaginationProps extends RcPaginationProps {
  /** Whether show outline or not */
  outline?: boolean;
  /** Rounded variations are */
  rounded?: keyof typeof classes.rounded;
  /** These are the variants we support */
  variant?: keyof typeof classes.variant;
  /** Available colors */
  color?: keyof typeof classes.variant.flat.color;
  /** Pass className for previous icon */
  prevIconClassName?: string;
  /** Pass className for next icon */
  nextIconClassName?: string;
  /** Pass className for previous icon */
  jumpPrevIconClassName?: string;
  /** Pass className for next icon */
  jumpNextIconClassName?: string;
}

/**
 * We used `rc-pagination` package to build pagination component.
 * See their [official documentation](https://pagination-react-component.vercel.app/) for more info.
 */
export default function Pagination({
  outline = false,
  rounded = "DEFAULT",
  variant = "solid",
  color = "DEFAULT",
  locale,
  nextIcon,
  prevIcon,
  prevIconClassName,
  nextIconClassName,
  jumpPrevIcon,
  jumpNextIcon,
  jumpPrevIconClassName,
  jumpNextIconClassName,
  className,
  ...props
}: PaginationProps) {
  return (
    <RcPagination
      locale={locale || localeDefault}
      nextIcon={
        <NextIcon
          icon={nextIcon as React.ReactNode}
          rounded={rounded}
          outline={outline}
          className={nextIconClassName as string}
        />
      }
      prevIcon={
        <PrevIcon
          icon={prevIcon as React.ReactNode}
          rounded={rounded}
          outline={outline}
          className={prevIconClassName as string}
        />
      }
      jumpPrevIcon={
        <JumpPrevIcon
          icon={jumpPrevIcon as React.ReactNode}
          rounded={rounded}
          outline={outline}
          className={jumpPrevIconClassName as string}
        />
      }
      jumpNextIcon={
        <JumpNextIcon
          icon={jumpNextIcon as React.ReactNode}
          rounded={rounded}
          outline={outline}
          className={jumpNextIconClassName as string}
        />
      }
      className={cn(
        classes.base.item,
        classes.base.jumperDiv,
        classes.base.jumperInput,
        !outline && classes.base.outline,
        !outline && classes.base.icon,
        classes.rounded[rounded],
        classes.variant[variant].base,
        classes.variant[variant].color[color],
        className
      )}
      {...props}
    />
  );
}

Pagination.displayName = "Pagination";
