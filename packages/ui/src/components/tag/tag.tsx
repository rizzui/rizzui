'use client';

import React from 'react';

import { cn } from '../../lib/cn';
import { XIcon } from '../../icons/x-mark';

const classes = {
  base: 'flex items-center cursor-pointer w-fit',
  size: {
    sm: 'text-xs h-6 px-2.5 py-1',
    DEFAULT: 'text-sm h-7 px-2.5 py-2',
    lg: 'text-base h-8 px-3 py-2',
    xl: 'text-lg h-9 px-3 py-2',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    pill: 'rounded-full',
  },
  variant: {
    flat: {
      base: '',
      color: {
        DEFAULT: 'bg-gray-100 text-gray-600 hover:bg-gray-300/70',
        primary:
          'bg-primary-lighter/70 text-primary hover:bg-primary-lighter/90',
        secondary:
          'bg-secondary-lighter/70 text-secondary hover:bg-secondary-lighter/90',
        danger: 'bg-red-lighter/70 text-red hover:bg-red-lighter/90',
        info: 'bg-blue-lighter/70 text-blue hover:bg-blue-lighter/90',
        success:
          'bg-green-lighter/70 text-green-dark hover:bg-green-lighter/90',
        warning:
          'bg-orange-lighter/70 text-orange-dark hover:bg-orange-lighter/90',
      },
    },
    outline: {
      base: 'bg-gray-0 border',
      color: {
        DEFAULT:
          'border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900',
        primary:
          'border-primary text-primary hover:text-primary-dark hover:border-primary-dark',
        secondary:
          'border-secondary text-secondary hover:text-secondary-dark hover:border-secondary-dark',
        danger: 'border-red text-red hover:text-red-dark hover:border-red-dark',
        info: 'border-blue text-blue hover:text-blue-dark hover:border-blue-dark',
        success:
          'border-green text-green hover:text-green-dark hover:border-green-dark',
        warning:
          'border-orange text-orange hover:text-orange-dark hover:border-orange-dark',
      },
    },
    solid: {
      base: 'border border-transparent',
      color: {
        DEFAULT: 'bg-gray-900 hover:bg-gray-1000 text-gray-0',
        primary: 'bg-primary hover:bg-primary-dark text-white',
        secondary: 'bg-secondary hover:bg-secondary-dark text-white',
        danger: 'bg-red hover:bg-red-dark text-white',
        info: 'bg-blue hover:bg-blue-dark text-white',
        success: 'bg-green hover:bg-green-dark text-white',
        warning: 'bg-orange hover:bg-orange-dark text-white',
      },
    },
  },
};

const iconClasses = {
  size: {
    sm: 'w-3 ml-1 rtl:mr-1',
    DEFAULT: 'w-3.5 ml-2 rtl:mr-2',
    lg: 'w-4 ml-2.5 rtl:mr-2.5',
    xl: 'w-5 ml-2.5 rtl:mr-2.5',
  },
};

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the component */
  size?: keyof typeof classes.size;
  /** The rounded variants are: */
  rounded?: keyof typeof classes.rounded;
  /** These are the variants we support */
  variant?: keyof typeof classes.variant;
  /** Choose color variations */
  color?: keyof typeof classes.variant['flat']['color'];
  /** Pass content of tag as children */
  children?: React.ReactNode;
  /** Whether to clear tag */
  clearable?: boolean;
  /** Pass function to clear tag */
  onClear?(e: React.MouseEvent): void;
  /** Pass custom cancel icon */
  cancelIcon?: React.ReactNode;
  /** Pass className to customize tag design */
  className?: string;
  /** Pass iconClassName to design icon */
  iconClassName?: string;
}

/** Tag component is used to convey grouping information of elements.
 * It is a standalone component which is commonly used for filtering or triggering some kind of action.
 * Here is the API documentation of Tag component.
 */

const Tag = ({
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'flat',
  color = 'DEFAULT',
  children,
  clearable = false,
  onClear,
  cancelIcon,
  className,
  iconClassName,
}: TagProps) => (
  <div
    className={cn(
      classes.base,
      classes.size[size],
      classes.rounded[rounded],
      classes.variant[variant].base,
      classes.variant[variant].color[color],
      className
    )}
  >
    {children}
    {clearable &&
      (cancelIcon || (
        <XIcon
          data-testid="tag-clear-icon"
          onClick={onClear}
          className={cn(iconClasses.size[size], iconClassName)}
        />
      ))}
  </div>
);

Tag.displayName = 'Tag';
export default Tag;
