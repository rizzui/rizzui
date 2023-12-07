import React from 'react';
import { cn } from '../../lib/cn';
import { Badge } from '../badge';
import { makeClassName } from '../../lib/make-class-name';
import { roundedStyles } from '../../lib/rounded';

const announcementStyles = {
  base: 'flex items-center w-fit',
  bgColor: {
    background: 'bg-background',
    muted: 'bg-muted/60',
  },
  size: {
    sm: 'text-xs pe-6 ps-0.5 py-0.5',
    md: 'text-sm pe-7 ps-1 py-1',
    lg: 'text-base pe-8 ps-1 py-1',
    xl: 'text-lg pe-9 ps-1 py-1',
  },
  rounded: roundedStyles,
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
  bgColor = 'background',
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
      className
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
          highlightedTextClassName
        )}
      >
        {highlightedText}
      </span>
    )}

    <span
      className={cn(
        makeClassName(`announcement-text`),
        !highlightedText ? 'ml-2.5 rtl:mr-2.5' : 'ml-1 rtl:mr-1'
      )}
    >
      {children}
    </span>

    {endIcon}
  </div>
);

Announcement.displayName = 'Announcement';
