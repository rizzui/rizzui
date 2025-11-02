import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { Badge } from '../badge';
import { makeClassName } from '../../lib/make-class-name';

const announcement = tv({
  base: 'flex items-center w-fit',
  variants: {
    size: {
      sm: 'text-xs pe-6 ps-0.5 py-0.5',
      md: 'text-sm pe-7 ps-1 py-1',
      lg: 'text-base pe-8 ps-1 py-1',
      xl: 'text-lg pe-9 ps-1 py-1',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      pill: 'rounded-full',
    },
    bgColor: {
      background: 'bg-background',
      muted: 'bg-muted/60',
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: 'md',
    bgColor: 'background',
  },
});

const announcementHighlight = tv({
  base: 'ml-2.5 font-medium rtl:mr-2.5',
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      danger: 'text-red',
      info: 'text-blue',
      success: 'text-green-dark',
      warning: 'text-orange-dark',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type AnnouncementVariant = VariantProps<typeof announcement>;
type HighlightedTextVariant = VariantProps<typeof announcementHighlight>;

export interface AnnouncementProps {
  /** Size of the component */
  size?: AnnouncementVariant['size'];
  /** The rounded variants are: */
  rounded?: AnnouncementVariant['rounded'];
  /** Choose color variations */
  color?: HighlightedTextVariant['color'];
  /** Background color of the component */
  bgColor?: AnnouncementVariant['bgColor'];
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
    className={announcement({
      size,
      rounded,
      bgColor,
      className,
    })}
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
        className={announcementHighlight({
          color,
          className: cn(makeClassName(`announcement-highlighted-text`), highlightedTextClassName),
        })}
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
