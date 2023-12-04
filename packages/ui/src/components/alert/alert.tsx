import React from 'react';
import { XIcon } from '../../icons/x-mark';
import { cn } from '../../lib/cn';
import { AlertIcon } from './icons';
import { makeClassName } from '../../lib/make-class-name';

const classes = {
  base: 'relative block w-full bg-transparent break-all dark:backdrop-blur',
  size: {
    sm: 'px-2.5 py-2 text-xs leading-5',
    md: 'px-4 py-3 text-sm leading-6',
    lg: 'px-4 py-4 text-base leading-7',
    xl: 'px-5 py-5 text-base leading-7',
  },
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  leftPadding: {
    size: {
      sm: 'ps-8',
      md: 'ps-10',
      lg: 'ps-11',
      xl: 'ps-12',
    },
  },
  rightPadding: {
    size: {
      sm: 'pe-8',
      md: 'pe-10',
      lg: 'pe-11',
      xl: 'pe-12',
    },
  },
  variant: {
    flat: {
      base: 'border text-gray-900',
      color: {
        danger: 'bg-red-lighter/70 dark:bg-red/10 border-red-dark',
        info: 'bg-blue-lighter/70 dark:bg-blue/10 border-blue-dark',
        success: 'bg-green-lighter/70 dark:bg-green/10 border-green-dark',
        warning: 'bg-orange-lighter/80 dark:bg-orange/10 border-orange-dark',
      },
    },
    outline: {
      base: 'border bg-transparent',
      color: {
        danger: 'border-red',
        info: 'border-blue',
        success: 'border-green',
        warning: 'border-orange',
      },
    },
  },
};

const iconContainerClasses = {
  base: 'absolute top-0 h-full flex items-center justify-center',
  position: {
    left: {
      sm: 'start-2.5',
      md: 'start-4',
      lg: 'start-4',
      xl: 'start-5',
    },
    right: {
      sm: 'end-2.5',
      md: 'end-4',
      lg: 'end-4',
      xl: 'end-5',
    },
  },
};

const iconClasses = {
  base: 'flex justify-center items-center p-1',
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-md',
    xl: 'rounded-lg',
  },
  size: {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  },
  iconColor: {
    danger: 'bg-red text-white ',
    info: 'bg-blue text-white ',
    success: 'bg-green text-white ',
    warning: 'bg-orange text-white ',
  },
  variant: {
    flat: {
      base: 'bg-white',
      color: {
        danger: 'text-red',
        info: 'text-blue',
        success: 'text-green',
        warning: 'text-orange',
      },
    },
    outline: {
      base: 'bg-white border',
      color: {
        danger: 'text-red border-red',
        info: 'text-blue border-blue',
        success: 'text-green border-green',
        warning: 'text-orange border-orange',
      },
    },
  },
};

const barClasses = {
  base: 'absolute left-0 top-0 h-full p-0.5 rtl:right-0 rtl:left-auto',
  rounded: {
    none: 'rounded-tl-none rounded-bl-none',
    sm: 'rounded-tl-sm rounded-bl-sm',
    md: 'rounded-tl-md rounded-bl-md',
    lg: 'rounded-tl-lg rounded-bl-lg',
    xl: 'rounded-tl-xl rounded-bl-xl',
  },
  color: {
    danger: 'bg-red',
    info: 'bg-blue',
    success: 'bg-green',
    warning: 'bg-orange',
  },
};

export type AlertProps = {
  /** The size of the component. */
  size?: keyof typeof classes.size;
  /** The rounded variants are: */
  rounded?: keyof typeof classes.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof classes.variant;
  /** Change input color */
  color: keyof typeof classes.variant.flat.color;
  /** Whether left bar should be visible */
  bar?: boolean;
  /** Pass alert message as children */
  children: React.ReactNode;
  /** Add closable option */
  closable?: boolean;
  /** Pass onClick function to clear alert */
  onClose?: (event: React.MouseEvent) => void;
  /** Customize start icon according to your preference */
  icon?: React.ReactNode;
  /** Customize close icon according to your preference */
  closeIcon?: React.ReactNode;
  /** Add className to design the container */
  className?: string;
  /** Add barClassName to design the left bar */
  barClassName?: string;
  /** Add iconContainerClassName to position the icons */
  iconContainerClassName?: string;
  /** Add iconClassName to design the default icons */
  iconClassName?: string;
};

/**
 * A simple alert component for showing alert message. Here is the API documentation of the Alert component.
 * You can use the following props to create a demo for alert.
 */
export function Alert({
  size = 'md',
  rounded = 'md',
  variant = 'outline',
  color,
  bar = false,
  children,
  closable,
  onClose,
  icon,
  closeIcon,
  className,
  barClassName,
  iconContainerClassName,
  iconClassName,
}: AlertProps) {
  return (
    <div
      data-testid="alert-parent"
      className={cn(
        makeClassName(`alert-root`),
        classes.base,
        classes.size[size],
        classes.rounded[rounded],
        classes.variant[variant].base,
        classes.variant[variant].color[color],
        bar && variant !== 'outline' && '!border-0',
        className,
      )}
    >
      {bar && (
        <span
          data-testid="alert-bar"
          className={cn(
            makeClassName(`alert-bar`),
            barClasses.base,
            barClasses.rounded[rounded],
            barClasses.color[color],
            barClassName,
          )}
        />
      )}
      <div
        data-testid="alert-content"
        className={cn(
          makeClassName(`alert-content`),
          iconContainerClasses.base,
          iconContainerClasses.position.left[size],
          iconContainerClassName,
        )}
      >
        {icon || (
          <span
            className={cn(
              makeClassName(`alert-icon`),
              iconClasses.base,
              iconClasses.rounded[rounded],
              iconClasses.iconColor[color],
              iconClassName,
            )}
          >
            <AlertIcon size={size} color={color} />
          </span>
        )}
      </div>
      <div
        className={cn(
          makeClassName(`alert-content`),
          classes.leftPadding.size[size],
          closable && classes.rightPadding.size[size],
        )}
      >
        {children}
      </div>
      {(closable || closeIcon) && (
        <div
          role="button"
          tabIndex={0}
          className={cn(
            makeClassName(`alert-close`),
            iconContainerClasses.base,
            iconContainerClasses.position.right[size],
          )}
          onClick={onClose}
        >
          {closeIcon || (
            <span
              className={cn(
                iconClasses.base,
                iconClasses.rounded[rounded],
                iconClasses.variant[variant].base,
                iconClasses.variant[variant].color[color],
              )}
            >
              <XIcon
                data-testid="alert-clear-icon"
                className={cn('cursor-pointer', iconClasses.size[size])}
              />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';
