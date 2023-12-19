import React from 'react';
import { cn } from '../lib/cn';
import { makeClassName } from '../lib/make-class-name';

const clearBtnStyles = {
  base: 'inline-flex shrink-0 transform items-center justify-center rounded-full bg-muted/70 backdrop-blur text-foreground/90 transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground',
  size: {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-4 w-4',
    xl: 'h-[18px] w-[18px]',
  },
  hasSuffix: {
    sm: 'me-1.5',
    md: 'me-2',
    lg: 'me-2.5',
    xl: 'me-2.5',
  },
};

export interface FieldClearButtonProps {
  hasSuffix?: boolean;
  size?: keyof typeof clearBtnStyles.size;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export function FieldClearButton({
  size,
  onClick,
  hasSuffix,
  className,
}: FieldClearButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        makeClassName(`input-clear-btn`),
        'input-clear-btn', // must contain this CSS class in this component
        clearBtnStyles.base,
        size && [
          clearBtnStyles.size[size],
          hasSuffix && clearBtnStyles.hasSuffix[size],
        ],
        className
      )}
    >
      {/* HeroIcon: x-mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-auto"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  );
}

FieldClearButton.displayName = 'FieldClearButton';
