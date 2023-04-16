'use client';

import React from 'react';

import { cn } from '../../lib/cn';
import { XIcon } from '../../icons/x-mark';

const classes = {
  base: 'relative block w-full bg-transparent break-all',
  size: {
    sm: 'px-2.5 py-2 text-xs leading-5',
    DEFAULT: 'px-4 py-3 text-sm leading-6',
    lg: 'px-4 py-4 text-base leading-7',
    xl: 'px-5 py-5 text-base leading-7',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    DEFAULT: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  leftPadding: {
    base: 'rtl:pl-[inherit]',
    size: {
      sm: 'pl-8 rtl:pr-8',
      DEFAULT: 'pl-10 rtl:pr-10',
      lg: 'pl-11 rtl:pr-11',
      xl: 'pl-12 rtl:pr-12',
    },
  },
  variant: {
    flat: {
      base: 'shadow-md',
      color: {
        DEFAULT: '',
        primary: 'bg-primary-lighter/70',
        secondary: 'bg-secondary-lighter/70',
        danger: 'bg-red-lighter/70',
        info: 'bg-blue-lighter/70',
        success: 'bg-green-lighter/70',
        warning: 'bg-orange-lighter/80',
      },
    },
    outline: {
      base: 'border bg-white',
      color: {
        DEFAULT: 'border-gray-900',
        primary: 'border-primary-dark',
        secondary: 'border-secondary-dark',
        danger: 'border-red',
        info: 'border-blue',
        success: 'border-green',
        warning: 'border-orange',
      },
    },
  },
};

const titleClasses = {
  size: {
    sm: 'text-base',
    DEFAULT: 'text-lg',
    lg: 'text-xl',
    xl: 'text-xl',
  },
};

const mediaSuffixClasses = {
  base: 'absolute top-0 flex justify-center',
  padding: {
    sm: 'py-3',
    DEFAULT: 'py-4',
    lg: 'py-5',
    xl: 'py-6',
  },
  position: {
    left: {
      sm: 'left-2.5 rtl:right-2.5 rtl:left-auto',
      DEFAULT: 'left-4 rtl:right-4 rtl:left-auto',
      lg: 'left-4 rtl:right-4 rtl:left-auto',
      xl: 'left-5 rtl:right-5 rtl:left-auto',
    },
    right: {
      sm: 'right-2.5 rtl:left-2.5 rtl:right-auto',
      DEFAULT: 'right-4 rtl:left-4 rtl:right-auto',
      lg: 'right-4 rtl:left-4 rtl:right-auto',
      xl: 'right-5 rtl:left-5 rtl:right-auto',
    },
  },
};

const iconClasses = {
  base: 'text-gray-400',
  size: {
    sm: 'h-4 w-4',
    DEFAULT: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-7 w-7',
  },
};

export type NotificationCardProps = {
  /** The size of the component. */
  size?: keyof typeof classes.size;
  /** The rounded variants are: */
  rounded?: keyof typeof classes.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof classes.variant;
  /** These are the color variations */
  color?: keyof typeof classes.variant.flat.color;
  /** Pass notification title */
  title: string;
  /** Pass notification message as children */
  description: string;
  /** Pass onClear function to clear notification */
  onClear?(): void;
  /** Place icons, avatar or image at start */
  media?: React.ReactNode;
  /** Customize right icon according to your preference */
  suffix?: React.ReactNode;
  /** To style the container */
  containerClassName?: string;
  /** Add className to design the notification message body */
  className?: string;
  /** To customize media style */
  mediaClassName?: string;
  /** To customize suffix style */
  suffixClassName?: string;
  /** Add iconClassName to design the default icon */
  iconClassName?: string;
};

/** A NotificationCard component is used to show notification message.
 * Here is the API documentation of the NotificationCard component.
 */

const NotificationCard = ({
  size = 'DEFAULT',
  rounded = 'DEFAULT',
  variant = 'flat',
  color = 'DEFAULT',
  title,
  description,
  media,
  suffix,
  onClear,
  containerClassName,
  className,
  mediaClassName,
  suffixClassName,
  iconClassName,
}: NotificationCardProps) => (
  <div
    className={cn(
      classes.base,
      classes.size[size],
      classes.rounded[rounded],
      classes.variant[variant].base,
      classes.variant[variant].color[color],
      containerClassName
    )}
  >
    {media && (
      <div
        className={cn(
          mediaSuffixClasses.base,
          mediaSuffixClasses.padding[size],
          mediaSuffixClasses.position.left[size],
          mediaClassName
        )}
      >
        {media}
      </div>
    )}

    <div
      className={cn(
        media && classes.leftPadding.base,
        media && classes.leftPadding.size[size],
        className
      )}
    >
      <h2 className={cn('aegon-notification-title', titleClasses.size[size])}>
        {title}
      </h2>
      <p className="aegon-notification-description">{description}</p>
    </div>

    <div
      className={cn(
        mediaSuffixClasses.base,
        mediaSuffixClasses.padding[size],
        mediaSuffixClasses.position.right[size],
        suffixClassName
      )}
    >
      {suffix || (
        <span
          role="button"
          tabIndex={0}
          onClick={onClear}
          className={cn(iconClasses.base, iconClassName)}
        >
          <XIcon className={cn('cursor-pointer', iconClasses.size[size])} />
        </span>
      )}
    </div>
  </div>
);

NotificationCard.displayName = 'NotificationCard';
export default NotificationCard;
