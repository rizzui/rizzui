import React from 'react';
import { XIcon } from '../../icons/x-mark';
import { cn } from '../../lib/cn';
import { AlertIcon } from './icons';
import { makeClassName } from '../../lib/make-class-name';

const alertStyles = {
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
      base: 'border',
      color: {
        danger: 'bg-red-lighter/70 border-red dark:border-red/70',
        info: 'bg-blue-lighter/70 border-blue dark:border-blue/70',
        success: 'bg-green-lighter/70 border-green dark:border-green/70',
        warning: 'bg-orange-lighter/70 border-orange dark:border-orange/70',
      },
    },
    outline: {
      base: 'border bg-transparent',
      color: {
        danger: 'border-red dark:border-red/70',
        info: 'border-blue dark:border-blue/70',
        success: 'border-green dark:border-green/70',
        warning: 'border-orange dark:border-orange/70',
      },
    },
  },
};

const iconWrapperStyles = {
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

const iconStyles = {
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

const barStyles = {
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
  size?: keyof typeof alertStyles.size;
  /** The rounded variants are: */
  rounded?: keyof typeof alertStyles.rounded;
  /** The variants of the component are: */
  variant?: keyof typeof alertStyles.variant;
  /** Change input color */
  color: keyof typeof alertStyles.variant.flat.color;
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
        alertStyles.base,
        alertStyles.size[size],
        alertStyles.rounded[rounded],
        alertStyles.variant[variant].base,
        alertStyles.variant[variant].color[color],
        bar && variant !== 'outline' && '!border-0',
        className
      )}
    >
      {bar && (
        <span
          data-testid="alert-bar"
          className={cn(
            makeClassName(`alert-bar`),
            barStyles.base,
            barStyles.rounded[rounded],
            barStyles.color[color],
            barClassName
          )}
        />
      )}
      <div
        data-testid="alert-content"
        className={cn(
          makeClassName(`alert-content`),
          iconWrapperStyles.base,
          iconWrapperStyles.position.left[size],
          iconContainerClassName
        )}
      >
        {icon || (
          <span
            className={cn(
              makeClassName(`alert-icon`),
              iconStyles.base,
              iconStyles.rounded[rounded],
              iconStyles.iconColor[color],
              iconClassName
            )}
          >
            <AlertIcon size={size} color={color} />
          </span>
        )}
      </div>
      <div
        className={cn(
          makeClassName(`alert-content`),
          alertStyles.leftPadding.size[size],
          closable && alertStyles.rightPadding.size[size]
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
            iconWrapperStyles.base,
            iconWrapperStyles.position.right[size]
          )}
          onClick={onClose}
        >
          {closeIcon || (
            <span
              className={cn(
                iconStyles.base,
                iconStyles.rounded[rounded],
                iconStyles.variant[variant].base,
                iconStyles.variant[variant].color[color]
              )}
            >
              <XIcon
                data-testid="alert-clear-icon"
                className={cn('cursor-pointer', iconStyles.size[size])}
              />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';
