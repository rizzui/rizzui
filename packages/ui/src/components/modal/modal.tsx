import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { cn } from '../../lib/cn';
import { makeClassName } from '../../lib/make-class-name';

const modalStyles = {
  root: 'fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden',
  area: 'flex min-h-screen flex-col items-center justify-center',
  overlay:
    'fixed inset-0 cursor-pointer bg-black bg-opacity-60 dark:bg-opacity-80 z-10 duration-300 ease-in-out data-[closed]:opacity-0',
  panel:
    'm-auto w-full break-words bg-background shadow-xl z-20 duration-300 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0',
  size: {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-[60%]',
    full: 'max-w-full min-h-screen',
  },
  // -> modal require extra rounded corner
  rounded: {
    none: 'rounded-none',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
  },
};

export type ModalSize = keyof typeof modalStyles.size;

export type ModalProps = {
  /** Whether the Modal is open or not */
  isOpen: boolean;
  /** Called when modal is closed (Escape key and click outside, depending on options) */
  onClose(): void;
  /** Preset size of modal is sm, DEFAULT, lg, xl, full */
  size?: ModalSize;
  /** Removes padding from scroll area when modal size is full */
  noGutter?: boolean;
  /** The rounded variants are: */
  rounded?: keyof typeof modalStyles.rounded;
  /** Size prop will not work when you are using customSize prop. Here is the example of using this prop -> customSize={500} */
  customSize?: number;
  /** Override default CSS style of Modal's overlay */
  overlayClassName?: string;
  /** Set custom style classes for the Modal container, where you can set custom Modal size and padding and background color */
  containerClassName?: string;
  /** Set custom style classes for the Modal root element */
  className?: string;
};

/**
 * A fully-managed render-less Modal component. When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information.
 */
export function Modal({
  isOpen,
  onClose,
  children,
  noGutter,
  className,
  size = 'md',
  rounded = 'md',
  customSize,
  overlayClassName,
  containerClassName,
}: React.PropsWithChildren<ModalProps>) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={cn(makeClassName(`modal-root`), modalStyles.root, className)}
    >
      <div
        className={cn(
          makeClassName(`modal-area`),
          modalStyles.area,
          size !== 'full' && [!noGutter && 'p-4 sm:p-5']
        )}
      >
        <DialogBackdrop
          transition
          className={cn(
            makeClassName(`modal-overlay`),
            modalStyles.overlay,
            overlayClassName
          )}
        />
        <DialogPanel
          transition
          className={cn(
            makeClassName(`modal-panel`),
            modalStyles.panel,
            size !== 'full' && modalStyles.rounded[rounded],
            !customSize && customSize !== 0 && modalStyles.size[size],
            containerClassName
          )}
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
