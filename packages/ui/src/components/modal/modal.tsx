import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { cn } from '../../lib/cn';

const modalStyles = {
  root: 'rizzui-modal-root fixed inset-0 z-[999] overflow-y-auto overflow-x-hidden',
  area: 'rizzui-modal-area flex min-h-screen flex-col items-center justify-center',
  overlay:
    'rizzui-modal-overlay fixed inset-0 cursor-pointer bg-black bg-opacity-60 dark:bg-opacity-80 z-10',
  panel:
    'rizzui-modal-panel m-auto w-full break-words bg-background shadow-xl z-20',
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
  overlayClassName,
  containerClassName,
}: React.PropsWithChildren<ModalProps>) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={cn(modalStyles.root, className)}
    >
      <div
        className={cn(
          modalStyles.area,
          size !== 'full' && [!noGutter && 'p-4 sm:p-5']
        )}
      >
        <DialogBackdrop className={cn(modalStyles.overlay, overlayClassName)} />
        <DialogPanel
          className={cn(
            modalStyles.panel,
            modalStyles.size[size],
            size !== 'full' && modalStyles.rounded[rounded],
            containerClassName
          )}
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

Modal.displayName = 'Modal';
