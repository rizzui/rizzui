import type { ReactNode } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const modal = tv({
  slots: {
    root: 'fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden',
    area: 'flex min-h-screen flex-col items-center justify-center',
    overlay:
      'fixed inset-0 cursor-pointer bg-black/60 z-10 duration-300 ease-in-out data-[closed]:opacity-0',
    panel:
      'm-auto w-full break-words bg-background shadow-xl z-20 duration-300 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0 rounded-[var(--border-radius)]',
  },
  variants: {
    size: {
      sm: { panel: 'max-w-xl' },
      md: { panel: 'max-w-2xl' },
      lg: { panel: 'max-w-4xl' },
      full: { panel: 'max-w-full min-h-screen' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ModalVariant = VariantProps<typeof modal>;

export type ModalSize = ModalVariant['size'];

export type ModalProps = {
  isOpen: boolean;
  onClose(): void;
  size?: ModalSize;
  noGutter?: boolean;
  customSize?: number;
  overlayClassName?: string;
  containerClassName?: string;
  className?: string;
  children?: ReactNode;
};

export function Modal({
  isOpen,
  onClose,
  children,
  noGutter,
  className,
  size = 'md',
  customSize,
  overlayClassName,
  containerClassName,
}: ModalProps) {
  const { root, area, overlay: overlayClass, panel } = modal({ size });

  return (
    <Dialog open={isOpen} onClose={onClose} className={root({ className })}>
      <div
        className={cn(area(), size !== 'full' && [!noGutter && 'p-4 sm:p-5'])}
      >
        <DialogBackdrop
          transition
          className={overlayClass({ className: overlayClassName })}
        />
        <DialogPanel
          transition
          className={panel({ className: containerClassName })}
          {...((customSize || customSize === 0) && {
            style: {
              maxWidth: `${customSize}px` || 'inherit',
            },
          })}
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

Modal.displayName = 'Modal';
