import React from 'react';
import cn from '../../lib/cn';
import Badge from '../badge';

const classes = {
  base: 'flex items-center text-gray-600 w-fit',
  bgColor: {
    white: 'bg-gray-0',
    gray: 'bg-gray-200/60',
  },
  size: {
    sm: 'text-xs pr-6 rtl:pl-6 pl-0.5 rtl:pr-0.5 py-0.5',
    DEFAULT: 'text-sm pr-7 rtl:pl-7 pl-1 rtl:pr-1 py-1',
    lg: 'text-base pr-8 rtl:pl-8 pl-1 rtl:pr-1 py-1',
    xl: 'text-lg pr-9 rtl:pr-9 pl-1 rtl:pr-1 py-1',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    DEFAULT: 'rounded-full',
  },
  color: {
    DEFAULT: '!text-gray-1000',
    primary: 'text-primary',
    secondary: 'text-secondary',
    danger: 'text-red',
    info: 'text-blue',
    success: 'text-green-dark',
    warning: 'text-orange-dark',
  },
};

export interface AnnouncementProps {
  /** Size of the component */
  size?: keyof typeof classes.size;
  /** The rounded variants are: */
  rounded?: keyof typeof classes.rounded;
  /** Choose color variations */
  color?: keyof typeof classes.color;
  /** Background color of the component */
  bgColor?: keyof typeof classes.bgColor;
  /** Pass badge text to have badge at the beginning */
  badgeText?: string;
  /** Pass highlighted text at the beginning */
  highlightedText?: string;
  /** Pass className to customize announcement design */
  className?: string;
  /** Place icon at the beginning */
  startIcon?: React.ReactNode;
  /** Place icon at the end */
  endIcon?: React.ReactNode;
  /** Pass badgeClassName to style badge */
  badgeClassName?: string;
  /** Pass hightlightedTextClassName to style highlighted text */
  highlightedTextClassName?: string;
}

const Announcement = ({
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  color = 'DEFAULT',
  bgColor = 'white',
  badgeText,
  highlightedText,
  children,
  startIcon,
  endIcon,
  className,
  badgeClassName,
  highlightedTextClassName,
}: React.PropsWithChildren<AnnouncementProps>) => (
  <div
    className={cn(
      classes.base,
      classes.size[size],
      classes.rounded[rounded],
      classes.bgColor[bgColor],
      className
    )}
  >
    {startIcon}
    {badgeText && (
      <Badge
        size={size}
        rounded={rounded}
        color={color}
        className={badgeClassName}
      >
        {badgeText}
      </Badge>
    )}
    {highlightedText && (
      <span
        className={cn(
          'ml-2.5 font-medium rtl:mr-2.5',
          classes.color[color],
          highlightedTextClassName
        )}
      >
        {highlightedText}
      </span>
    )}
    <span
      className={cn(!highlightedText ? 'ml-2.5 rtl:mr-2.5' : 'ml-1 rtl:mr-1')}
    >
      {children}
    </span>
    {endIcon}
  </div>
);

Announcement.displayName = 'Announcement';
export default Announcement;
