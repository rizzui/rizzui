import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { Badge } from '../badge';

const announcement = tv({
  base: 'flex items-center w-fit rounded-full',
  variants: {
    size: {
      sm: 'text-xs pe-6 ps-0.5 py-0.5',
      md: 'text-sm pe-7 ps-1 py-1',
      lg: 'text-base pe-8 ps-1 py-1',
    },
    bgColor: {
      background: 'bg-background',
      muted: 'bg-muted/60',
    },
  },
  defaultVariants: {
    size: 'md',
    bgColor: 'background',
  },
});

const announcementHighlight = tv({
  base: 'rizzui-announcement-highlighted-text ms-2.5 font-medium',
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
  size?: AnnouncementVariant['size'];
  color?: HighlightedTextVariant['color'];
  bgColor?: AnnouncementVariant['bgColor'];
  badgeText?: string;
  highlightedText?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  badgeClassName?: string;
  highlightedTextClassName?: string;
}

export const Announcement = ({
  size = 'md',
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
      bgColor,
      className,
    })}
  >
    {startIcon}

    {badgeText ? (
      <Badge
        size={size}
        color={color}
        className={cn('rizzui-announcement-badge', badgeClassName)}
      >
        {badgeText}
      </Badge>
    ) : null}

    {highlightedText && (
      <span
        className={announcementHighlight({
          color,
          className: highlightedTextClassName,
        })}
      >
        {highlightedText}
      </span>
    )}

    <span
      className={cn(
        'rizzui-announcement-text',
        !highlightedText ? 'ms-2.5' : 'ms-1'
      )}
    >
      {children}
    </span>

    {endIcon}
  </div>
);

Announcement.displayName = 'Announcement';
