import type { ReactNode, MouseEvent } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { XIcon } from '../../icons/x-mark';
import { AlertIcon } from './icons';
import { makeClassName } from '../../lib/make-class-name';
import { cn } from '../../lib/cn';

const alert = tv({
  slots: {
    root: 'relative block w-full break-all dark:backdrop-blur rounded-[var(--border-radius)] border-[length:var(--border-width)] bg-transparent',
    bar: 'absolute left-0 top-0 h-full w-1 rtl:right-0 rtl:left-auto rounded-s-[var(--border-radius)]',
    iconWrapper:
      'absolute top-0 h-full flex items-center justify-center text-muted-foreground',
    content: '',
    closeWrapper: 'absolute top-0 h-full flex items-center justify-center',
  },
  variants: {
    color: {
      danger: {},
      info: {},
      success: {},
      warning: {},
    },
    size: {
      sm: {
        root: 'px-2.5 py-2 text-xs leading-5',
        iconWrapper: 'start-2.5',
        closeWrapper: 'end-2.5',
        content: 'ps-6',
      },
      md: {
        root: 'px-4 py-3 text-sm leading-6',
        iconWrapper: 'start-4',
        closeWrapper: 'end-4',
        content: 'ps-8',
      },
      lg: {
        root: 'px-4 py-4 text-base leading-7',
        iconWrapper: 'start-4',
        closeWrapper: 'end-4',
        content: 'ps-9',
      },
    },
    closable: {
      true: {},
    },
  },
  compoundVariants: [
    // Root + colors for border
    { color: 'danger', class: { root: 'border-muted' } },
    { color: 'info', class: { root: 'border-muted' } },
    { color: 'success', class: { root: 'border-muted' } },
    { color: 'warning', class: { root: 'border-muted' } },
    // Bar colors
    { color: 'danger', class: { bar: 'bg-red' } },
    { color: 'info', class: { bar: 'bg-blue' } },
    { color: 'success', class: { bar: 'bg-green' } },
    { color: 'warning', class: { bar: 'bg-orange' } },
    // Closable padding
    { closable: true, size: 'sm', class: { content: 'pe-8' } },
    { closable: true, size: 'md', class: { content: 'pe-10' } },
    { closable: true, size: 'lg', class: { content: 'pe-11' } },
  ],
  defaultVariants: {
    size: 'md',
  },
});

export type AlertProps = {
  size?: VariantProps<typeof alert>['size'];
  color: 'danger' | 'info' | 'success' | 'warning';
  children: ReactNode;
  closable?: boolean;
  onClose?: (event: MouseEvent) => void;
  icon?: ReactNode;
  closeIcon?: ReactNode;
  className?: string;
  barClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

export function Alert({
  size = 'md',
  color,
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
  const { root, bar, iconWrapper, content, closeWrapper } = alert({
    color,
    size,
    closable,
  });

  return (
    <div data-testid="alert-parent" className={root({ className })}>
      <span
        data-testid="alert-bar"
        className={bar({ className: barClassName })}
      />

      <div
        data-testid="alert-content"
        className={cn(
          iconWrapper({ className: iconContainerClassName }),
          iconClassName
        )}
      >
        {icon || <AlertIcon size={size} color={color} />}
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
            <XIcon
              data-testid="alert-clear-icon"
              className="text-muted-foreground cursor-pointer"
            />
          )}
        </div>
      )}
    </div>
  );
}

Alert.displayName = 'Alert';
