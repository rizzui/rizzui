import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { XIcon } from '../../icons/x-mark';
import { AlertIcon } from './icons';
import { makeClassName } from '../../lib/make-class-name';

const alert = tv({
  slots: {
    root: 'relative block w-full bg-transparent break-all dark:backdrop-blur rounded-[var(--border-radius)] border-[length:var(--border-width)]',
    bar: 'absolute left-0 top-0 h-full p-0.5 rtl:right-0 rtl:left-auto rounded-tl-[var(--border-radius)] rounded-bl-[var(--border-radius)]',
    iconWrapper: 'absolute top-0 h-full flex items-center justify-center',
    icon: 'flex justify-center items-center p-1 rounded-[calc(var(--border-radius)/2)]',
    content: '',
    closeWrapper: 'absolute top-0 h-full flex items-center justify-center',
  },
  variants: {
    variant: {
      flat: {
        root: '',
      },
      outline: {
        root: 'border-border bg-transparent',
      },
    },
    color: {
      danger: {},
      info: {},
      success: {},
      warning: {},
    },
    size: {
      sm: {
        root: 'px-2.5 py-2 text-xs leading-5',
        icon: 'h-3 w-3',
        iconWrapper: 'start-2.5',
        closeWrapper: 'end-2.5',
        content: 'ps-8',
      },
      md: {
        root: 'px-4 py-3 text-sm leading-6',
        icon: 'h-4 w-4',
        iconWrapper: 'start-4',
        closeWrapper: 'end-4',
        content: 'ps-10',
      },
      lg: {
        root: 'px-4 py-4 text-base leading-7',
        icon: 'h-5 w-5',
        iconWrapper: 'start-4',
        closeWrapper: 'end-4',
        content: 'ps-11',
      },
    },
    closable: {
      true: {},
    },
    bar: {
      true: {},
    },
  },
  compoundVariants: [
    // Flat + colors for root
    {
      variant: 'flat',
      color: 'danger',
      class: { root: 'bg-red-lighter/70 border-red dark:border-red/70' },
    },
    {
      variant: 'flat',
      color: 'info',
      class: { root: 'bg-blue-lighter/70 border-blue dark:border-blue/70' },
    },
    {
      variant: 'flat',
      color: 'success',
      class: { root: 'bg-green-lighter/70 border-green dark:border-green/70' },
    },
    {
      variant: 'flat',
      color: 'warning',
      class: {
        root: 'bg-orange-lighter/70 border-orange dark:border-orange/70',
      },
    },
    // Outline + colors for root
    {
      variant: 'outline',
      color: 'danger',
      class: { root: 'border-red dark:border-red/70' },
    },
    {
      variant: 'outline',
      color: 'info',
      class: { root: 'border-blue dark:border-blue/70' },
    },
    {
      variant: 'outline',
      color: 'success',
      class: { root: 'border-green dark:border-green/70' },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { root: 'border-orange dark:border-orange/70' },
    },
    // Bar colors
    { color: 'danger', class: { bar: 'bg-red' } },
    { color: 'info', class: { bar: 'bg-blue' } },
    { color: 'success', class: { bar: 'bg-green' } },
    { color: 'warning', class: { bar: 'bg-orange' } },
    // Icon colors (solid)
    { color: 'danger', class: { icon: 'bg-red text-white' } },
    { color: 'info', class: { icon: 'bg-blue text-white' } },
    { color: 'success', class: { icon: 'bg-green text-white' } },
    { color: 'warning', class: { icon: 'bg-orange text-white' } },
    // Flat icons
    { variant: 'flat', color: 'danger', class: { icon: 'bg-white text-red' } },
    { variant: 'flat', color: 'info', class: { icon: 'bg-white text-blue' } },
    {
      variant: 'flat',
      color: 'success',
      class: { icon: 'bg-white text-green' },
    },
    {
      variant: 'flat',
      color: 'warning',
      class: { icon: 'bg-white text-orange' },
    },
    // Outline icons
    {
      variant: 'outline',
      color: 'danger',
      class: { icon: 'bg-white border text-red border-red' },
    },
    {
      variant: 'outline',
      color: 'info',
      class: { icon: 'bg-white border text-blue border-blue' },
    },
    {
      variant: 'outline',
      color: 'success',
      class: { icon: 'bg-white border text-green border-green' },
    },
    {
      variant: 'outline',
      color: 'warning',
      class: { icon: 'bg-white border text-orange border-orange' },
    },
    // Closable padding
    { closable: true, size: 'sm', class: { content: 'pe-8' } },
    { closable: true, size: 'md', class: { content: 'pe-10' } },
    { closable: true, size: 'lg', class: { content: 'pe-11' } },
    // Bar removes border
    { bar: true, variant: 'flat', class: { root: '!border-0' } },
  ],
  defaultVariants: {
    variant: 'outline',
    size: 'md',
    rounded: 'md',
  },
});

export type AlertProps = {
  size?: VariantProps<typeof alert>['size'];
  variant?: VariantProps<typeof alert>['variant'];
  color: 'danger' | 'info' | 'success' | 'warning';
  bar?: boolean;
  children: React.ReactNode;
  closable?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  className?: string;
  barClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * A simple alert component for showing alert message. Here is the API documentation of the Alert component.
 * You can use the following props to create a demo for alert.
 */
export function Alert({
  size = 'md',
  variant = 'outline',
  color,
  bar: showBar = false,
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
  const {
    root,
    bar,
    iconWrapper,
    icon: iconClass,
    content,
    closeWrapper,
  } = alert({ variant, color, size, closable, bar: showBar });

  return (
    <div data-testid="alert-parent" className={root({ className })}>
      {showBar && (
        <span
          data-testid="alert-bar"
          className={bar({ className: barClassName })}
        />
      )}

      <div
        data-testid="alert-content"
        className={iconWrapper({ className: iconContainerClassName })}
      >
        {icon || (
          <span className={iconClass({ className: iconClassName })}>
            <AlertIcon size={size} color={color} />
          </span>
        )}
      </div>

      <div className={content()}>{children}</div>

      {(closable || closeIcon) && (
        <div
          role="button"
          tabIndex={0}
          className={closeWrapper()}
          onClick={onClose}
        >
          {closeIcon || (
            <span className={iconClass({ className: 'bg-transparent' })}>
              <XIcon
                data-testid="alert-clear-icon"
                className="cursor-pointer"
              />
            </span>
          )}
        </div>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';
