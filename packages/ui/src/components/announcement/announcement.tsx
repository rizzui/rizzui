import React from 'react';
import { cn } from '../../lib/cn';
import { Badge } from '../badge';
import { makeClassName } from '../../lib/make-class-name';

const announcementStyles = {
  base: 'flex items-center text-gray-600 w-fit',
  bgColor: {
    white: 'bg-white dark:bg-gray-50',
    gray: 'bg-gray-100',
  },
  size: {
    sm: 'text-xs pr-6 rtl:pl-6 pl-0.5 rtl:pr-0.5 py-0.5',
    md: 'text-sm pr-7 rtl:pl-7 pl-1 rtl:pr-1 py-1',
    lg: 'text-base pr-8 rtl:pl-8 pl-1 rtl:pr-1 py-1',
    xl: 'text-lg pr-9 rtl:pl-9 pl-1 rtl:pr-1 py-1',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  color: {
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
  size?: keyof typeof announcementStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof announcementStyles.rounded;
  /** Choose color variations */
  color?: keyof typeof announcementStyles.color;
  /** Background color of the component */
  bgColor?: keyof typeof announcementStyles.bgColor;
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

export const Announcement = ({
  size = 'md',
  rounded = 'md',
  color = 'primary',
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
      makeClassName(`announcement-root`),
      announcementStyles.base,
      announcementStyles.size[size],
      announcementStyles.rounded[rounded],
      announcementStyles.bgColor[bgColor],
      className,
    )}
  >
    {startIcon}

    {badgeText ? (
      <Badge
        size={size}
        rounded={rounded}
        color={color}
        className={cn(makeClassName(`announcement-badge`), badgeClassName)}
      >
        {badgeText}
      </Badge>
    ) : null}

    {highlightedText && (
      <span
        className={cn(
          makeClassName(`announcement-highlighted-text`),
          'ml-2.5 font-medium rtl:mr-2.5',
          announcementStyles.color[color],
          highlightedTextClassName,
        )}
      >
        {highlightedText}
      </span>
    )}

    <span
      className={cn(
        makeClassName(`announcement-text`),
        !highlightedText ? 'ml-2.5 rtl:mr-2.5' : 'ml-1 rtl:mr-1',
      )}
    >
      {children}
    </span>

    {endIcon}
  </div>
);

Announcement.displayName = 'Announcement';
